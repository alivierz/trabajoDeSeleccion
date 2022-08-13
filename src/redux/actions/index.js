export const actions = {
    getAllPoke: "@getAll/poke",
    setOffset: "@offset/setAll"
}

export const setOffset = (data) =>({
    type: actions.setOffset,
    payload: data
})
export const setType = (data) =>({
    type: actions.getAllPoke,
    payload: data
})