import React from "react";
import styles from "../../app/bday.module.css";
import Image from 'next/image'
import RsvpForm from "../components/RSVPForm";

export default function bdayInvite() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.cardAndEnvelope}>
                    <div className={styles.envelope}>
                        <Image alt="envelope" title="envelope" src='/images/envolope.svg' height={562.21} width={689.41} />
                    </div>
                    <div className={styles.card}>
                        <h3 className={styles.cardTextTop}> You're invited to celebrate <br /> Maha’s </h3>
                        <h1 className={styles.cardTitle}>Twenty </h1>
                        <h1 className={styles.cardTitle2}> One</h1>
                        <h3 className={styles.cardTextBottom}> Sunday, May 19 at 7PM <br />
                            The Standard 1715 <br />
                            90 New Street </h3>
                    </div>
                    <div className={styles.dressCodeContainer}>
                        <h3 className={styles.dressCodeTitle}> Dress Code: Semi-Formal </h3>
                        <p className={styles.dressCodeCaption}> <i>Elegant Evening Wear Pink, White, and Gold Attire Encouraged</i></p>
                        <h4 className={styles.dressCodeDescription}> <b>For Her:</b> Glamorous Evening Attire Cocktail Dresses, Formal Gowns, or Chic Separates Complementary Colors: Blush, Ivory, Champagne, Gold <br />
                            <b>For Him:</b> Black Tie Optional Suits, Tuxedos, or Formal Blazers Polished Dress Shoes Ties or Bowties in Shades of Pink or Gold</h4>
                    </div>
                    <RsvpForm />
                </div>
            </div>
        </>
    );
}