import React from 'react';
import '../globals.css';

const Footer: React.FC = () => {
    return (
        <footer className="footerContainer">
                    <div className="contentContainer">
                        <div className="richTextContainer">
                            {/* <p className="footerText">
                                <br className="footerText" />
                                COMPUTER SCIENCE STUDENT AT RUTGERS
                            </p> */}
                            <p className="footerText">
                                <span style={{ textDecoration: 'underline' }}>
                                    <a href="mailto:maha.kanakala@gmail.com?subject=Portfolio Inquiry" target="_self" className="footerLinkName">
                                        maha.kanakala@gmail.com
                                    </a>
                                </span>
                            </p>
                        </div>
                <div className="richTextContainer">
                <br/>
                            <p className="footerTextYear">
                              ©2024&nbsp;
                            </p>
                        </div>
                <div className="richTextContainer">
                <br/>
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
                <br/>
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
