/* Package imports */
import React from 'react';
import { useSelector } from 'react-redux';

/* Component imports */
import Loader from '@/components/Loader/Loader';

/* Style imports */
import styles from './Canvas.scss';

/* Constant imports */
import * as TYPES_OF_LOADERS from './../../data/variables';

const Canvas = () => {
    /* Store state import */
    const loaderTypes = useSelector(state => state.loaderTypes)?.loaderTypes;
    const selectedLoader = useSelector(state => state.loaderTypes.selectedLoaderType);

    let loaderData = loaderTypes.find(type => type.id === selectedLoader);

    const fetchLoaderConfig = (id) => {
        if(id === TYPES_OF_LOADERS.STANDARD) return <Loader />;
        if(id === TYPES_OF_LOADERS.CUSTOM_ONLY_IMAGE) return <Loader displayText={false} />;
        if(id === TYPES_OF_LOADERS.CUSTOM_ONLY_TEXT) return <Loader displayImages={false} />;
        if(id === TYPES_OF_LOADERS.CUSTOM_ONLY_TWO_IMAGES) {
            return <Loader displayText={false} multipleImages={true} />;
        }
        if(id === TYPES_OF_LOADERS.CUSTOM_TWO_IMAGES_AND_TEXT) return <Loader multipleImages={true} />;
        if(id === TYPES_OF_LOADERS.CUSTOM_ONE_IMAGE_AND_USERDEFINED_TEXT_LINES) return <Loader textCount={5} />;
        if(id === TYPES_OF_LOADERS.STANDARD_NO_ALTERNATE_ANIMATION) {
            return <Loader alternateAnimation = {false} />;
        }
        if(id === TYPES_OF_LOADERS.STANDARD_USERDEFINED_ANIMATION_TIME) {
            return <Loader durationInSeconds={10} />;
        }
        if(id === TYPES_OF_LOADERS.MULTIPLE_LOADERS) {
            return (
                <div>
                    <Loader />
                    <Loader />
                </div>
            )
        }
    }   

    let loaderElement = fetchLoaderConfig(selectedLoader);

    return (
        <div className={styles.canvas}>
            <p>{loaderData.title}</p>
            { loaderElement }
        </div>
    )
}

export default Canvas;