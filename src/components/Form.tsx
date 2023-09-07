import useNewSubForm from "../hook/useNewSubForm";
import { Sub } from "./../types.d";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

const Form = ({ onNewSub }: FormProps) => {
  /* const [inputValues, setInputValues] =
    useState<FormState["inputValues"]>(INITIAL_STATE); */

  const [inputValues, dispatch] = useNewSubForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNewSub(inputValues);
    dispatch({
      type: "clear",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
    /* setInputValues({
      ...inputValues,
      [e.target.name]: e.target.value,
    }); */
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch({
      type: "clear",
    });
    /* setInputValues(INITIAL_STATE); */
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
        />
        <input
          onChange={handleChange}
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
        />
        <input
          onChange={handleChange}
          value={inputValues.subMonths}
          type="number"
          name="subMonths"
          placeholder="subMonths"
        />
        <textarea
          onChange={handleChange}
          value={inputValues.description}
          name="description"
          placeholder="description"
        />
        <button onClick={handleClick} type="button">
          Clear the form
        </button>
        <button type="submit">Save new Sub!</button>
      </form>
    </div>
  );
};

export default Form;
