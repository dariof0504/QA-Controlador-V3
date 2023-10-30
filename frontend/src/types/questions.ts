//Solo tienen valor inicial los apartados tipo bool o tipo seleccion

export interface instance_type {
  display_name: string;
  field_name: string;
  type?: "TYPING" | "ARRAY" | "JSON" | "CONDITIONAL" | "BOOL" | "SELECTION";
  initial_value?: any
}

export interface type_instance extends instance_type {
  data_type?: "number" | "text";
}

export interface selection_instance extends instance_type {
  options: string[]
}

export interface json_instance extends instance_type {
  instances: arrayInstances;
}

export interface conditional_instance extends instance_type {
  field_depends: string;
  condition: any;
  instances: arrayInstances;
}

export interface array_instance extends instance_type {
  instances: arrayInstances;
}

type arrayInstances = (
  | conditional_instance
  | type_instance
  | array_instance
  | json_instance
)[];

export interface instance {
  instance_props: any
  state: any;
  stateFn: Function;
}

export interface question {
  display_name: string;
  field_name: string;
  instances: object[];
}
