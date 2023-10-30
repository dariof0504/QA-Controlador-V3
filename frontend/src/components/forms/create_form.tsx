import { question } from "../../types/questions";
import { GENERAL_FORM } from "./general_form";

export const CREATE_FORM = (props: {
  instance_props: question;
  state: any;
  stateFn: Function;
  apiFn: Function;
}) => {
  const { apiFn, instance_props, state, stateFn } = props;

  return (
    <div>
      <GENERAL_FORM
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
      <button onClick={() => apiFn()}>Guardar</button>
    </div>
  );
};
