import React, {Component} from 'react';

import styles from './create.less';
import {Link} from "react-router";

class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                Links:
                <p><Link to='/open' > - How to open IPFS link </Link></p>
                <p><Link to='/favourites' > - How to add an app to favourites </Link></p>
                <p><Link to='/switch' > - How to switch between ethereum networks </Link></p>
                <p><Link to='/ipfs' > - How to add own IPFS node </Link></p>
                <p><Link to='/eth' > - How to add own ETH node </Link></p>
                <p><Link to='/create' > - How to create an app </Link></p>
                <p><Link to='/link' > - How to link content </Link></p>
            </div>
        );
    }
}

export default Home;
