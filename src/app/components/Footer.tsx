import React from 'react';
import '../globals.css';

const Footer: React.FC = () => {
    return (
        <footer className="footerContainer">
                    <div className="contentContainer">
                        <div className="richTextContainer">
                            <p className="footerText">
                                <br className="footerText" />
                                COMPUTER SCIENCE STUDENT AT RUTGERS
                            </p>
                            <p className="footerText">
                                <span style={{ textDecoration: 'underline' }}>
                                    <a href="mailto:mlk224@scarletmail.rutgers.edu?subject=Portfolio" target="_self" className="footerLinkName">
                                        MAHA.KANAKALA@GMAIL.COM
                                    </a>
                                </span>
                            </p>
                        </div>
                        <div className="richTextContainer">
                            <p className="footerTextYear">
                              ©2023&nbsp;
                            </p>
                        </div>
                        <div className="richTextContainer">
                            <p className="footerTextSocial">
                                {/* <a href="https://www.instagram.com/" target="_blank" rel="noreferrer noopener" className="footerLink">
                                    INSTAGRAM
                                </a>{' '}
                                ·{' '} */}
                                <a href="https://www.linkedin.com/in/maha-kanakala/" target="_blank" rel="noreferrer noopener" className="footerLink">
                                    LINKEDIN
                                </a>{' '}
                                ·{' '}
                                <a href="https://github.com/mahakanakala" target="_blank" rel="noreferrer noopener" className="footerLink">
                                    GITHUB
                                </a>
                            </p>
                        </div>
                        <div className="richTextContainer">
                            <p className="footerTextName">
                                <span style={{ textDecoration: 'underline' }}>
                                    <a href="/" target="_self" className="footerLinkName">
                                        MAHA KANAKALA
                                    </a>
                                </span>
                            </p>
                        </div>
                </div>
        </footer>
    );
};

export default Footer;
