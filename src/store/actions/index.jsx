export const createUser=(data)=>{
    return{
        type: "SIGN_UP",
        payload: data
    }
}

export const logUser = () =>{
    return{
        type: "LOGIN",
    }
}