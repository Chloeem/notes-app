class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(note) {
    return this.notes.push(note);
  }

  reset() {
    return this.notes = [];
  }
}

module.exports = NotesModel;