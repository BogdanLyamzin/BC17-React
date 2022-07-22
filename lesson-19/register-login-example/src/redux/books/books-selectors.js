export const getBooks = store => store.books;
export const getFavoriteBooks = ({books}) => books.items.filter(({favorite}) => favorite)