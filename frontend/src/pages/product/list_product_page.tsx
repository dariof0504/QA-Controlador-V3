import { useEffect, useState } from "react";
import { product } from "../../data/instances_schema";
import { listElements } from "../../api/axios";
import { TableComponent } from "../../components/tables/table_component";
import { getPk } from "../../functions/general_functions";
import { Link } from "react-router-dom";
import { GENERAL_BUTTON } from "../../components/buttons/general_button";

export const LIST_PRODUCT_PAGE = () => {
  const [data, setdata] = useState([]);

  const columns = product.instances.map((e: any) => e.display_name).slice(0, 2);
  const columnsFields = product.instances
    .map((e: any) => e.field_name)
    .slice(0, 2);

  const getInfo = async () => {
    const result = await listElements("product");
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const createModule = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON path={`/create/module/${pk}`} title="Crear modulo" />
    );
  };

  const listModule = (element: any) => {
    const pk = getPk(element);
    return <GENERAL_BUTTON path={`/list/module/${pk}`} title="Ver modulos" />;
  };

  const editProduct = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON path={`/edit/product/${pk}`} title="Editar Producto" />
    );
  };

  const buttons = [createModule, listModule, editProduct];

  return (
    <TableComponent
      buttons={buttons}
      columns={columns}
      columnsFields={columnsFields}
      data={data}
    />
  );
};
