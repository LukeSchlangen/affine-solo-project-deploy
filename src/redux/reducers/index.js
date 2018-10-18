import { combineReducers } from 'redux';
import user from './userReducer';
import errors from './errorsReducer';

//Lets make a bigger object for our store, with the objects from our reducers.
//This is why we get this.props.reduxStore.user.isLoading
const store = combineReducers({
  user,
  errors,
});

export default store;
