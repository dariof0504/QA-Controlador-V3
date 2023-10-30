const define_instance = (instance: any, template: any) => {
  const { type, field_name } = instance

  switch (type) {
    case "TYPING":
      template[field_name] = ''
      break;
  
    case "ARRAY":
      template[field_name] = []
      break

    case "BOOL":
      template[field_name] = false
      break

    case "SELECTION":
      template[field_name] = instance.options[0]
      break
}
}
const object_define = (template: any,  instance: any) => {

  const { instances, field_name } = instance
  const new_template:any = {}

  instances.map((instance : any) => {
    define_instance(instance, new_template)
  })

  template[field_name] = new_template

}

export const get_initial_value = (instances: any[]) => {
  const template: any = {}

  instances.map((instance) => {
    const { type } = instance

    if (type === 'CONDITIONAL' || type === 'JSON') {
      object_define(template, instance)
    } else {
      define_instance(instance, template)
    }

  })

  return template
}

export const getPk = (element:any) => {
  const pkInstance:any = Object.keys(element)
  .map((e) => (e.includes("pk_id_") ? e : false))
  .filter((e) => e)[0];

  const result = element[pkInstance]

  return result
}