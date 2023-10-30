import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CREATE_COMPONENT_PAGE } from "./pages/component/create_component_page";
import { CREATE_MODULE_PAGE } from "./pages/module/create_module_page";
import { HOME_PAGE } from "./pages/home/home_page";
import { CREATE_REPORT_PAGE } from "./pages/report/create_report_page";
import "./styles/general_styles.css";
import { LIST_MODULE_PAGE } from "./pages/module/list_module_page";
import { LIST_REPORT_PAGE } from "./pages/report/list_report_page";
import { CREATE_RUTINE_PAGE } from "./pages/rutine/create_rutine_page";
import { CREATE_SESSION_PAGE } from "./pages/session/create_session_page";
import { LIST_SESSION_PAGE } from "./pages/session/list_session_page";
import { EXECUTE_PAGE } from "./pages/execute scripts/execute_page";
import { GO_BACK_BUTTON } from "./components/general/goback_button";
import { CREATE_PRODUCT_PAGE } from "./pages/product/create_product_page";
import { LIST_PRODUCT_PAGE } from "./pages/product/list_product_page";
import { LIST_COMPONENT_PAGE } from "./pages/component/list_component_page";
import { SELECT_PRODUCT_PAGE } from "./pages/rutine/select_product_page";
import { EDITOR_PAGE } from "./pages/editor page/editor_page";

import './style.css'

function App() {
  return (
    <BrowserRouter>
      <GO_BACK_BUTTON />

      <Routes>
        <Route path="/" element={<HOME_PAGE />} />

        <Route path="/create/product" element={<CREATE_PRODUCT_PAGE />} />
        <Route path="/list/product" element={<LIST_PRODUCT_PAGE />} />

        <Route path="/create/module/:fk" element={<CREATE_MODULE_PAGE />} />
        <Route path="/list/module/:fk" element={<LIST_MODULE_PAGE />} />

        <Route
          path="/create/component/:fk"
          element={<CREATE_COMPONENT_PAGE />}
        />
        <Route path="/list/component/:fk" element={<LIST_COMPONENT_PAGE />} />

        <Route path="/list/report" element={<LIST_REPORT_PAGE />} />
        <Route path="/create/report" element={<CREATE_REPORT_PAGE />} />

        <Route path="/create/session" element={<CREATE_SESSION_PAGE />} />
        <Route path="/list/session" element={<LIST_SESSION_PAGE />} />

        <Route path="/select/product" element={<SELECT_PRODUCT_PAGE />} />
        <Route path="/create/rutine/:fk" element={<CREATE_RUTINE_PAGE />} />

        <Route path="/execute/session/:pk_session" element={<EXECUTE_PAGE />} />

        <Route path="/edit/:info_name/:pk" element={<EDITOR_PAGE />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
