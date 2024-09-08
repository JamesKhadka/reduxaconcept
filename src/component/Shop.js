import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
      <h1><b>Deposit/withdraw Balance</b></h1>
      {/* <button className="btn btn-success mx-3" onClick={() => dispatch(actionCreators.withdrawMoney(100))}>-</button>
      <b>updated Balance</b>
      <button className="btn btn-success mx-3" onClick={() => dispatch(actionCreators.depositMoney(100))}>+</button> */}

      <button className="btn btn-success mx-3" onClick={() => { withdrawMoney(100) }}>-</button>
      <b>updated Balance</b>
      <button className="btn btn-success mx-3" onClick={() => { depositMoney(100) }}>+</button>

    </div>
  )
}

export default Shop
