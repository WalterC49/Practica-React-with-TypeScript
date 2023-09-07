import axios from "axios";
import { Sub, SubsFromApi } from "../types";

// fetch
/* const fetchSubs = (): Promise<SubsFromApi> => {
      return fetch("http:localhost:3001/subs").then((res) => res.json());
    }; */

// axios // el SubsFromApi puede estar también en el return de la function
const fetchSubs = async () => {
  const response = await axios.get<SubsFromApi>("http:localhost:3001/subs");
  return response.data;
};

const mapFromApiToSubs = (apiResponse: SubsFromApi): Sub[] => {
  return apiResponse.map((subFromApi) => {
    const { nick, months, profileUrl, description } = subFromApi;

    return {
      nick,
      avatar: profileUrl,
      subMonths: months,
      description,
    };
  });
};

// lo cambie por getAllSubs
/* fetchSubs().then((subs) => {
        console.log(subs);
        setSubs(mapFromApiToSubs(subs));
      }); */

/* setSubs(INITIAL_STATE); */

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};
