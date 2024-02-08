import { combineReducers } from 'redux';
import bankReducer from './bankReducer';

const reducers = combineReducers({
  bank: bankReducer
})

export default reducers

// reducers 타입 내보내기
export type State = ReturnType<typeof reducers>