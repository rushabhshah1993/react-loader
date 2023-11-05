/* Package imports */
import React from 'react';

/* Style imports */
import styles from './Loader.scss';

const Loader = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.imageWrapper}></div>
            <div className={styles.textWrapper}>
                <div className={styles.textShimmer} />
                <div className={styles.textShimmer} />
                <div className={styles.textShimmer} />                
            </div>
        </div>
    )
}

export default Loader;