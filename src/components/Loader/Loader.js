/* Package imports */
import React from 'react';
import PropTypes from 'prop-types';

/* Style imports */
import styles from './Loader.scss';

const LoaderProps = {
    count: PropTypes.number,
    displayImages: PropTypes.bool,
    displayText: PropTypes.bool,
    multipleImages: PropTypes.bool
}

const Loader = (props) => {
    /* Classes initialisation */
    let imageClasses = [styles.imageElement, styles.shimmer];
    let textClasses = [styles.textElement, styles.shimmer];

    /* Elements initialisation */
    let imageShimmer = null;
    let textShimmer = null;

    if(props.displayImages) {
        imageShimmer = (
            <div className={styles.imageWrapper}>
                <div className={imageClasses.join(' ')} />
            </div>
        );
    }

    if(props.displayText) {
        textShimmer = (
             <div className={styles.textWrapper}>
                <div className={textClasses.join(' ')} />
                <div className={textClasses.join(' ')} />
                <div className={textClasses.join(' ')} />                
            </div>
        )
    }

    return (
        <div className={styles.loaderWrapper}>
            { imageShimmer }
            { textShimmer }
        </div>
    )
}

Loader.propTypes = LoaderProps;
Loader.defaultProps = {
    count: 1,
    displayImages: true,
    displayText: true,
    multipleImages: false
}

export default Loader;