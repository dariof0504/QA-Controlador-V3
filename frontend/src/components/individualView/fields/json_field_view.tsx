import { instance, json_instance } from "../../../types/questions";
import { INSTANCE_ROUTER_VIEW } from "../instance_router_view";

export const JSON_FIELD_VIEW = (props: instance) => {
  const { state, stateFn } = props;

  const { display_name, field_name, instances } =
    props.instance_props as json_instance;

  const handleState = (element:any) => {
    const result = {...state, [field_name] : element}
    stateFn(result)
  }

  return (
    <div>
      <p>{display_name}</p>
      {instances.map((instance) => (
        <INSTANCE_ROUTER_VIEW
          instance_props={instance}
          state={state[field_name]}
          stateFn={handleState}
        />
      ))}
    </div>
  );
};
