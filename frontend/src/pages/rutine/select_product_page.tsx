import { useEffect, useState } from "react";
import { product } from "../../data/instances_schema";
import { listElements } from "../../api/axios";
import { getPk } from "../../functions/general_functions";
import { TableComponent } from "../../components/tables/table_component";
import { GENERAL_BUTTON } from "../../components/buttons/general_button";

export const SELECT_PRODUCT_PAGE = () => {
  const [data, setdata] = useState([]);

  const columns = product.instances.map((e: any) => e.display_name);
  const columnsFields = product.instances.map((e: any) => e.field_name);

  const getInfo = async () => {
    const result = await listElements("product");
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const createRutine = (element: any) => {
    const pk = getPk(element);
    return <GENERAL_BUTTON path={`/create/rutine/${pk}`} title="Crear rutina" />
  };

  const buttons = [createRutine];

  return (
    <TableComponent
      buttons={buttons}
      columns={columns}
      columnsFields={columnsFields}
      data={data}
    />
  );
};
