import { listElements } from "../../api/axios";
import { rutine } from "../../data/instances_schema";
import { useState, useEffect } from "react";
import { getPk } from "../../functions/general_functions";
import { GENERAL_BUTTON } from "../../components/buttons/general_button";
import { TableComponent } from "../../components/tables/table_component";

export const LIST_RUTINE_PAGE = () => {
  const [data, setdata] = useState([]);

  const columns = rutine.instances.map((e: any) => e.display_name).slice(0, 2);

  const columnsFields = rutine.instances
    .map((e: any) => e.field_name)
    .slice(0, 2);

  const getInfo = async () => {
    const result = await listElements("rutine");
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const deleteRutine = (element:any) => {
    const pk = getPk(element)
    return <GENERAL_BUTTON path={`/delete/rutine/${pk}`} title="Eliminar rutina" />
  }

  const buttons:any[] = [deleteRutine]

  return <TableComponent buttons={buttons} columns={columns} columnsFields={columnsFields} data={data} />;
};
