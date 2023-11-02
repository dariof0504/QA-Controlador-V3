import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { component } from "../../data/instances_schema";
import { elementsByFK } from "../../api/axios";
import { TableComponent } from "../../components/tables/table_component";
import { getPk } from "../../functions/general_functions";
import { GENERAL_BUTTON } from "../../components/buttons/general_button";

export const LIST_COMPONENT_PAGE = () => {
  const { fk } = useParams();
  const [data, setdata] = useState([]);

  const columns = component.instances
    .map((e: any) => e.display_name)
    .slice(0, 2);
  const columnsFields = component.instances
    .map((e: any) => e.field_name)
    .slice(0, 2);

  const getInfo = async () => {
    const result = await elementsByFK("component", "module", fk as any);
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const editComponent = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON
        path={`/edit/component/${pk}`}
        title="Editar componente"
      />
    );
  };

  const deleteComponent = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON
        path={`/delete/component/${pk}`}
        title="Eliminar componente"
      />
    );
  };

  const buttons: any[] = [editComponent, deleteComponent];

  return (
    <TableComponent
      columns={columns}
      columnsFields={columnsFields}
      data={data}
      buttons={buttons}
    />
  );
};
