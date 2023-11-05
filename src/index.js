/* Package imports */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/* Store imports */
import store from '@/store/store';
import { selectLoaderTypes } from '@/store/actions/typeActions';

/* Data imports */
import * as LOADER_TYPES from '@/data/types.json';

/* Component imports */
import Home from '@/pages/Home';

/* Style imports */
import './index.scss';

if(Object.keys(LOADER_TYPES).length) {
    let defaultLoaderType = null;
    for(let idx in LOADER_TYPES) {
        let type = LOADER_TYPES[idx];
        if(type.id === 'STANDARD') {
            defaultLoaderType = type.id;
            break;
        }
    }
    store.dispatch(selectLoaderTypes(defaultLoaderType));
}

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root')
);