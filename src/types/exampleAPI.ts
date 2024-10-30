console.log('\n 5. Array libros con sus propiedades y uso filter para libros de un solo autor ')
const books = [
    { title: "Don Quijote de la Mancha", author: "Miguel de Cervantes Saavedra" },
    { title: "Cien años de Soledad", author: "Gabriel Garcia Marquez" },
    { title: "Crimen y castigo", author: "Fiódor Dostoyevski" }
];

const authorBooks = books.filter(book => book.author === "Fiódor Dostoyevski");
console.log(authorBooks, 'es tu autor elegido');
