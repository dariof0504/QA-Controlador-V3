import {
  question,
  type_instance,
  // array_instance,
  conditional_instance,
  instance_type,
  // json_instance,
  selection_instance,
  array_instance,
} from "../types/questions";

export const product: question = {
  display_name: "PRODUCTO",
  field_name: "product",
  instances: [
    {
      display_name: "Titulo de el producto",
      field_name: "product_title",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
  ],
};

export const session: question = {
  display_name: "SESION",
  field_name: "session",
  instances: [
    {
      display_name: "Titulo de la sesion",
      field_name: "session_title",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Target URL",
      field_name: "session_url",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Servicio en el que se ejecuta",
      field_name: "session_service",
      type: "SELECTION",
      options: ["APPIUM", "SELENIUM"],
    } as selection_instance,
  ],
};

export const rutine: question = {
  display_name: "Rutinas",
  field_name: "rutine",
  instances: [
    {
      display_name: "Titulo de la rutina",
      field_name: "rutine_title",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Selecciona el tipo de test",
      field_name: "rutine_type",
      options: ["ESTRES", "NORMAL"],
      type: "SELECTION",
    } as selection_instance,
    {
      display_name: "Propiedades para test de estres",
      field_name: "rutine_estres_props",
      field_depends: "rutine_type",
      condition: "ESTRES",
      type: "CONDITIONAL",
      instances: [
        {
          display_name: "Cuantas iteraciones",
          field_name: "number",
          data_type: "number",
          type: "TYPING",
        } as type_instance,
      ],
    } as conditional_instance,
  ],
};

export const component: question = {
  display_name: "Component",
  field_name: "component",
  instances: [
    {
      display_name: "Titulo del componente",
      field_name: "component_title",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Descripcion",
      field_name: "component_description",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Tipo de localizacion",
      field_name: "component_type_location",
      options: ["XPATH", "ID", "CLASSNAME", "CSS", "UIAUTOMATOR"],
      type: "SELECTION",
    } as selection_instance,
    {
      display_name: "Localizacion",
      field_name: "component_location",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Tipo de interaccion",
      field_name: "component_action",
      options: ["CLICK", "TYPE"],
      type: "SELECTION",
    } as selection_instance,
    {
      display_name: "Click Props",
      field_name: "component_click_props",
      condition: "CLICK",
      field_depends: "component_action",
      type: "CONDITIONAL",
      instances: [
        {
          display_name: "Es validador",
          field_name: "validator",
          type: "BOOL",
        } as instance_type,
      ],
    } as conditional_instance,
    {
      display_name: "Propiedades de tipeo",
      field_name: "component_type_props",
      condition: "TYPE",
      field_depends: "component_action",
      type: "CONDITIONAL",
      instances: [
        {
          display_name: "Tipo de dato",
          field_name: "data_type",
          options: ["TEXT", "NUMBER"],
          type: "SELECTION",
        } as selection_instance,
        {
          display_name: "Tiene longitud definida",
          field_name: "define_length",
          type: "BOOL",
        } as instance_type,
        {
          display_name: "Longitud del apartado",
          field_name: "length_number",
          condition: true,
          field_depends: "define_length",
          type: "CONDITIONAL",
          instances: [
            {
              display_name: "Longitud del apartado",
              field_name: "length",
              data_type: "number",
              type: "TYPING",
            } as type_instance,
          ],
        } as conditional_instance,
      ],
    } as conditional_instance,
  ],
};

export const module_info: question = {
  display_name: "Modulo",
  field_name: "module",
  instances: [
    {
      display_name: "Titulo del modulo",
      field_name: "module_title",
      type: "TYPING",
      data_type: "text",
    } as type_instance,
    {
      display_name: "Descripcion del modulo",
      field_name: "module_description",
      type: "TYPING",
      data_type: "text",
    } as type_instance,
  ],
};

export const report: question = {
  display_name: "Reporte",
  field_name: "report",
  instances: [
    {
      display_name: "Titulo del reporte",
      field_name: "report_title",
      data_type: "text",
      type: "TYPING",
    } as type_instance,
    {
      display_name: "Estado del reporte",
      field_name: "report_status",
      options: ["OPEN", "IN PROGRESS", "REVIEW", "CLOSE", "TO FIX", "TESTING"],
      type: "SELECTION",
    } as selection_instance,
  ],
};
