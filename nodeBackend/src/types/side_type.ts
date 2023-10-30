type sideTargets = [string, string]

export type sideCommand = {
    id: string,
    comment: string,
    command: ('type' | 'click'),
    target: string,
    targets: sideTargets[],
    value: string
}

export type COMMAND_ELEMENT = {
    command: ('type' | 'click'),
    location: string,
    typeLocation: string,
    value: string
}

export type sideJSONTest = {
    id: string,
    name: string,
    commands: sideCommand[]
}

export type sideJSON = {
    id: string,
    version: string,
    name: string,
    url: string,
    tests: sideJSONTest[]
}