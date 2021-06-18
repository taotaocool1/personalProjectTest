import { combineReducers, createStore as createReduxStore } from 'redux';
export const theCount = 0;

export const count = (state = theCount, action) => {
    console.log(action);
    switch (action.type) {
    case 'INCREMENT':
        return state + 1
    case 'DECREMENT':
        return state - 1
    default:
        return state
    }
}
// 将 initialState的count 绑定到reducer，看仔细！！
export const reducers = combineReducers({
    count
  });
// reducers = { count: 0 };因为count的（state = 0）
  
  export const createStore = () => createReduxStore(
    reducers
  );
