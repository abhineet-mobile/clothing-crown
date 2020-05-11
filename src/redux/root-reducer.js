import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from '../redux/cart/cart.reducer'; 
import directoryReducer from './directory/directory.reducer'; 
import shopReducer from './shop/shop.reducer'; 

const presistConfig = {
    key : 'root',
    storage:storage,
    whitelist : ['cart']
}
const rootReducer = combineReducers ({
    user : userReducer, 
    cart : cartReducer,
    directory: directoryReducer, 
    shop: shopReducer


});

export default persistReducer(presistConfig, rootReducer);