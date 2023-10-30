import { useState, useEffect, ChangeEvent } from "react";
import { elementsByFK, generalApi, listElements } from "../../api/axios";
import { get_initial_value } from "../../functions/general_functions";
import { rutine } from "../../data/instances_schema";
import { GENERAL_FORM } from "../../components/forms/general_form";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

export const CREATE_RUTINE_PAGE = () => {
  const navigate = useNavigate();
  const { fk } = useParams();

  //Valor inicial para rutinas
  const initial_value_rutine = get_initial_value(rutine.instances);

  //Lista de modulos y componentes
  const [modulos, setModulos] = useState([]);
  const [componentes, setComponentes] = useState([]);

  //Carga para peticiones
  const [charge, setCharge] = useState(false);

  //Selector de componentes y modulos
  const [selected_module, setSelected_module] = useState({} as any);
  const [selected_component, setSelected_component] = useState({} as any);

  //Estado del valor del componente
  const [value, setValue] = useState("");
  const [unique, setUnique] = useState(false);

  //Estado de la ruitna
  const [rutine_element, setRutine_element] = useState({
    ...initial_value_rutine,
    rutine_components: [],
  });

  const comp_items = rutine_element.rutine_components;

  const getInfo = async () => {
    const result = await elementsByFK("module", "product", fk as any);
    const data = result.data;

    setModulos(data);
    setSelected_module(data[0]);
    setCharge(true);
  };

  const getComponents = async () => {
    const pk: any = selected_module.pk_id_module;

    const result = await elementsByFK("component", "module", pk);
    const data = result.data;

    setComponentes(data);
    setSelected_component(data[0]);
  };

  const handleModule = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = JSON.parse(e.target.value);
    setSelected_module(value);
    setCharge(true);
  };

  const handleComponent = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = JSON.parse(e.target.value);
    setSelected_component(value);
  };

  const handleAddComponent = () => {
    const element = {
      module: selected_module,
      component: selected_component,
      value,
      unique,
      id: uuid(),
    };

    const result = {
      ...rutine_element,
      rutine_components: [...rutine_element.rutine_components, element],
    };

    console.log(result);
    setRutine_element(result);
  };

  const handleDelete = (id: string) => {
    const value = rutine_element.rutine_components.filter(
      (s: any) => s.id !== id
    );
    const result = { ...rutine_element, rutine_components: value };
    setRutine_element(result);
  };

  const handleSave = async () => {
    const result = await generalApi(rutine, rutine_element, "POST");
    console.log(result.data);
    navigate("/");
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (charge) {
      getComponents();
      setCharge(false);
    }
  }, [charge]);

  return (
    <div>
      <GENERAL_FORM
        instance_props={rutine}
        state={rutine_element}
        stateFn={setRutine_element}
      />
      <div className="formElement">
        <p>Modulos</p>
        <select onChange={(e) => handleModule(e)}>
          {modulos.length > 0 &&
            modulos.map((modulo: any) => (
              <option value={JSON.stringify(modulo)}>
                {modulo.module_title}
              </option>
            ))}
        </select>
        <p>Componentes</p>
        <select onChange={(e) => handleComponent(e)}>
          {componentes.length > 0 &&
            componentes.map((comp: any) => (
              <option value={JSON.stringify(comp)}>
                {comp.component_title}
              </option>
            ))}
        </select>

        <p>Valor del componente</p>
        <input type="text" onChange={(e) => setValue(e.target.value)}></input>
        <br></br>
        <label className="booleanInstance">
          <p>El componente tiene valor unico</p>
          <input onChange={() => setUnique(!unique)} type="checkbox" />
        </label>

        <button onClick={() => handleAddComponent()}>Añadir componente</button>

        {comp_items.length > 0 &&
          comp_items.map((comp: any) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1em",
                padding: "1em",
                alignItems: "center",
              }}
            >
              <p>{comp.component.component_title}</p>
              <p>{comp.component.component_type_location}</p>
              <p>{comp.component.component_action}</p>
              <p>{comp.value}</p>
              <button onClick={() => handleDelete(comp.id)}>Eliminar</button>
            </div>
          ))}
      </div>
      <button onClick={() => handleSave()}>Enviar</button>
    </div>
  );
};
