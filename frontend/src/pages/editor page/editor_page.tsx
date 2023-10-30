import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generalApi, getElement } from "../../api/axios";
import { question } from "../../types/questions";
import { INSTANCE_ROUTER_VIEW } from "../../components/individualView/instance_router_view";

export const EDITOR_PAGE = () => {
  const [element, setElement] = useState({});
  const [info, setInfo] = useState({} as question);
  const navigate = useNavigate()

  const { info_name, pk } = useParams();

  const getInfo = async () => {
    const result: any = await import("../../data/instances_schema");

    const { [info_name as string]: value } = result;
    setInfo(value);

    const { field_name } = value as question;

    const elementResult = await getElement(field_name, pk);
    setElement(elementResult.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleSave = async () => {
    const result = await generalApi(info, element, "PUT");
    console.log(result.data);
    navigate(-1)
  };

  if (info!.instances) {
    const { display_name, instances } = info as question;

    return (
      <div>
        <p>{display_name}</p>
        {instances.map((instance) => (
          <INSTANCE_ROUTER_VIEW
            instance_props={instance}
            state={element}
            stateFn={setElement}
          />
        ))}
        <button onClick={() => handleSave()}>Guardar</button>
      </div>
    );
  } else return <>No cargo</>;
};
