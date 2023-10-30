import { GENERAL_BUTTON } from "../../components/buttons/general_button";
import "./style.css";

export const HOME_PAGE = () => {
  return (
    <div className="home">
      <h1>Controlador QA V3</h1>
      <div className="listButtons">
        <div>
          <p>Productos</p>
          <GENERAL_BUTTON path="/list/product" title="Ver productos" />
          <GENERAL_BUTTON path="/create/product" title="Crear producto" />
        </div>
        <div>
          <p>Reportes</p>
          <GENERAL_BUTTON path="/list/report" title="Ver reportes" />
          <GENERAL_BUTTON path="/create/report" title="Crear reportes" />
        </div>
        <div>
          <p>Sesiones</p>
          <GENERAL_BUTTON path="/list/session" title="Ver sesiones" />
          <GENERAL_BUTTON path="/create/session" title="Crear sesiones" />
        </div>
        <div>
          <p>Rutinas</p>
          <GENERAL_BUTTON path="/select/product" title="Crear rutina" />
        </div>
      </div>
    </div>
  );
};
