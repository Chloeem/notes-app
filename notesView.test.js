/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const View = require('./notesView');

describe('NotesView', () => {
  it('displays two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const model = new NotesModel();
    const view = new NoteView(model);
    model.addNote('Note 1');
    model.addNote('Note 2');

    view.displayNotes();

    expect(document.querySelectorAll('div.note').length).toEqual(2);
  });
});