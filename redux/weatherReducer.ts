

interface initialState {

}


let initialState: initialState = {

}


export const Reducer = (state = initialState, action: any) =>{
  switch (action.type) {
    
    default:
      return {
        ...state
      }
  }
}

