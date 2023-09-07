import { Sub } from "./../types.d";

interface Props {
  subs: Array<Sub>;
}

export default function List({ subs }: Props) {
  // esta función podría ser un component
  const renderList = () => {
    return subs.map((sub) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={`Avatar para ${sub.nick}`} />
          <h4>
            {sub.nick} (<small>{sub.subMonths}</small>)
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
}
