export const INCREMENTIceCream = "INCREMENTIceCream";
export const DECREMENTIceCream = "DECREMENTIceCream";

 export const addIceCream = () => {
    return{
        type:INCREMENTIceCream
    }
}

export const minusIceCream = () => {
    return{
        type:DECREMENTIceCream
    }
}

