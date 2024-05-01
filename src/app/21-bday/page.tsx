'use client'
import React, { useEffect, useState } from "react";
import styles from "../../app/bday.module.css";
import Image from 'next/image'
import RsvpForm from "../components/RSVPForm";

export default function BdayInvite() {
    const [guestName, setGuestName] = useState("");

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const nameParam = params.get('name');
        if (nameParam) {
            setGuestName(nameParam);
        }
    }, []);
    // useEffect(() => {
    //     const currentUrl = window.location.pathname.replace(/^\//, '') + window.location.search.replace(/^\?/, '');
    //     const guestName = Object.keys(guestLinks).find(key => decodeURIComponent(guestLinks[key]) === currentUrl);
    //     if (guestName) {
    //         setGuestName(guestName);
    //     }
    // }, []);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.contentContainer}>
                    <div className={styles.cardAndEnvelope}>
                        {/* <div className={styles.envelope}>
                            <Image alt="envelope" title="envelope" src='/images/envolope.svg' height={562.21} width={689.41} />
                        </div> */}
                        <div className={styles.card}>
                            <div className={styles.cardNameAndGreeting}>
                                <h3 className={styles.cardName}> To: {guestName || "Guest"} </h3> {/* Display the guest name */}
                                <h3 className={styles.cardTextTop}> You&#39;re invited to celebrate <br /> Maha&#39;s </h3>
                            </div>
                            <h1 className={styles.cardTitle}>Twenty </h1>
                            <h1 className={styles.cardTitle2}> One</h1>
                            <h3 className={styles.cardTextBottom}> Sunday, May 19 at 7PM <br />
                                The Standard 1715 <br />
                                90 New Street </h3>
                        </div>
                    </div>
                    <div className={styles.dressCodeContainer}>
                        <h3 className={styles.dressCodeTitle}> Dress Code: Semi-Formal </h3>
                        <p className={styles.dressCodeCaption}> <i>Elegant Evening Wear Pink, White, and Gold Attire Encouraged</i></p>
                        <h4 className={styles.dressCodeDescription}> <b>For Her:</b> Glamorous Evening Attire Cocktail Dresses, or Chic Separates Complementary Colors: Blush, Ivory, Champagne, Gold <br />  <br />
                            <b>For Him:</b> Semi-formal attire. Suits, tuxedos, and ties are not required.</h4>
                    </div>
                    <RsvpForm />
                </div>
            </div>
        </>
    );
}