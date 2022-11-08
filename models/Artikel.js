const mongoose = require('mongoose');

const artikelSchema = mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    },
    isi: {
        type: String,
        required: true
    }
    ,
    kategori: {
        type: String,
        required: true,
    },
    tanggalDibuat: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Artikel', artikelSchema);