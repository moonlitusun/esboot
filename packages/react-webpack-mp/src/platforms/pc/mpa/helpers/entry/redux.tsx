import { Provider } from 'react-redux';

export default function wrapRedux(App: React.ReactNode, store: any): React.ReactNode {
  return (
    <Provider store={store}>
      {App}
    </Provider>
  );
}
