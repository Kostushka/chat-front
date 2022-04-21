import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
const App = lazy(() => import('@containers/App'));
import UiPreloader from "@components/UI/UiPreloader";
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<UiPreloader/>}>
        <App />
        </Suspense>
    </Provider>,
    document.getElementById('root')
);
