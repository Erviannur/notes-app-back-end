const { 
    addNoteHandler,         //Menyimpan Catatan
    getAllNotesHandler,     //Same-Origin Policy
    getNoteByIdHandler,     //Menampilkan Catatan
    editNoteByIdHandler,    //Mengubah Catatan
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    //Menyimpan Catatan
    {
        method: 'POST',
        path: '/notes',
        handler: addNoteHandler,
    },

    //Same-Origin Policy
    {
        method: 'GET',
        path: '/notes',
        handler: getAllNotesHandler,
    },

    //Menampilkan Catatan
    {
        method: 'GET',
        path: '/notes/{id}',
        handler: getNoteByIdHandler,
    },

    //Mengubah Catatan
    {
        method: 'PUT',
        path: '/notes/{id}',
        handler: editNoteByIdHandler,
    },

    //Menghapus Catatan
    {
        method: 'DELETE',
        path: '/notes/{id}',
        handler: deleteNoteByIdHandler,
     },

];
   
  module.exports = routes;