'use client'
import React, { useState } from "react";
import styles from '../bday.module.css';

export default function Form() {
    const [formData, setFormData] = useState<{
        rsvpResponse: string | null;
        plusOne: boolean;
        plusOneName: string;
        guestName: string;
    }>({
        rsvpResponse: null,
        plusOne: false,
        plusOneName: "",
        guestName: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleRsvpResponse = (response: string) => {
        setFormData({ ...formData, rsvpResponse: response });
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, plusOne: event.target.checked });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.rsvpResponse) {
            setErrorMessage("RSVP response is required");
            return;
        }

        const dataToSave = {
            ...formData,
            plusOneName: formData.plusOne ? formData.plusOneName : "",
        };
        
        console.log(dataToSave);
        // Reset form after submission
        setFormData({
            rsvpResponse: null,
            plusOne: false,
            plusOneName: "",
            guestName: ""
        });
        setErrorMessage("");
        setIsSubmitted(true);
    };

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <div className={styles.formContainer}>
                <div className={styles.formQuestions}>
                    <h3 className={styles.formText}>RSVP</h3>
                    <h3 className={styles.formText}>Plus One</h3>
                    {formData.plusOne ? <h3 className={styles.formText}>Name</h3> : null}
                </div>
                <div className={styles.formInputs}>
                    <div>
                        <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('Yes')}>Yes</button>
                        <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('No')}>No</button>
                        <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('Maybe')}>Maybe</button>
                    </div>
                    <div>
                        <input className={styles.formCheckbox} title="plus one" type="checkbox" checked={formData.plusOne} onChange={handleCheckboxChange} id="plusOne" name="plusOne" />
                        <label htmlFor="plusOne"></label>
                        {formData.plusOne && (
                            <div>
                                <input className={styles.formNameInput} title="name" type="text" name="guestName" value={formData.guestName} onChange={handleInputChange} />
                            </div>
                        )}
                    </div>
                </div>
                <button className={styles.submitBtn} type="submit">Submit</button>
                {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                {isSubmitted && <p className={styles.success}>RSVP submitted!</p>}
            </div>
        </form>
    );
}