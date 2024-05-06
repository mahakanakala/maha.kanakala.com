import React from "react";
import styles from "../../app/bday.module.css";

export default function SuccessPage() {
    return (
        <>
            <div className={styles.successMain}>
                <div className={styles.successContainer}>
                    <h1 className={styles.sucessTitle}>Thank you for your RSVP!</h1>
                    <p className={styles.dressCodeCaption}>We look forward to celebrating with you or not you meanie you said no to the most fantastic party. In the mean time you can add to the playlist!</p>
                    <iframe className={styles.spotifyContainer} src="https://open.spotify.com/embed/playlist/74F1rWeTCsvvH0slYmVewG?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay;  clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    <div className={styles.playlistLinkContainer}>
                    <a href="https://open.spotify.com/playlist/74F1rWeTCsvvH0slYmVewG?si=yTwDcZlZQ2Cyt2RFfYGwVQ&pt=067b55a256bd6c3c1be7a134b3033ba6&pi=u-kzKmYBmJRxir" target="_blank" rel="noopener noreferrer">
                        <button className={styles.playlistBtn} type="submit">Add to Playlist</button>
                    </a>
                    </div>
                </div>
            </div>
        </>
    );
}