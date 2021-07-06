export const initialState = {
    basket: [],
    user: null,
};
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "ADD_TO_BASKET":
        //LOGIC FOR ADDING TO THE BASKET
        return { 
            ...state,
            basket: [...state.basket, action.item],
        };
        case 'EMPTY__BASKET':
            return{
                ...state,
                basket: [],
            };

        case "REMOVE_FROM_BASKET":
        //LOGIC FOR REMOVING FROM THE BASKET
        
        // we cloned the basket
        let newBasket = [...state.basket];
        //we checked to see if the product exists
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
        );

        if(index >= 0) {
            //item exists in the basket, remove it..
            newBasket.splice(index, 1);
        }
        return { 
            ...state,
            basket: newBasket,
         };
        default:
            return state;
    }
};

export default reducer;