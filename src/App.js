import './App.css';
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import TestRedux from './component/CountButton';
import './api/index.js';
import axios from 'axios';
function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    axios.get('/data', { dataType: 'json' }).then((res) => {
      console.log(res.data.list);
    });
  }, []);
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
      a: '西湖区湖底公园1号',
      b: '西湖区湖底公园1号',
      c: '西湖区湖底公园1号',
      d: '西湖区湖底公园1号',
      e: '西湖区湖底公园1号',
      f: '西湖区湖底公园1号',
      g: '西湖区湖底公园1号',
      h: '西湖区湖底公园1号',
      i: '西湖区湖底公园1111111111111111111111号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
    {
      key: '3',
      name: '胡22',
      age: 42,
      address: '西湖区湖底公园1号',
    }
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 40,
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: 40,
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'a',
      width: 40,
      key: 'a',
    },
    {
      title: '住址',
      dataIndex: 'b',
      width: 40,
      key: 'b',
    }
    ,
    {
      title: '住址',
      dataIndex: 'c',
      width: 40,
      key: 'c',
    }
    ,
    {
      title: '住址',
      dataIndex: 'd',
      width: 40,
      key: 'd',
    }
    ,
    {
      title: '住址',
      dataIndex: 'e',
      width: 40,
      key: 'e',
    }
    ,
    {
      title: '住址',
      dataIndex: 'f',
      width: 20,
      key: 'f',
    }
    ,
    {
      title: '住址',
      dataIndex: 'g',
      width: 400,
      key: 'g',
    }
    ,
    {
      title: '住址',
      dataIndex: 'h',
      width: 300,
      key: 'h',
    }
    ,
    {
      title: '住',
      dataIndex: 'i',
      width: 100,
      key: 'i',
    },
    {}
  ];
  const setStateAsync = () => {
    setTimeout(() => {
        setState((state)=>++state);
    }, 1000)
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <a>123</a>
      <a>233</a>
      <a data-testid="display">{state}</a>
      <div style={{ width: 1200 }}><Table rowKey={(row) => row.key} dataSource={dataSource} columns={columns} /></div>
      <a>
          Learn React
      </a>
      <h3 data-testid="mainHeader">
          React Example
      </h3>
      <button data-testid="button1" onClick={()=>setState((state)=>++state)}>++</button>
      <button data-testid="button2" onClick={()=>setStateAsync()}>2</button>
      <div>
        <h1>这个是redux操作按钮数据</h1>
        <TestRedux />
      </div>
    </div>
  );
}
export default App;
// export default TestRedux;
