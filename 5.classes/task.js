class PrintEditionItem{
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        return this.state *= 1.5;
    }

    set state(number){
        if (number < 0){
            this._state = 0;
        } else if (number >100){
            this._state = 100;
        } else {
            this._state = number;
        }
    }

    get state(){
        return (this._state);
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}
 
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value){
        let result = this.books.find(item => item[type] === value);
        if (result === undefined){
            return null;
        } else {
            return result;
        }
    }

    giveBookByName(bookName){
        let result = this.findBookBy("name", bookName);
        if (result != null){
            this.books.splice(this.books.indexOf(result), 1);
        }
        return result;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = [];
    }

    addMark(mark, subject){
        
    }
}