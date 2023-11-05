/* Action types imports */
import * as actionTypes from '@/store/action-types.js';

export const selectLoaderTypes = (type) => {
    return {
        type: actionTypes.SELECT_LOADER_TYPE,
        selected: type
    }
}