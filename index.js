const NotesModel = require('./notesModel');

const notes = new NotesModel();

console.log(notes.getNotes());

console.log('The notes app is running');