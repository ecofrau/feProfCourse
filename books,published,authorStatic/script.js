class Book {
   
    static instances = [];

    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;

        
        Book.instances.push(this);
    }

    
    static listAuthors() {
        const authors = [];
        for (let i = 0; i < Book.instances.length; i++) {
            authors.push(Book.instances[i].author);
        }
        return authors;
    }
}


const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(Book.listAuthors()); 