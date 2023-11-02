import { instance, instance_type } from "../../../types/questions";

export const Boolean_instance = (props: instance) => {
  const { instance_props, state, stateFn } = props;
  const { display_name, field_name }: instance_type = instance_props;

  const handleValue = () => {
    const result = { ...state, [field_name]: !state[field_name] };
    stateFn(result);
  };

  return (
    <label className="booleanInstance" >
      <p>{display_name}</p>
      <input
        checked={state[field_name]}
        type="checkbox"
        onChange={() => handleValue()}
        value={state[field_name]}
      />
    </label>
  );
};
