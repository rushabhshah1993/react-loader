/* Package imports */
import React from 'react';

/* Style imports */
import styles from './Loader.scss';

const Loader = () => {
    let imageClasses = [styles.imageWrapper, styles.shimmer];
    let textClasses = [styles.textShimmer, styles.shimmer];

    return (
        <div className={styles.loaderWrapper}>
            <div className={imageClasses.join(' ')}></div>
            <div className={styles.textWrapper}>
                <div className={textClasses.join(' ')} />
                <div className={textClasses.join(' ')} />
                <div className={textClasses.join(' ')} />                
            </div>
        </div>
    )
}

export default Loader;