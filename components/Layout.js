import { Children, Component } from "react";

import Header from './header'
import styles from '../styles/layout.module.css';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.mainContainer}>
                {children}
            </div>
        </>
    )
}