import { useState } from "react";
import { instance, instance_type } from "../../../types/questions";
import { Instance_router } from "../../instanceRouter/instance_router";

export const BOOL_FIELD_VIEW = (props: instance) => {
  const [edit, setEdit] = useState(false);

  const { state, stateFn, instance_props } = props;
  const { display_name, field_name } = props.instance_props as instance_type;

  if (!edit) {
    return (
      <div>
        <p>{display_name}</p>
        <p>{state[field_name] ? "Verdadero" : "Falso"}</p>
        <button onClick={() => setEdit(!edit)}>Editar</button>
      </div>
    );
  } else
    return (
      <div>
        <Instance_router
          instance_props={instance_props}
          state={state}
          stateFn={stateFn}
        />
        <button onClick={() => setEdit(!edit)}>Guardar cambios</button>
      </div>
    );
};
