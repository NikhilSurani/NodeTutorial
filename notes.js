console.log("Starting notes.js");

const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-json.json');
        return JSON.parse(notesString);

    } catch(e){
        return [];

    }    

};

var saveNote = (notes) => {
    fs.writeFileSync("notes-json.json", JSON.stringify(notes)); 
};

var addNote = (title, body) => {

    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNote = notes.filter((note) => note.title === title);

    if(duplicateNote.length === 0){
        notes.push(note);    
        saveNote(notes);
        return note;        
    }    
    // console.log(`Book Title : ${title} and Description: ${body}`);
};

var getList = () => {
    console.log("Getting list of all the notes");
};

var readNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title.toLowerCase() === title.toLowerCase());
    return filterNotes[0];
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterNotes = notes.filter((note) => note.title.toLowerCase() !== title.toLowerCase());
    saveNote(filterNotes);

    return notes.length !== filterNotes.length;    
};

var logNote = (note) => {    
    console.log("-------");
    console.log(`Title : ${note.title}`);
    console.log(`Body : ${note.body}`);
};

module.exports =  {
    addNote,
    getList,
    readNote,
    removeNote,
    logNote,

};
