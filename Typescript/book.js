"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getNPages = function () {
        return this.nPages;
    };
    Book.prototype.setNPages = function (nPages) {
        this.nPages = this.nPages;
    };
    Book.prototype.getISBN = function () {
        return this.isbn;
    };
    Book.prototype.setISBN = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "Title - ".concat(this.title, "\nNumber of Pages - ").concat(this.nPages, "\nISBN - ").concat(this.isbn, "\nAuthor - ").concat(this.author, "\nEditorial - ").concat(this.editorial);
    };
    return Book;
}());
exports.Book = Book;
