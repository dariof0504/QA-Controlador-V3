import { json_instance } from "../../../types/questions";
import { useState, useEffect } from "react";
import { Instance_router } from "../instance_router";

export const Json_instance = (props: {
  instance_props: json_instance;
  state: any;
  stateFn: Function;
}) => {
  const { display_name, field_name, instances } = props.instance_props;
  const { state, stateFn } = props;
  const [element, setElement] = useState(state[field_name]);

  const handleGeneralState = () => {
    const result = { ...state, [field_name]: element };
    stateFn(result);
  };

  useEffect(() => {
    handleGeneralState();
  }, [element]);

  return (
    <div>
      <p>{display_name}</p>
      <div>
        {instances.map((instance) => (
          <Instance_router
            instance_props={instance}
            state={element}
            stateFn={setElement}
          />
        ))}
      </div>
    </div>
  );
};
