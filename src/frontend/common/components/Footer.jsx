import React from 'react';
import styles from './Footer.scss';

export default class Footer extends React.Component {

    render() {
        return <div className={'container ' + styles.footer}>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'>
                <rect xmlns='http://www.w3.org/2000/svg' x='0' y='0' width='50' height='50' fill='url(#paint2_linear)'/>
                <linearGradient xmlns='http://www.w3.org/2000/svg' id='paint2_linear' x1='0' y1='0' x2='0' y2='50' gradientUnits='userSpaceOnUse'>
                    <stop stopColor='#F2D900'/>
                    <stop offset='1' stopColor='#F2994A'/>
                </linearGradient>
            </svg>
        </div>;
    }
}