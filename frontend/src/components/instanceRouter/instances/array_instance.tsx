import { array_instance } from "../../../types/questions";
import { useState } from "react";
import { Instance_router } from "../instance_router";
import { v4 as uuid } from "uuid";

const item_box = (item: any, handleDelete: Function) => {
  const keys = Object.keys(item);

  return (
    <div>
      {keys.map((k) => (
        <p>{item[k]}</p>
      ))}
      <button onClick={() => handleDelete(item.id)}>Eliminar</button>
    </div>
  );
};

export const Array_instance = (props: {
  instance_props: array_instance;
  state: any;
  stateFn: Function;
}) => {
  const { display_name, field_name, instances } = props.instance_props;
  const { state, stateFn } = props;

  const listItems = state[field_name]

  const [element, setElement] = useState({});

  const handleAddElement = () => {
    const finalElement = { ...element, id: uuid() };
    const result = { ...state, [field_name]: [...listItems, finalElement] };
    stateFn(result);
  };

  const handleDelete = (id: string) => {
    const result = state[field_name].filter((e: any) => e.id === id);
  };

  return (
    <div>
      <p>{display_name}</p>
      <div>
        {instances.map((instance) => (
          <Instance_router
            instance_props={instance}
            state={element}
            stateFn={setElement}
          />
        ))}
        <button onClick={() => handleAddElement()}>Añadir elemento</button>
      </div>
      <div>
        {listItems.length() > 0 &&
          listItems.map((item: any) => item_box(item, handleDelete))}
      </div>
    </div>
  );
};
