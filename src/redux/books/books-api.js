// const appId = 'E1P239nDAoofepI7onz4';
// const BooksURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

// const bookString = (book) => JSON.stringify({
//   item_id: book.id,
//   title: book.title,
//   author: book.author,
//   category: book.category,
// });

// export const getBooksAPI = async () => {
//   try {
//     const result = await fetch(BooksURL);
//     const data = await result.json();
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

// export const addBookAPI = async (book) => {
//   try {
//     await fetch(BooksURL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: bookString(book),
//     });
//     return true;
//   } catch (error) {
//     return false;
//   }
// };

// export const removeBookAPI = async (id) => {
//   const url = `${BooksURL}/${id}`;
//   try {
//     const result = await fetch(url, {
//       method: 'DELETE',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ item_id: id }),
//     });
//     return result;
//   } catch (error) {
//     return error;
//   }
// };
