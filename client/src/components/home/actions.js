
export function testAction(payload = { email: "abc@abc.coms", password:"abcde"}){
    return {
        type:'testAction',
        payload
    };
}

export function updateToken({token}){
    console.log('token',token);
    console.log(token);
    return {
        type:'updateToken',
        token,
    }
}