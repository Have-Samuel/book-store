const appId = 'NXcpJ7tVwe6VklFiOYLn';
const BooksUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

export const fetchBooks = async () => {
  try {
    const res = await fetch(
      BooksUrl,
    );
    const data = await res.json();
    const books = [];
    Object.entries(data).forEach((book) => book.push({ ...book[1][0], item_id: book[0] }));
    return books;
  } catch (err) {
    return err;
  }
};

export const createBook = async (book) => {
  try {
    await fetch(
      BooksUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      },
    );
    return book;
  } catch (err) {
    return err;
  }
};

export const deleteBook = async (id) => {
  try {
    const res = await fetch(
      `${BooksUrl}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item_id: id }),
      },
    );
    if (res.status === 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
  return false;
};
