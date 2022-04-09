interface State {
    items: any[],
    itemsFetching: boolean
}

const initialState: State = {
    items: [],
    itemsFetching: true
}

const sampleReducer = (state = initialState, action: any): State => {
    // switch (action.payload) {
    //     case
    // }

    return initialState
}

export default sampleReducer