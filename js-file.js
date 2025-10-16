function Book(title, author, pages) {
  if(!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readState = "unread";
}

Book.prototype.info = function() {
  return `${this.title}, ${this.pages} pages, ${this.readState}`;
}

function Manga(title, author, pages, coverArt, mainCharacter) {
  Book.call(this, title, author, pages, readState);
  this.coverArt = coverArt;
  this.mainCharacter = mainCharacter;
}

Manga.prototype.mc = function() {
  return `${this.mainCharacter}.`
}

Manga.prototype = Object.create(Book.prototype);
Manga.prototype.constructor = Manga;

const Noblesse = new Manga('Nobleese', 'X', 350, 'cover', 'Rai');

