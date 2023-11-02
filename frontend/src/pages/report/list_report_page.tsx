import { useState, useEffect } from "react";
import { report } from "../../data/instances_schema";
import { TableComponent } from "../../components/tables/table_component";
import { listElements } from "../../api/axios";
import { GENERAL_BUTTON } from "../../components/buttons/general_button";
import { getPk } from "../../functions/general_functions";

export const LIST_REPORT_PAGE = () => {
  const [data, setdata] = useState([]);

  const columns = report.instances.map((e: any) => e.display_name);
  const columnsFields = report.instances.map((e: any) => e.field_name);

  const getInfo = async () => {
    const result = await listElements("report");
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const editReport = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON path={`/edit/report/${pk}`} title="Editar Reporte" />
    );
  };

  const deleteReport = (element: any) => {
    const pk = getPk(element);
    return (
      <GENERAL_BUTTON path={`/delete/report/${pk}`} title="Eliminar reporte" />
    );
  };

  const buttons: any[] = [editReport, deleteReport];

  return (
    <TableComponent
      buttons={buttons}
      columns={columns}
      columnsFields={columnsFields}
      data={data}
    />
  );
};
