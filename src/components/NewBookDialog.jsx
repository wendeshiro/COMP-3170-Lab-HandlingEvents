import styles from "./NewBookDialog.module.css";

export default function NewBookDialog() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const dialog = document.querySelector(".newBookDialog");
        if (dialog) {
            dialog.close();
        }
    };

    const handleCancel = () => {
        const dialog = document.querySelector(".newBookDialog");
        if (dialog) {
            dialog.close();
        }
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            const dialog = document.querySelector(".newBookDialog");
            if (dialog) {
                dialog.close();
            }
        }
    };

    return (
        <div className={styles.dialogContainer} onClick={handleBackdropClick}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <p className={styles.title}>Add Your New Book</p>
                <div className={styles.inputs}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="publisher">Publisher</label>
                    <input type="text" id="publisher" name="publisher" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="publication">Publication Year</label>
                    <input type="date" id="publication" name="publication" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="language">Language</label>
                    <input type="text" id="language" name="language" />
                </div>
                <div className={styles.inputs}>
                    <label htmlFor="pages">Pages</label>
                    <input type="number" id="pages" name="pages" />
                </div>
                <div className={styles.actionButtons}>
                    <button type="submit" className={styles.addButton}>
                        Submit
                    </button>
                    <button type="button" className={styles.cancelButton} onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
