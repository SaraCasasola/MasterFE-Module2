interface Book {
    title: string;
    isRead: boolean;
}

const books: Array<Book> = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
  function isBookRead(books: Array<Book>, titleToSearch: string): boolean {
    const book =  books.find((book) => book.title === titleToSearch);
    return book ? book.isRead : false;
  }

  console.log("Libros: ", books);
  console.log("¿Devastación fue leído?: ", isBookRead(books, "Devastación"));
  console.log("¿Canción de hielo y fuego fue leído?: ",isBookRead(books, "Canción de hielo y fuego")); 
  console.log("¿Los Pilares de la Tierra fue leído?: ",isBookRead(books, "Los Pilares de la Tierra")); 