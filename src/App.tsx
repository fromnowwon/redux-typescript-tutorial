import './App.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  // 호출 가능한 액션 생성자
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank)

  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => {depositMoney(1000)}}>Deposit</button>
      <button onClick={() => {withdrawMoney(500)}}>Withdraw</button>
      <button onClick={() => {bankruptMoney()}}>Bankrupt</button>
    </div>
  );
}

export default App;
