import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import styles from '../bday.module.css';

const Form = () => {
    const router = useRouter();
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

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.rsvpResponse) {
            setErrorMessage("RSVP response is required");
            return;
        }
        const params = new URLSearchParams(window.location.search);
        const nameParam = params.get('name');

        const form = {
            ...formData,
            guestName: nameParam,
            plusOneName: formData.plusOne ? formData.plusOneName : "",
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
        } catch (error) {
            console.error('Error submitting form:', error);
            setErrorMessage("Failed to submit RSVP. Please try again.");
        }

    };

    return (
        <form className={styles.formBox} onSubmit={handleSubmit}>
            <h3 className={styles.dressCodeTitle}> Save the Date! </h3>
            <div className={styles.formContainer}>

                <div className={styles.formQuestions}>
                    <p className={styles.formText}>RSVP</p>
                    <div>
                        <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('Yes')}>Yes</button>
                        <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('No')}>No</button>
                        <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('Maybe')}>Maybe</button>
                    </div>
                </div>

                <div className={styles.formQuestions}>
                    <p className={styles.formText}>Plus One</p>
                    {formData.plusOne ? <p className={styles.formText}>Name</p> : null}
                    <div>
                        <input className={styles.formCheckbox} title="plus one" type="checkbox" checked={formData.plusOne} onChange={handleCheckboxChange} id="plusOne" name="plusOne" />
                        <label htmlFor="plusOne"></label>
                        {formData.plusOne && (
                            <div>
                                <input className={styles.formNameInput} title="name" type="text" name="plusOneName" value={formData.plusOneName} onChange={handleInputChange} />
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

export default Form;