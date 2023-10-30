import sqlDB from "../database/database";
import { DataTypes } from "sequelize";

const ENUM_STATUS: string[] = [
  "OPEN",
  "IN PROGRESS",
  "REVIEW",
  "CLOSE",
  "TO FIX",
  "TESTING",
];

const ENUM_RELEVANCE: string[] = ["LOW", "MEDIUM", "HIGH", "URGENT"];

export const rutine_element = sqlDB.define("tb_rutine", {
  pk_id_rutine: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  rutine_title: {
    type: DataTypes.STRING,
  },
  rutine_type: {
    type: DataTypes.STRING,
  },
  rutine_estres_props: {
    type: DataTypes.JSON,
  },
  rutine_components: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
});

export const session_element = sqlDB.define("tb_session", {
  pk_id_session: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  session_title: {
    type: DataTypes.STRING,
  },
  session_service: {
    type: DataTypes.STRING,
  },
  session_rutines: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
  session_url: {
    type: DataTypes.STRING,
  },
});

export const product_element = sqlDB.define("tb_product", {
  pk_id_product: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  product_title: {
    type: DataTypes.STRING,
  },
});

export const module_element = sqlDB.define("tb_module", {
  pk_id_module: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  module_title: {
    type: DataTypes.STRING,
  },
  module_description: {
    type: DataTypes.STRING,
  },
});

export const component_element = sqlDB.define("tb_component", {
  pk_id_component: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  component_description: {
    type: DataTypes.STRING
  },
  component_title: {
    type: DataTypes.STRING,
  },
  component_type_location: {
    type: DataTypes.STRING,
  },
  component_location: {
    type: DataTypes.STRING,
  },
  component_action: {
    type: DataTypes.STRING,
  },
  component_click_props: {
    type: DataTypes.JSON,
  },
  component_type_props: {
    type: DataTypes.JSON,
  },
});

export const report_element = sqlDB.define("tb_report", {
  pk_id_report: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  report_title: {
    type: DataTypes.STRING,
  },
  report_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  report_status: {
    type: DataTypes.ENUM,
    values: ENUM_STATUS,
  },
});

export const incident_element = sqlDB.define("tb_incident", {
  pk_id_incident: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4(),
    primaryKey: true,
  },
  incident_title: {
    type: DataTypes.STRING,
  },
  incident_obs: {
    type: DataTypes.STRING,
  },
  incident_product_version: {
    type: DataTypes.STRING,
  },
  incident_device: {
    type: DataTypes.STRING,
  },
  incident_relevance: {
    type: DataTypes.ENUM,
    values: ENUM_RELEVANCE,
  },
  incident_status: {
    type: DataTypes.ENUM,
    values: ENUM_STATUS,
  },
  incident_date: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
  incident_own_developer: {
    type: DataTypes.STRING,
  },
  incident_enviroment: {
    type: DataTypes.STRING,
  },
  incident_summary: {
    type: DataTypes.STRING,
  },
  incident_comments: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
  incident_steps: {
    type: DataTypes.ARRAY(DataTypes.JSON),
  },
});

product_element.hasMany(module_element, {
  foreignKey: {
    name: "fk_product_pk_module",
  },
  sourceKey: "pk_id_product",
});

product_element.belongsTo(product_element, {
  foreignKey: {
    name: "fk_product_pk_module",
  },
  targetKey: "pk_id_product",
});

module_element.hasMany(component_element, {
  foreignKey: {
    name: "fk_module_pk_component",
  },
  sourceKey: "pk_id_module",
});

component_element.belongsTo(module_element, {
  foreignKey: {
    name: "fk_module_pk_component",
  },
  targetKey: "pk_id_module",
});

module_element.hasMany(report_element, {
  foreignKey: {
    name: "fk_module_pk_report",
  },
  sourceKey: "pk_id_module",
});

report_element.belongsTo(module_element, {
  foreignKey: {
    name: "fk_module_pk_report",
  },
  targetKey: "pk_id_module",
});
