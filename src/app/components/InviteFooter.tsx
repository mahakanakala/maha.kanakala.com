import React from 'react';
import Link from 'next/link';
import styles from '../bday.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.inviteFooterContainer}>
            <div className={styles.footerContent}>
            <a href="/" target="_self" className="footerLinkName">
                                        MAHA KANAKALA
                                    </a>
                <p className={styles.footerText}>© 2022 Your Name</p>
            </div>
        </footer>
    );
};

export default Footer;
