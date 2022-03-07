const model = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = notesModel;
    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      noteEl.innerText = note;
      noteEl.className = 'note';
      this.mainContainerEl.append(noteEl);
    })
  }
}
module.exports = NotesView;