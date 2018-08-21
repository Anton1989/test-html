import React from 'react';
import styles from './Navigation.scss';
import Link from 'react-router/lib/Link';

export default class Navigation extends React.Component {

    render() {
        return <header className={styles.header}>
            <div className={'navbar navbar-dark shadow-sm ' + styles.gradient}>
                <div className='container d-flex justify-content-between'>
                    <Link to='/' className='navbar-brand d-flex align-items-center'>
                        <strong>Main</strong>
                    </Link>
                </div>
            </div>
        </header>;
    }
}