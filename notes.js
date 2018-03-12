console.log("Starting notes.js");

var addNote = (title, body) => {
    console.log(`Book Title : ${title} and Description: ${body}`);
};

var getList = () => {
    console.log("Getting list of all the notes");
};

var readNote = (title) => {
    console.log("readNote", title);
};

var removeNote = (title) => {
    console.log("Remove note:", title)
};

module.exports =  {
    addNote,
    getList,
    readNote,
    removeNote

};
