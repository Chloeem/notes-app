const NotesModel = require('./notesModel');

class NotesView {
  constructor(model) {
    this.model = model; 
    // dependency inject the notesModel class into the view class
    this.mainContainerEl = document.querySelector('#main-container');
    // select the main-container id inside the html
  }

  displayNotes() {
    const notes = this.model.getNotes();

    notes.forEach(note => {
      const noteEl = document.createElement('div');
      // create the div 
      noteEl.innerText = note;
      // add the note to the innerText
      noteEl.className = 'note';
      // add the class name 'note' to the css selector
      this.mainContainerEl.append(noteEl);
      // append the note to the main container
    })
  }
}
module.exports = NotesView;