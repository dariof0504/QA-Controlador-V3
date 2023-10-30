import { useState, useEffect } from "react";
import { get_initial_value } from "../../functions/general_functions";
import { generalApi, listElements } from "../../api/axios";
import { CREATE_FORM } from "../../components/forms/create_form";
import { report } from "../../data/instances_schema";
import { ChangeEvent } from "react";

export const CREATE_REPORT_PAGE = () => {
  const initial_value = get_initial_value(report.instances);
  const [element, setElement] = useState(initial_value);
  const [modulos, setModulos] = useState([]);

  const handleCreate = async () => {
    const result = await generalApi(report, element, "POST");
    console.log(result);
  };

  const allModuleInfo = async () => {
    const result = await listElements("module");
    result && setModulos(result.data);
    result.data.length > 0 &&
      setElement({
        ...element,
        fk_module_pk_report: result.data[0].pk_id_module,
      });
  };

  const handleModulo = (e: ChangeEvent<HTMLSelectElement>) => {
    const result = { ...element, fk_module_pk_report: e.target.value };
    setElement(result);
    console.log(element);
  };

  useEffect(() => {
    allModuleInfo();
  }, []);

  return (
    <div>
      
      <div className="formElement" >
      <p>Seleccionar un modulo</p>
      <select onChange={(e) => handleModulo(e)}>
        {modulos.map((modulo: any) => (
          <option value={modulo.pk_id_module}>{modulo.module_title}</option>
        ))}
      </select>
      </div>

      <CREATE_FORM
        apiFn={handleCreate}
        instance_props={report}
        state={element}
        stateFn={setElement}
      />
    </div>
  );
};
