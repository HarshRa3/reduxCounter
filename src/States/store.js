import incdecReducer from './Reducers/index';  
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
    reducer:{
        number:incdecReducer,
    }
},window._REDUX_DEVTOOL_EXTENTION_ && window._REDUX_DEVTOOL_EXTENTION_())