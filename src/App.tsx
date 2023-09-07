import "./App.css";
import { useRef } from "react";
import List from "./components/List";
import Form from "./components/Form";
import { Sub } from "./types.d";
import { useSubs } from "./hook/useSubs";

/* const INITIAL_STATE = [
  {
    nick: "Dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderador a veces.",
  },
  {
    nick: "sergio_serrano",
    subMonths: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
]; */

function App() {
  const divRef = useRef<HTMLDivElement>(null);

  const { subs, updateSubs } = useSubs();

  const handleNewSub = (newSub: Sub): void => {
    updateSubs(newSub);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Walter Subs:</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
