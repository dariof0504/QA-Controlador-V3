import { conditional_instance } from "../../../types/questions";
import { useState, useEffect } from "react";
import { Instance_router } from "../instance_router";

export const Conditional_instance = (props: {
  instance_props: conditional_instance;
  state: any;
  stateFn: Function;
}) => {
  const {
    field_name,
    field_depends,
    condition,
    instances,
  } = props.instance_props;

  const { state, stateFn } = props;
  const initialValue = state[field_name]

  const [element, setElement] = useState(initialValue);
  const [validator, setValidator] = useState(false);

  const handleGeneralState = () => {
    const result = { ...state, [field_name]: element };
    stateFn(result);
  };

  const { [field_depends] : field_value } = state

  //Cambia el estado del validador por cada cambio del apartado que depende
  useEffect(() => {
    if (state[field_depends] === condition) {
      setValidator(true);
    } else setValidator(false);
  }, [field_value]);

  useEffect(() => {
    handleGeneralState();
  }, [element]);

  const handleInstanceRouter = (instance: any) => {
    return (
      <Instance_router
        instance_props={instance}
        state={element}
        stateFn={setElement}
      />
    );
  };

  return (
    <div>
      {validator && (
        <div>
          {instances.map((instance) => handleInstanceRouter(instance))}
        </div>
      )}
    </div>
  );
};
