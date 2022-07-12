export const getBooks = store => store.books;
export const getFavoriteBooks = ({books}) => books.filter(({favorite}) => favorite)