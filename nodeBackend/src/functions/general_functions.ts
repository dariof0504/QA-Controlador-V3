import { v4 as uuid } from "uuid";
import { ARRAY_COMP, COMPONENT_tYPE } from "../types/elements_types";
import { COMMAND_ELEMENT } from "../types/side_type";

const generarNumeroAleatorio = (longitud: number) => {
  let numero = "";

  for (let i = 0; i < longitud; i++) {
    const digito = Math.floor(Math.random() * 10); // Generar un dígito aleatorio entre 0 y 9
    numero += digito;
  }

  return numero;
};

export const filter_component = (comp: ARRAY_COMP) => {
  const { component, unique, value } = comp;
  const {
    component_action,
    component_type_props,
    component_type_location,
    component_location,
    component_click_props,
  } = component;

  const action: string = component_action.toLowerCase();

  const base_element = {
    command: action,
    location: component_location,
    typeLocation: component_type_location,
  } as COMMAND_ELEMENT;

  if (component_action === "TYPE" && unique) {
    const { data_type, define_length, length_number } = component_type_props;

    if (define_length) {
      const { length } = length_number;

      const result =
        data_type === "TEXT"
          ? (uuid() + uuid()).slice(0, length)
          : generarNumeroAleatorio(length);

      return {
        ...base_element,
        value: result,
      } as COMMAND_ELEMENT;
    } else {
      const BASE_LENGTH = 50;

      const result =
        data_type === "TEXT"
          ? (uuid() + uuid()).slice(0, BASE_LENGTH)
          : generarNumeroAleatorio(BASE_LENGTH);

      return {
        ...base_element,
        value: result,
      } as COMMAND_ELEMENT;
    }
  } else
    return {
      ...base_element,
      value,
    };
};