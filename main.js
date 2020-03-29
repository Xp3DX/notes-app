//Windows
const listWindow = document.querySelector('.listWindow');//Window for note's list
//Editor's elements
const iTitle = document.querySelector('#iTitle');//Textare for note's title
const iText = document.querySelector('#iText');//Textare for note's text
//Instrument's elements
const btSave = document.querySelector('.SAVE'); //Button 'Save'
const btAdd = document.querySelector('.ADD');//Button 'Add'
const btDel = document.querySelector('.DEL');//Button 'Delete'
//Search's elements
const btSearch = document.querySelector('.SEARCHBT');//Button 'Search'
const iSearch = document.querySelector('#iSearch');//Input for note's search

var viewNT; //ID Last Note
var baseNote = []; //Data Base for Notes

//Object Notes
function Note(title, text) {
    this.title = title;//Title note
    this.text = text;//Text note
}

//Save current note
function saveNote() {
    var text = iText.value;
    var title = iTitle.value;
    var listNote = listWindow.querySelector('._' + viewNT);
    baseNote[viewNT - 1]['title'] = title;
    baseNote[viewNT - 1]['text'] = text;
    listNote.textContent = title;


}
//Delete current note
function delNote() {
    iText.value = '';
    iTitle.value = '';
    listWindow.removeChild(listWindow.querySelector('._' + viewNT));
    delete baseNote[viewNT - 1];
    viewNT = 0;
}
//Open note in listWindow
function openNote(event) {
    var num = parseInt(event.target.className.slice(1, event.target.className.length)) - 1;
    iTitle.value = baseNote[num]["title"];
    iText.value = baseNote[num]["text"];
    viewNT = num + 1;
}

//Search notes by title
function searchNote(title) {

}

//Add new note
function addNote() {
    var newNote = document.createElement("li");
    var title = iTitle.value;
    var text = iText.value;
    var note = new Note(title, text);
    newNote.textContent = title;
    newNote.className = '_' + baseNote.push(note);
    newNote.onclick = function () { openNote(event); };
    listWindow.appendChild(newNote);
    viewNT = parseInt(newNote.className.slice(1, newNote.className.length));
}

//Start programm and initialization buttons events
function Program() {

    btAdd.onclick = addNote;
    btSave.onclick = saveNote;
    btDel.onclick = delNote;
}

Program();

