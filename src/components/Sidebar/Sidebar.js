/* Package imports */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

/* Style imports */
import styles from './Sidebar.scss';

/* Action imports */
import { selectLoaderTypes } from '@/store/actions/typeActions';

const Sidebar = () => {
    const dispatch = useDispatch();
    
    /* Store state import */
    const loaderTypes = useSelector(state => state.loaderTypes)?.loaderTypes;
    const selectedLoader = useSelector(state => state.loaderTypes.selectedLoaderType);

    let typesElement = loaderTypes.map(type => {
        let classNames = [styles.listItem];
        if(type.id === selectedLoader) classNames.push(styles.activeListItem);

        return (
            <p 
                className={classNames.join(' ')} 
                key={type.id}
                onClick={() => onListItemClick(type.id)}>
                {type.title}
            </p>
        )
    });

    const onListItemClick = id => {
        dispatch(selectLoaderTypes(id));
    }

    return (
        <div className={styles.sidebar}>
            <p className={styles.sectionTitle}>Types of Loaders</p>
            { typesElement }
        </div>
    )
}

export default Sidebar;