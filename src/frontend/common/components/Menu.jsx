import React from 'react';
import Link from 'react-router/lib/Link';
import styles from './Menu.scss';

export default class Menu extends React.Component {

    render() {
        return <div className='container'>
            <div  className={'row ' + styles.menu}>
                <Link to='/cart' className='col-3'>
                    <i className='fas fa-shopping-cart fa-2x'></i>
                </Link>
                <Link to='/spoon' className='col-3'>
                    <i className='fas fa-utensils fa-2x'></i>
                </Link>
                <Link to='/flower' className='col-3'>
                    <i className='fas fa-atom fa-2x'></i>
                </Link>
                <Link to='/stadium' className='col-3'>
                    <i className='fas fa-hotel fa-2x'></i>
                </Link>
            </div>
        </div>;
    }
}