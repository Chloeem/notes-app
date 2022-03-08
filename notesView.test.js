/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesModel = require('./notesModel');
 const NotesView = require('./notesView');

describe('NotesView', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    // mocks what is inside the index.html file

    const model = new NotesModel();
    // creates an instance of the NotesModel class
    const view = new NotesView(model);
    // creates an instance of the NoteView class and injects the model var

    model.addNote('Note 1');
    model.addNote('Note 2');
    // calls the addNote method x2 in the model class to create two new notes

    view.displayNotes();
    // calls the displayNotes method in the view class

    expect(document.querySelectorAll('div.note').length).toEqual(2);
    // expect there to be two new notes created with the .note class and inside a new <div>
  });
});