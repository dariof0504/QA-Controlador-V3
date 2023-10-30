import { useState } from "react";
import { product } from "../../data/instances_schema";
import { get_initial_value } from "../../functions/general_functions";
import { generalApi } from "../../api/axios";
import { CREATE_FORM } from "../../components/forms/create_form";

export const CREATE_PRODUCT_PAGE = () => {
  const initial_value = get_initial_value(product.instances);
  const [element, setElement] = useState(initial_value);

  const handleCreate = async () => {
    const result = await generalApi(product, element, "POST");
    console.log(result);
  };

  return (
    <CREATE_FORM
      apiFn={handleCreate}
      instance_props={product}
      state={element}
      stateFn={setElement}
    />
  );
};
