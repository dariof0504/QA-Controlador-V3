import { stat } from "fs";
import { instance } from "../../types/questions";
import { BOOL_FIELD_VIEW } from "./fields/bool_field_view";
import { TYPING_FIELD_VIEW } from "./fields/typing_field_view";
import { SELECTION_FIELD_VIEW } from "./fields/selection_field_view";
import { JSON_FIELD_VIEW } from "./fields/json_field_view";
import { CONDITIONAL_FIELD_VIEW } from "./fields/conditional_field_view";

export const INSTANCE_ROUTER_VIEW = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  const { type } = props.instance_props;

  if (type === "TYPING") {
    return (
      <TYPING_FIELD_VIEW
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
    );
  } else if (type === "BOOL") {
    return (
      <BOOL_FIELD_VIEW
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
    );
  } else if (type === "SELECTION") {
    return (
      <SELECTION_FIELD_VIEW
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
    );
  } else if (type === "JSON") {
    return (
      <JSON_FIELD_VIEW
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
    );
  } else if (type === "CONDITIONAL") {
    return (
      <CONDITIONAL_FIELD_VIEW
        instance_props={instance_props}
        state={state}
        stateFn={stateFn}
      />
    );
  } else return <></>;
};
