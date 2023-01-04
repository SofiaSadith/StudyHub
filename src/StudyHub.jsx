import { AppRouter } from './router/AppRouter';
import './StudyHub.css';
//redux
import { Provider } from 'react-redux';
import store from './store';

export const StudyHub = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
