import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';
import dashOwnerReducer from './dashOwner';
import DetailsPropertiesReducer from './DetailsProperties';
import authReducer from './auth';
import dashRetailerReducer from './dashRetailer';


export default configureStore({
  reducer: {
    home: homeReducer,
    dashOwner:dashOwnerReducer,
    detailsProperty:DetailsPropertiesReducer,
    auth:authReducer,
    dashRetailer:dashRetailerReducer
  },
});
