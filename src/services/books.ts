import { Book } from "../models/book";

export const getBooks = async () => {
	return Book.findAll();
};

export const getBook = async (bookId: number) => {
	return Book.findOne({
		where: { bookId },
	});
};

export const saveBook = async (book: Book) => {
	const [newbook, created] = await Book.findOrCreate<Book>({
		where: { bookId: book.bookId },
		defaults: { ...book },
	});
	if (created) return newbook;
	else {
		throw { message: "bookId is existed." } as Error;
	}
};

export const deleteBook = async (bookId: number) => {
	const deletedNumber = await Book.destroy({
		where: { bookId },
	});

	return deletedNumber === 1
		? `Book #${bookId} has been deleted.`
		: `Book #${bookId} is not found.`;
};

// User Story 4 - Update Book By Id Solution
export const updateBook = async (bookId: number, book: Book) => {
	return Book.update(book, {
		where: {
			bookId,
		},
	});
};
