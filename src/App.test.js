import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';

// 这个 react-hooks 需要node版本12以上，我主机才10.14.0拉取不到，参考地址：https://blog.csdn.net/huan1043269994/article/details/108526072
import { renderHook } from '@testing-library/react-hooks';
import App from './App';
import { createStore } from './store/reducer';
import TestRedux from './component/CountButton';
import "@testing-library/jest-dom/extend-expect";
// import { createStore as createReduxStore } from 'redux';
import { Provider } from 'react-redux';

const renderWithRedux = (
  component,
  { store = createStore() } = {} 
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store
  }
}
// cleanup 作为一个参数传递给 afterEach ，以便在每次测试后清理所有东西，以避免内存泄漏。
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

it('checks initial state is equal to 0', () => {
  const dashbord = renderWithRedux(<TestRedux />);
  const { getByTestId } = renderHook(() => {
    useSaveAuthenticationDataToStorages(useDispatch());
  }, { dashbord });

  expect(getByTestId('counter')).toHaveTextContent('0')
})

it('increments the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<TestRedux />)
  fireEvent.click(getByTestId('button-up'))
  expect(getByTestId('counter')).toHaveTextContent('1')
})

it('decrements the counter through redux', () => {
  const { getByTestId } = renderWithRedux(<TestRedux />)
  fireEvent.click(getByTestId('button-down'))
  expect(getByTestId('counter')).toHaveTextContent('-1')
})

