
export function loginAction(payload = { email: "abc@abc.coms", password:"abcde"}){
    return {
        type:'loginAction',
        payload
    };
}

export function updateToken(data){
    return {
        type:'updateToken',
        data,
    }
}