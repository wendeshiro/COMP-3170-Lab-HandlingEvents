import styles from "./Book.module.css";

export default function Book({ imgSrc, imgAlt, bookLink, bookTitle, bookPrice }) {
    return (
        <div className={styles.bookContainer}>
            <a href={bookLink} target="_blank">
                <img className={styles.bookImage} src={imgSrc} alt={imgAlt} />
            </a>
            <a className={styles.bookTitle} href={bookLink} target="_blank">
                {bookTitle}
            </a>
            <p className={styles.bookPrice}>{bookPrice}</p>
        </div>
    );
}
