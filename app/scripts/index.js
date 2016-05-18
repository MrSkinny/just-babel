import "../style/main.scss";
import $ from 'jquery';

class Message {
  constructor(author, content){
    this.author = author;
    this.content = content;
  }
  
  display(){
    return `${this.author} wrote: ${this.content}`;
  }
}

let testMsg = new Message("John", "We are transpiling down to ES5.");

$(function(){
  $('body').prepend('<div id="main"></div>');
  $('#main').text(testMsg.display());
  
});

