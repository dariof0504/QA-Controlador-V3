import { instance, selection_instance } from "../../../types/questions";
import { Instance_router } from "../../instanceRouter/instance_router";

export const SELECTION_FIELD_VIEW = (props: instance) => {
  const { state, stateFn, instance_props } = props;
  const { display_name, field_name } =
    props.instance_props as selection_instance;

  return (
    <div>
      <p>{display_name}</p>
      <Instance_router
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
    </div>
  );
};
