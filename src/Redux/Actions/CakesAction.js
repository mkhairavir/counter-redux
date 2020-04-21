export const INCREMENTCakes = "INCREMENTCakes";
export const DECREMENTCakes = "DECREMENTCakes";

 export const addCakes = () => {
    return{
        type:INCREMENTCakes
    }
}

export const minusCakes = () => {
    return{
        type:DECREMENTCakes
    }
}