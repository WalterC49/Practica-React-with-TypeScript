import { useEffect, useState } from "react";
import { Sub } from "./../types.d";
import { getAllSubs } from "./../services/getAllSubs";

export const useSubs = () => {
  const [subs, setSubs] = useState<Sub[]>([]);
  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  const updateSubs = (newSub: Sub) => {
    setSubs([...subs, newSub]);
  };

  return { subs, updateSubs };
};
