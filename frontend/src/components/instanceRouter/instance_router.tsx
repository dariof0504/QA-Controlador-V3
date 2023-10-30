import { Default_instance } from "./instances/default_instance";
import { instance } from "../../types/questions";
import { Array_instance } from "./instances/array_instance";
import { Json_instance } from "./instances/json_instance";
import { Boolean_instance } from "./instances/boolean_instance";
import { Selection_instance } from "./instances/selection_instance";
import { Conditional_instance } from "./instances/conditional_instance";

export const Instance_router = (props: instance): any => {
  const { type } = props.instance_props;

  if (type === "ARRAY") {

    return array_comp(props);
  
  } else if (type === "CONDITIONAL") {
  
    return conditional_comp(props);
  
  } else if (type === "JSON") {
  
    return json_comp(props);
  
  } else if (type === "TYPING") {
  
    return default_comp(props);
  
  } else if (type === "SELECTION") {
  
    return selection_comp(props);
  
  } else if (type === "BOOL") {
  
    return bool_comp(props);
  
  }
};

const bool_comp = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  return (
    <Boolean_instance
      instance_props={instance_props}
      state={state}
      stateFn={stateFn}
    />
  );
};

const conditional_comp = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  return (
    <Conditional_instance
      instance_props={instance_props}
      state={state}
      stateFn={stateFn}
    />
  );
};

const default_comp = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  return (
    <Default_instance
      instance_props={instance_props}
      state={state}
      stateFn={stateFn}
    />
  );
};

const array_comp = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  return (
    <Array_instance
      instance_props={instance_props}
      state={state}
      stateFn={stateFn}
    />
  );
};

const json_comp = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  return (
    <Json_instance
      instance_props={instance_props}
      state={state}
      stateFn={stateFn}
    />
  );
};

const selection_comp = (props: instance) => {
  const { instance_props, state, stateFn } = props;

  return (
    <Selection_instance
      instance_props={instance_props}
      state={state}
      stateFn={stateFn}
    />
  );
};
