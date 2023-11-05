/* Package imports */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* Style imports */
import styles from './Loader.scss';

const LoaderProps = {
    count: PropTypes.number,
    displayImages: PropTypes.bool,
    displayText: PropTypes.bool,
    multipleImages: PropTypes.bool,
    textCount: PropTypes.number
}

const Loader = (props) => {
    /* States initialisation */
    const [pausedAnimation, pauseAnimation] = useState(false);

    /* Classes initialisation */
    let imageClasses = [styles.imageElement, styles.shimmer];
    let imageWrapperClasses = [styles.imageWrapper];
    let textClasses = [styles.textElement, styles.shimmer];

    /* Elements initialisation */
    let imageShimmer = null;
    let textShimmer = null;

    if(props.displayImages) {
        let animationPlayState = 'initial';

        if(props.multipleImages) imageWrapperClasses.push(styles.multipleImages);
        if(props.displayImages && props.displayText) {
            animationPlayState =  pausedAnimation ? 'paused' : 'running';
        }

        imageShimmer = (
            <div className={imageWrapperClasses.join(' ')}>
                <div className={imageClasses.join(' ')} style={{animationPlayState: animationPlayState }} />
                {
                    props.multipleImages ?
                    (<div className={imageClasses.join(' ')} style={{animationPlayState: animationPlayState }} />) :
                    null
                }
            </div>
        );
    }

    if(props.displayText) {
        let animationPlayState = 'initial';

        if(props.displayImages && props.displayText) {
            animationPlayState =  pausedAnimation ? 'running' : 'paused';
        }

        let textElements = [];
        for(let idx=0; idx<props.textCount; idx++) {
            textElements.push(
                <div 
                    className={textClasses.join(' ')} 
                    style={{animationPlayState: animationPlayState }}
                    key={`element_${idx}`} />
            );
        }

        textShimmer = (
            <div className={styles.textWrapper}>
                { textElements }    
            </div>
        )
    }


    /* useEffects */
    useEffect(() => {
        if(props.displayImages && props.displayText) {
            let counter = 0;
            const timeout = setInterval(() => {
                alternateAnimation(counter);
                counter++;
            }, 3000);

            return () => clearTimeout(timeout);
        }
    }, []);


    /* Functions */
    const alternateAnimation = (counter) => {
        if(counter % 2) pauseAnimation(false);
        else pauseAnimation(true);
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
    multipleImages: false,
    textCount: 3
}

export default Loader;