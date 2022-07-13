import CartItem from "../CartItem/CartItem";

const CartItemList = ({productsAdded}) => {
    return(
        <div>
            {productsAdded.map(prod => <CartItem key={prod.id} {...prod}/>)}
        </div>
    )
}
export default CartItemList