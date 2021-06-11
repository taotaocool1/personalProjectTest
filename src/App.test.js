import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import { Button } from 'antd';
afterEach(cleanup)
describe('App', () => {
  test('renders learn react link', async() => {
    const { getByTestId, getByText, queryByText, asFragment } = render(<App />); 
    // 生成快照验证，如果内容有修改需要输入u重新生成
    expect(asFragment()).toMatchSnapshot();
    const linkElement = getByText(/姓名/i);
    // 从页面全部doc获取有没有
    expect(linkElement).toBeInTheDocument();
    const el = queryByText('Hello');
    expect(el).toBeNull();
    expect(getByTestId("mainHeader")).toHaveTextContent("React Example");
    expect(getByTestId('display')).toHaveTextContent('0');
    // 模拟点击该按钮
    fireEvent.click(getByTestId('button1'));
    expect(getByTestId('display')).toHaveTextContent('1');

    // 查看点击按钮，异步获取是否正确
    fireEvent.click(getByTestId('button2'));
    // await 里面获取的是页面异步操作的数值应该返回的值，比如之前数值1，异步操作后应该是2，这里填写2表示我预知需要的结果
    const counter = await waitFor(() => getByText('2')) 
    // 判断预知结果是否正确
    expect(counter).toHaveTextContent('2');
    expect(getByTestId('button2')).not.toHaveAttribute('disabled');

  });
});
