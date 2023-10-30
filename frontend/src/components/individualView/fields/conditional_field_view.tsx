import { conditional_instance, instance } from '../../../types/questions'
import { useState, useEffect } from 'react'
import { INSTANCE_ROUTER_VIEW } from '../instance_router_view';

export const CONDITIONAL_FIELD_VIEW = (props: instance) => {
  const { state, stateFn } = props

  const { condition, field_depends, display_name, field_name, instances } = props.instance_props as conditional_instance

  const handleState = (element: any) => {
    const result = {...state, [field_name] : element}
    stateFn(result)
  }

  if (state[field_depends] === condition) {
    return (
      <div>
        <p>{display_name}</p>
        {instances.map((instance) => (
          <INSTANCE_ROUTER_VIEW
            instance_props={instance}
            state={state[field_name]}
            stateFn={handleState}
          />
        ))}
      </div>
    );
  } else return (<></>)
};

