import { useState, useEffect } from "react";
import { report } from "../../data/instances_schema";
import { TableComponent } from "../../components/tables/table_component";
import { listElements } from "../../api/axios";

export const LIST_REPORT_PAGE = () => {
  const [data, setdata] = useState([]);

  const columns = report.instances.map((e: any) => e.display_name);
  const columnsFields = report.instances.map((e: any) => e.field_name);

  const getInfo = async () => {
    const result = await listElements("report");
    setdata(result.data);
  };  

  useEffect(() => {
    getInfo()
  }, [])

  const buttons: any[] = []

  return <TableComponent buttons={buttons} columns={columns} columnsFields={columnsFields} data={data} />;
};
