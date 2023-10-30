export type COMPONENT_tYPE = {
  pk_id_component: string;
  component_title: string;
  component_type_location: string;
  component_location: string;
  component_action: "TYPE" | "CLICK";
  component_click_props: {
    validator: boolean;
  };
  component_type_props: {
    data_type: "TEXT" | "NUMBER";
    define_length: boolean;
    length_number: {
      length: number;
    };
  };
};

export type ARRAY_COMP = {
  module: any;
  component: COMPONENT_tYPE;
  value: string;
  unique: boolean;
  id: string;
};

export type RUTINE_TYPE = {
  pk_id_rutine: string;
  rutine_title: string;
  rutine_type: "ESTRES" | "NORMAL";
  rutine_estres_props: { number: number };
  rutine_components: ARRAY_COMP[];
};

export type SESSION_TYPE = {
  pk_id_session: string;
  session_title: string;
  session_service: "APPIUM" | "SELENIUM";
  session_rutines: RUTINE_TYPE[];
  session_url: string;
};
