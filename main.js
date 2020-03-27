const listWindow= document.querySelector('.listWindow');
const iTitle= document.querySelector('#iTitle');
const iText = document.querySelector('#iText');
const btSave = document.querySelector('.SAVE');
const btAdd= document.querySelector('.ADD');
const btDel = document.querySelector('.DEL');

var viewNT; //Заголовок последней заметки
var baseNote=[]; //База данных заметок

//Объект заметки
function Note(title,text){
    this.title=title;
    this.text= text;
}

//Функция сохранения текущей заметки
function saveNote(){
  
    
}
//Функция удаления текущей заметки
function delNote(){
 
}
//Функция открытия заметки
function openNote(event){

}

//Добаление заметки на основе текущих данных
function addNote(){

}

//Функция инцилизации программы
function Program(){

    btAdd.onclick= addNote; 
    btSave.onclick = saveNote;
    btDel.onclick= delNote;
}

Program();


//3)TODO: переделать функцию удалёния