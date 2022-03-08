const NotesModel = require('./notesModel');
const NotesView = require('./notesView');

const model = new NotesModel();
const view = new NotesView(model);

console.log(model.getNotes());

console.log('The notes app is running');

model.addNote('This is an example note');
view.displayNotes();