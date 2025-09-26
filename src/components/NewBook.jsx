import styles from "./NewBook.module.css";

export default function NewBook() {
    return (
        <div className={styles.newBookContainer}>
            <div className={styles.pulsBtn}>Add New Book</div>
        </div>
    );
}
