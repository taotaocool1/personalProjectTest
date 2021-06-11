import React from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const TestRedux = () => {
    const dispatch = useDispatch();
    const increment = () => dispatch({ type: 'INCREMENT' })
    const decrement = () => dispatch({ type: 'DECREMENT' })
    const counter = useSelector(state => state.count);
    console.log(counter);
    return (
        <>
          <h1 data-testid="counter">{ counter }</h1>
          <Button data-testid="button-up" onClick={increment}>Up</Button>
          <Button data-testid="button-down" onClick={decrement}>Down</Button>
        </>
    );
  }
  export default TestRedux;