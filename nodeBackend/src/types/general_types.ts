type Coordinates = {
    axis_x: number,
    axis_y: number
}

type Length_props = {
    default_length: boolean,
    length: number
}

type Movement_props = {
    initial_coordinates: Coordinates,
    final_coordinates: Coordinates
}

type Click_props = {
    validator: boolean,
}

type Type_props = {
    unique: boolean,
    length_props: Length_props,
    value: string,
    validator_messages: any[]
}

type Command = {
    command_index: number,
    command_title: string,
    command_type: string,
    command_location: string,
    command_type_location: string,
    command_props: (Click_props | Type_props | Movement_props)
}

export type Rutina = {
    pk_id_rutine: string,
    rutine_title: string,
    rutine_service: string,
    rutine_number_commands: number,
    rutine_commands: Command[]
}

// export type Session = {
//     pk_id_session: string,
//     session_title: string,
//     session_target_url: string,
//     session_rutines: Rutina[]
// }