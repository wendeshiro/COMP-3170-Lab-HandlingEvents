import styles from "./App.module.css";
import Header from "./components/Header";
import Book from "./components/Book";
import Footer from "./components/Footer";
import BookData from "../data/books.json";
import Modal from "./components/Modal";
import NewBookDialog from "./components/NewBookDialog";

export default function App() {
    return (
        <div className={styles.appContainer}>
            <Header />
            <div className={styles.contentContainer}>
                <div>
                    <Modal>
                        <NewBookDialog />
                    </Modal>
                </div>
                <div className={styles.bookList}>
                    {BookData.map((book) => (
                        <Book
                            imgSrc={book.image}
                            imgAlt={book.title}
                            bookLink={book.url}
                            bookTitle={book.title}
                            bookPrice={book.price}
                            key={book.isbn13}
                        />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
