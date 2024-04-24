"use client"
import { useState, useEffect } from "react";
import React from 'react';
import styles from '../bday.module.css';

export default function form() {
  const [rsvpResponse, setRsvpResponse] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleRsvpResponse = (response: string) => {
    setRsvpResponse(response);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };


    return ( // if there are more than 30 poeple who said yes to the invite then diable the plus one
        <form className={styles.formBox}
        // onSubmit={onSubmit}
        >
            <div className={styles.formContainer}>
                <div className={styles.formQuestions}>
                    <h3 className={styles.formText}>
                        RSVP
                    </h3>
                    <h3 className={styles.formText}>
                        Plus One
                    </h3>
                    <h3 className={styles.formText}>
                        Name
                    </h3>
                </div>
                <div className={styles.formInputs}>
                    <div>
                    <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('Yes')}>Yes</button>
            <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('No')}>No</button>
            <button className={styles.formBtn} type="button" onClick={() => handleRsvpResponse('Maybe')}>Maybe</button>
                    </div>
                    <div>
                        <input className={styles.formCheckbox} title="plus one" type="checkbox" id="plusOne" name="plusOne" />
                        {isChecked && <input type="text" placeholder="Name" />}
                        <label htmlFor="plusOne">Plus One</label>
                    </div>
                    <div>
                        <input className={styles.formNameInput} title="name" type="text" name="name" />
                    </div>
                </div>
            </div>
        </form>
    );
}