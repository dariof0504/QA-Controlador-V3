import { component } from "../../data/instances_schema";
import { useState } from "react";
import { get_initial_value } from "../../functions/general_functions";
import { generalApi } from "../../api/axios";
import { CREATE_FORM } from "../../components/forms/create_form";
import { useNavigate, useParams } from "react-router-dom";

export const CREATE_COMPONENT_PAGE = () => {
  const { fk } = useParams();
  const initial_value = get_initial_value(component.instances);
  const [element, setElement] = useState({
    ...initial_value,
    fk_module_pk_component: fk,
  });

  const navigate = useNavigate()

  const handleCreate = async () => {
    const result = await generalApi(component, element, "POST");
    console.log(result);
    navigate(`/list/component/${fk}`)
  };

  return (
    <div className="form_element" >
      <CREATE_FORM
        apiFn={handleCreate}
        instance_props={component}
        state={element}
        stateFn={setElement}
      />
    </div>
  );
};
