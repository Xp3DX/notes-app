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
  var text=iText.value;
  var title= iTitle.value;
  var listNote= listWindow.querySelector('._'+viewNT);
  baseNote[viewNT-1]['title']=title;
  baseNote[viewNT-1]['text']=text;
  listNote.textContent=title;
  
    
}
//Функция удаления текущей заметки
function delNote(){
 
}
//Функция открытия заметки
function openNote(event){
   var num=parseInt(event.target.className.slice(1,event.target.className.length))-1;
   iTitle.value=baseNote[num]["title"];
   iText.value=baseNote[num]["text"];
   viewNT=num+1;
}

//Добаление заметки на основе текущих данных
function addNote(){
    var newNote= document.createElement("li");
    var title=iTitle.value;
    var text=iText.value;
    var note=new Note(title, text);
    newNote.textContent = title;
    newNote.className='_'+baseNote.push(note);
    newNote.onclick=function(){openNote(event);};
    listWindow.appendChild(newNote);
    viewNT=parseInt(newNote.className.slice(1,newNote.className.length));
}

//Функция инцилизации программы
function Program(){

    btAdd.onclick= addNote; 
    btSave.onclick = saveNote;
    btDel.onclick= delNote;
}

Program();


//3)TODO: переделать функцию удалёния