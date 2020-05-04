import React from 'react'; 
import {ReactComponent  as ShoppingIcon} from '../../assets/shopping-cart-icon.svg'; 
import {connect} from 'react-redux'; 
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';


const CartIcon =({toggleCartHidden , itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>

    </div>
)


const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden :( )=>dispatch((toggleCartHidden()))
});
const mapStateToprops = state =>({
    itemCount: selectCartItemsCount(state)
}
); 
export default connect( mapStateToprops, mapDispatchToProps )(CartIcon);
