/* Package imports */
import React from 'react';

/* Component imports */
import Canvas from '@/components/Canvas/Canvas';
import Sidebar from '@/components/Sidebar/Sidebar';

/* Styles imports */
import styles from './Home.scss';

const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <div className={styles.header}>
                Awesome Loader
            </div>
            <div className={styles.bodyContainer}>
                <Sidebar />
                <Canvas />
            </div>
        </div>
    )
}

export default Home;