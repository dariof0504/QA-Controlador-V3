import { useState, useEffect, ChangeEvent } from "react";
import { generalApi, listElements } from "../../api/axios";
import { GENERAL_FORM } from "../../components/forms/general_form";
import { session } from "../../data/instances_schema";
import { get_initial_value } from "../../functions/general_functions";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

export const CREATE_SESSION_PAGE = () => {
  const initial_value_session = get_initial_value(session.instances);
  const navigate = useNavigate();

  const [rutines, setRutines] = useState([]);
  const [selected_rutine, setSelected_rutine] = useState({} as any);
  const [session_element, setSession_element] = useState({
    ...initial_value_session,
    session_rutines: [],
  });

  const items = session_element.session_rutines;

  const getRutines = async () => {
    const result = await listElements("rutine");
    const data = result.data;

    setRutines(data);
    setSelected_rutine(data[0]);
  };

  useEffect(() => {
    getRutines();
  }, []);

  const handleRutines = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = JSON.parse(e.target.value);
    setSelected_rutine(value);
  };

  const handleAddRutines = () => {
    const result = {
      ...session_element,
      session_rutines: [...items, { ...selected_rutine, id: uuid() }],
    };
    setSession_element(result);
  };

  const handleDeleteRutine = (id: string) => {
    const value = session_element.session_rutines.filter(
      (s: any) => s.id !== id
    );
    const result = { ...session_element, session_rutines: value };
    setSession_element(result);
  };

  const handleSave = async () => {
    const result = await generalApi(session, session_element, "POST");
    console.log(result.data);
    navigate("/list/session");
  };

  return (
    <div>
      <GENERAL_FORM
        state={session_element}
        stateFn={setSession_element}
        instance_props={session}
      />
      <div className="formElement">
        <p>Selecciona la rutina</p>
        <select onChange={(e) => handleRutines(e)}>
          {rutines.length > 0 &&
            rutines.map((rut: any) => (
              <option value={JSON.stringify(rut)}>{rut.rutine_title}</option>
            ))}
        </select>
        <button onClick={() => handleAddRutines()}>Añadir rutina</button>
        <div>
          {items.length > 0 &&
            items.map((i: any) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1em",
                  padding: "1em",
                  alignItems: "center",
                }}
              >
                <p>{i.rutine_title}</p>
                <p>{i.rutine_type}</p>
                <button onClick={() => handleDeleteRutine(i.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          <br></br>
          <button onClick={() => handleSave()}>Guardar sesion</button>
        </div>
      </div>
    </div>
  );
};
