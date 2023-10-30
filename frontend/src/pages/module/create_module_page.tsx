import { useNavigate, useParams } from "react-router-dom";
import { generalApi } from "../../api/axios";
import { CREATE_FORM } from "../../components/forms/create_form";
import { module_info } from "../../data/instances_schema";
import { get_initial_value } from "../../functions/general_functions";
import { useState } from "react";

export const CREATE_MODULE_PAGE = () => {
  const { fk } = useParams();

  const initial_value = get_initial_value(module_info.instances);
  const [element, setElement] = useState({
    ...initial_value,
    fk_product_pk_module: fk,
  });

  const navigate = useNavigate();

  const handleCreate = async () => {
    const result = await generalApi(module_info, element, "POST");
    console.log(result);
    navigate(`/list/module/${fk}`);
  };

  return (
    <div className="form_element">
      <CREATE_FORM
        apiFn={handleCreate}
        instance_props={module_info}
        state={element}
        stateFn={setElement}
      />
    </div>
  );
};
