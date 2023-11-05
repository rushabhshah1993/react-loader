/* Package imports */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/* Style imports */
import styles from './Loader.scss';

const LoaderProps = {
    alternateAnimation: PropTypes.bool,
    count: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    displayImages: PropTypes.bool,
    displayText: PropTypes.bool,
    durationInSeconds: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    multipleImages: PropTypes.bool,
    textCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
}

const Loader = (props) => {
    /* States initialisation */
    const [pausedAnimation, pauseAnimation] = useState(false);

    /* Classes initialisation */
    let imageClasses = [styles.imageElement, styles.shimmer];
    let imageWrapperClasses = [styles.imageWrapper];
    let textClasses = [styles.textElement, styles.shimmer];

    /* Elements and variables initialisation */
    let imageShimmer = null;
    let textShimmer = null;

    if(props.durationInSeconds) {
        imageClasses.push({animationDuration: `${props.durationInSeconds}s`});
        textClasses.push({animationDuration: `${props.durationInSeconds}s`});
    }

    if(props.displayImages) {
        let animationPlayState = 'initial';
        let elementStyle = {};

        if(props.multipleImages) imageWrapperClasses.push(styles.multipleImages);
        if(props.displayImages && props.displayText) {
            animationPlayState =  pausedAnimation ? 'paused' : 'running';
            elementStyle['animationPlayState'] = animationPlayState;
        }
        if(props.durationInSeconds) {
            elementStyle['animationDuration'] = `${props.durationInSeconds}s`;
        }

        imageShimmer = (
            <div className={imageWrapperClasses.join(' ')}>
                <div className={imageClasses.join(' ')} style={elementStyle} />
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
        let elementStyle = {};

        if(props.displayImages && props.displayText && props.alternateAnimation) {
            animationPlayState =  pausedAnimation ? 'running' : 'paused';
            elementStyle['animationPlayState'] = animationPlayState;
        }
        if(props.durationInSeconds) {
            elementStyle['animationDuration'] = `${props.durationInSeconds}s`;
        }

        let textElements = [];
        for(let idx=0; idx<props.textCount; idx++) {
            textElements.push(
                <div 
                    className={textClasses.join(' ')} 
                    style={elementStyle}
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
        if(props.displayImages && props.displayText && props.alternateAnimation) {
            let counter = 0;
            let animationDuration = props.durationInSeconds ? props.durationInSeconds*1000 : 3000;

            const timeout = setInterval(() => {
                alternateAnimation(counter);
                counter++;
            }, animationDuration);

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
    alternateAnimation: true,
    count: 1,
    displayImages: true,
    displayText: true,
    durationInSeconds: 3,
    multipleImages: false,
    textCount: 3
}

export default Loader;