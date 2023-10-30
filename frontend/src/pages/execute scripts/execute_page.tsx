import { useParams } from "react-router-dom";
import { downloadSession, executeSession, getElement } from "../../api/axios";
import { useState, useEffect } from "react";

export const EXECUTE_PAGE = () => {
  const { pk_session } = useParams();
  const [session, setSession] = useState({} as any);
  const [dataJson, setDataJson] = useState({});
  const [charge, setCharge] = useState(false);

  const getInfo = async () => {
    const result = await getElement("session", pk_session);
    setSession(result.data);
  };

  const handleExecute = async () => {
    const result = await executeSession(pk_session);
    setDataJson(result.data);
    window.open('http://localhost:4444/','_blank')
  };

  const handleExecuteDownload = async () => {
    const result = await downloadSession(pk_session);
    result && setDataJson(result.data);
    result && setCharge(true);
  };

  useEffect(() => {
    getInfo();
  }, []);

  useEffect(() => {
    if (charge) {
      downloadJSON();
    }
  }, [charge]);

  const downloadJSON = () => {
    const jsonString = JSON.stringify(dataJson);

    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "datos.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="formElement" style={{alignItems: 'center', textAlign: 'center'}} >
      <p>Ejecutar sesion</p>
      {session && (
        <div>
          <p>{session.session_title}</p>
          <p>{session.session_service}</p>
          <button onClick={() => handleExecuteDownload()}>
            Descargar indicaciones
          </button>
          {session.session_service === "SELENIUM" && (
            <button onClick={() => handleExecute()}>
              Ejecutar indiciaciones
            </button>
          )}
        </div>
      )}
    </div>
  );
};
