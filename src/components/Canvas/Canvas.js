/* Package imports */
import React from 'react';

/* Component imports */
import Loader from '@/components/Loader/Loader';

/* Style imports */
import styles from './Canvas.scss';

const Canvas = () => {
    return (
        <div className={styles.canvas}>
            Canvas
            <Loader />
        </div>
    )
}

export default Canvas;