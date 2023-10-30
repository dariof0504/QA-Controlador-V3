import { question } from "../../types/questions";
import { Instance_router } from "../instanceRouter/instance_router";

export const GENERAL_FORM = (props: {
  instance_props: question;
  state: any;
  stateFn: Function;
}) => {
  const { instance_props, state, stateFn } = props;
  const { display_name, instances } = instance_props;

  return (
    <div className="formElement" >
      <p>{display_name}</p>
      {instances.map((instance) => (
        <Instance_router
          instance_props={instance}
          state={state}
          stateFn={stateFn}
        />
      ))}
    </div>
  );
};
