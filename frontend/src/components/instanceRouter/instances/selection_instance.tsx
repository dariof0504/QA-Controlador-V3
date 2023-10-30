import { selection_instance } from "../../../types/questions";
import { ChangeEvent } from "react";

export const Selection_instance = (props: {
  instance_props: selection_instance;
  state: any;
  stateFn: Function;
}) => {
  const { display_name, field_name, options } =
    props.instance_props;
  const { state, stateFn } = props;

  const handleOption = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const result = { ...state, [field_name]: value };
    stateFn(result);
  };

  return (
    <div className="selectionInstance" >
      <p>{display_name}</p>
      <select value={state[field_name]} onChange={(e) => handleOption(e)}>
      {options.map((opt) => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
    </div>
  );
};
