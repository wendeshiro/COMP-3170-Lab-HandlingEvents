import { useState } from "react";
import styles from "./Book.module.css";

export default function Book({ imgSrc, imgAlt, bookLink, bookTitle, bookPrice }) {
    const [isHighlighted, setIsHighlighted] = useState(false);

    const removeBook = (e) => {
        e.stopPropagation();
        e.currentTarget.closest(`.${styles.bookContainer}`)?.remove();
    };

    const toggleHighlight = (e) => {
        if (isHighlighted) {
            e.currentTarget.style.background = "";
            e.currentTarget.style.boxShadow = "";
        } else {
            e.currentTarget.style.background = "rgba(209, 222, 230, 1)";
            e.currentTarget.style.boxShadow = "0 0 50px rgba(209, 222, 230, 0.8)";
        }
        setIsHighlighted(!isHighlighted);
    };

    return (
        <div className={styles.bookContainer} onClick={toggleHighlight}>
            <a href={bookLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                <img className={styles.bookImage} src={imgSrc} alt={imgAlt} />
            </a>
            <a
                className={styles.bookTitle}
                href={bookLink}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
            >
                {bookTitle}
            </a>
            <p className={styles.bookPrice}>{bookPrice}</p>
            <div className={styles.removeButton} onClick={removeBook}>
                Remove
            </div>
        </div>
    );
}
