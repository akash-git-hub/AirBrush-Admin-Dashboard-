import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { AuthProvider } from "./states/AuthContext";
import 'simplebar/src/simplebar.css';
import { Provider as ReduxProvider } from 'react-redux';
import 'assets/third-party/apex-chart.css';
import App from './App';
import { store } from 'store';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <>
    <ReduxProvider store={store}>
      <AuthProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </AuthProvider>
    </ReduxProvider>
  </>
);

reportWebVitals();
