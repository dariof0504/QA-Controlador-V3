import { Request, Response } from "express";
import { session_element } from "../models/module_model";
import { filter_component } from "../functions/general_functions";
import { SESSION_TYPE } from "../types/elements_types";
import { COMMAND_ELEMENT } from "../types/side_type";
import axios from "axios";

export const execute_session = async (req: Request, res: Response) => {
  const { params } = req;

  const { pk } = params;
  const session: any = await session_element.findByPk(pk);

  const result: SESSION_TYPE = session;

  const { session_rutines, session_service, session_url } = result;

  const comandos: COMMAND_ELEMENT[] = [];

  for (let i = 0; i < session_rutines.length; i++) {
    const rutine = session_rutines[i];

    const { rutine_type, rutine_components } = rutine;

    if (rutine_type === "ESTRES") {
      const { rutine_estres_props } = rutine;
      const iterations = rutine_estres_props.number;

      for (let j = 0; i < iterations; i++) {
        rutine_components.map((comp) => comandos.push(filter_component(comp)));
      }
    } else {
      rutine_components.map((comp) => comandos.push(filter_component(comp)));
    }
  }

  const data = {
    targetURL: session_url,
    servicio: session_service,
    comandos,
  };

  try {
    switch (session_service) {
      case "APPIUM":
        res.json(data)
        break

      case "SELENIUM":
        const seleniumResult = await axios.post(
          "http://localhost:7000/executeSelenium/",
          data
        );
        res.json(seleniumResult.data);
        break;
    }
  } catch (error) {
    res.json(error);
  }
};

export const download_session = async (req:Request , res: Response) => {
  const { params } = req;

  const { pk } = params;
  const session: any = await session_element.findByPk(pk);

  const result: SESSION_TYPE = session;

  const { session_rutines, session_service, session_url } = result;

  const comandos: COMMAND_ELEMENT[] = [];

  for (let i = 0; i < session_rutines.length; i++) {
    const rutine = session_rutines[i];

    const { rutine_type, rutine_components } = rutine;

    if (rutine_type === "ESTRES") {
      const { rutine_estres_props } = rutine;
      const iterations = rutine_estres_props.number;

      for (let j = 0; i < iterations; i++) {
        rutine_components.map((comp) => comandos.push(filter_component(comp)));
      }
    } else {
      rutine_components.map((comp) => comandos.push(filter_component(comp)));
    }
  }

  const data = {
    targetURL: session_url,
    servicio: session_service,
    comandos,
  };
  
  res.json(data)
}