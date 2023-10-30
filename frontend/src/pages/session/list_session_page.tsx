import { session } from '../../data/instances_schema'
import { listElements } from '../../api/axios';
import { useState, useEffect } from "react";
import { TableComponent } from '../../components/tables/table_component';
import { getPk } from '../../functions/general_functions';
import { GENERAL_BUTTON } from '../../components/buttons/general_button';


export const LIST_SESSION_PAGE = () => {

  const [data, setdata] = useState([])

  const columns = session.instances.map((e: any) => e.display_name);
  const columnsFields = session.instances.map((e: any) => e.field_name);

  const getInfo = async ( ) => {
    const result = await listElements("session")
    setdata(result.data)
  }

  useEffect(() => {
    getInfo()
  }, [])

  const executeSession = (element:any) => {
    const pk = getPk(element)
    return <GENERAL_BUTTON path={`/execute/session/${pk}`} title='Ejecutar sesion' />
  }

  const buttons:any[] = [executeSession]

  return (
    <TableComponent columns={columns} columnsFields={columnsFields} data={data} buttons={buttons} />
  )
}
