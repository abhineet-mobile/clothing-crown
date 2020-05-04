import React from 'react'; 
import {connect} from 'react-redux';
import {ReactComponent as Logo }  from '../../assets/crown.svg';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils'; 
import CartIcon from '../card-icon/card-icon.component'; 
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentuser} from '../../redux/user/user.selectors';

import './header.styles.scss'; 


const Header =({currentUser, hidden})=>(
    <div className='header'>
        <Link  className='logo-container' to='/'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            SHOP        
        </Link>
        <Link className ='option' to='/contact'>
            CONTACT
        </Link>
        {currentUser ?(
            <div className='option' onClick= {()=> auth.signOut()}>Sign Out</div>
            ):(
            <Link className='option' to ='/signin'>Sign In</Link>
            )}
            <CartIcon/>
        </div>
        {
            hidden ?null: 
        <CartDropdown/>}
    </div>
    )

    const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentuser, 
        hidden: selectCartHidden
    });
export default connect(mapStateToProps) (Header); 