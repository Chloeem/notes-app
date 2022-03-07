const NotesModel = require('./notesModel')

describe('NotesModel', () => {
  it('Should start with an empty array', () => {
    const model = new NotesModel();

    expect(model.getNotes()).toEqual([]);
  });

  it('Adds notes to an array', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');

    expect(model.getNotes()).toEqual(['Buy milk']);
  });

  it('Resets the array when called', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.reset();

    expect(model.getNotes()).toEqual([]);
  });
});