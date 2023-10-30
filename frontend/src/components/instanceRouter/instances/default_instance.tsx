import { type_instance } from "../../../types/questions";
import { ChangeEvent } from "react";
import './style.css'

export const Default_instance = (props: {
  instance_props: type_instance,
  state: any,
  stateFn: Function
}) => {
  const { display_name, field_name, data_type } = props.instance_props;
  const { state, stateFn } = props

  const handleEstate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const result = { ...state, [field_name]: value };
    stateFn(result);
  };

  return (
    <div className="defaultInstance" >
      <p>{display_name}</p>
      <input onChange={(e) => handleEstate(e)} type={data_type} />
    </div>
  );
};
