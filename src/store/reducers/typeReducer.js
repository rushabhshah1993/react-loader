/* Package imports */
import { cloneDeep } from 'lodash';

/* Action types imports */
import * as actionTypes from '@/store/action-types.js';

/* Data imports */
import * as LOADER_TYPES from '@/data/types.json';

const initialState = {
    loaderTypes: cloneDeep(LOADER_TYPES.default),
    selectedLoaderType: ''
}

const reducer = (state = initialState, action) => {
    let clonedState = cloneDeep(state);

    switch(action.type) {
        case actionTypes.SELECT_LOADER_TYPE:
            clonedState.selectedLoaderType = action.selected;
            return clonedState;
        default: return clonedState;
    }
}

export default reducer;
