import { Provider } from 'react-redux';

export default function wrapRedux(App, store: any): React.ReactNode {
  return (
    <Provider store={store}>
      {App}
    </Provider>
  );
}
