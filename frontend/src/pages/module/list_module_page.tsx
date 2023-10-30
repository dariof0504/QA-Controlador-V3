import { useState, useEffect } from "react";
import { module_info } from "../../data/instances_schema";
import { elementsByFK } from "../../api/axios";
import { getPk } from "../../functions/general_functions";
import { Link, useParams } from "react-router-dom";
import { TableComponent } from "../../components/tables/table_component";
import { GENERAL_BUTTON } from "../../components/buttons/general_button";

export const LIST_MODULE_PAGE = () => {
  const { fk } = useParams();
  const [data, setdata] = useState([]);

  const columns = module_info.instances
    .map((e: any) => e.display_name)
    .slice(0, 2);
  const columnsFields = module_info.instances
    .map((e: any) => e.field_name)
    .slice(0, 2);

  const getInfo = async () => {
    const result = await elementsByFK("module", "product", fk as any);
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const createComponent = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON
        path={`/create/component/${pk}`}
        title="Crear componente"
      />
    );
  };

  const listComponent = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON path={`/list/component/${pk}`} title="Ver componentes" />
    );
  };

  const editModule = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON path={`/edit/module_info/${pk}`} title="Editar modulo" />
    );
  };

  const buttons = [createComponent, listComponent, editModule];

  return (
    <TableComponent
      buttons={buttons}
      columns={columns}
      columnsFields={columnsFields}
      data={data}
    />
  );
};
