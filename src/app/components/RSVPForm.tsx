import React, { Suspense, useState } from "react";
import { useRouter } from 'next/navigation';
import styles from '../bday.module.css';

const Form = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<{
        rsvpResponse: string | null;
        plusOneName: string;
        guestName: string;
    }>({
        rsvpResponse: null,
        plusOneName: "",
        guestName: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleRsvpResponse = (response: string) => {
        setFormData({ ...formData, rsvpResponse: response });
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsLoading(true);

        if (!formData.rsvpResponse) {
            setErrorMessage("RSVP response is required");
            return;
        }
        const params = new URLSearchParams(window.location.search);
        const nameParam = params.get('name');

        const form = {
            ...formData,
            guestName: nameParam,
            plusOneName: formData.plusOneName,
        };
        console.log('formData:', formData);
        try {
            const rawResponse = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });

            if (rawResponse.ok) {
                setIsSubmitted(true);
                router.push('/21-bday-success');
            } else {
                setErrorMessage("Failed to submit RSVP. Please try again.");
            }
            setIsLoading(false);
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage("Failed to submit RSVP. Please try again.");
        }
        setIsLoading(false);

    };

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <h3 className={styles.dressCodeTitle}> Save the Date! </h3>
            <p className={styles.dressCodeCaption}> <i>Kindly Respond by May 10th</i></p>
            <div className={styles.formContainer}>

                <div className={styles.formQuestions}>
                    <p className={styles.formText}>RSVP</p>
                    <div>
                        <button className={`${styles.formBtn} ${styles.yesBtn} ${formData.rsvpResponse === "Yes" ? styles.selectedBtn : ""}`} type="button" onClick={() => handleRsvpResponse('Yes')}>Yes</button>
                        <button className={`${styles.formBtn} ${formData.rsvpResponse === "Maybe" ? styles.selectedBtn : ""} `} type="button" onClick={() => handleRsvpResponse('Maybe')}>Maybe</button>
                        <button className={`${styles.formBtn} ${formData.rsvpResponse === "No" ? styles.selectedBtn : ""} `} type="button" onClick={() => handleRsvpResponse('No')}>No</button>
                    </div>
                </div>

                <div className={styles.formQuestions}>
                    <p className={styles.formText}>Plus One</p>
                    <input className={`${styles.formBtn} ${styles.formNameInput}`} title="name" type="text" name="plusOneName" placeholder="Your plus one's name" value={formData.plusOneName} onChange={handleInputChange} />
                </div>
            </div>
            <div className={styles.submitContainer}>
                {isLoading ? (
                    <p className={styles.formLoadingText}>Loading...</p> // Your loading message or spinner here
                ) : (
                    <button className={styles.submitBtn} type="submit">Submit</button>
                )}
            </div>

            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            {isSubmitted && <p className={styles.success}>RSVP submitted!</p>}
        </form >
    );
}

export default Form;