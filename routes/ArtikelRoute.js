const express = require('express');
const router = express.Router();

// Models
const Artikel = require('../models/Artikel.js');

// Create Artikel
router.post('/', async (req,res) => {
    const addArtikel = new Artikel({
        judul: req.body.judul,
        penulis: req.body.penulis,
        isi: req.body.isi,
        kategori: req.body.kategori,
    });

    try {
        const artikel = await addArtikel.save();
        res.status(200);
        res.json({
            message: 'Success add artikel',
            code: 200,
            data: artikel
        });
    } catch(error) {
        res.status(400);
        res.json({
            message: 'Failed to add artikel',
            code: 400,
        });
    }

});


// Get One Artikel
router.get('/:id',async (req,res) => {

    try {
        
        res.status(200)
        const artikel = await Artikel.findById(req.params.id);
        res.json({
            message: 'Artikel Found',
            code: 200,
            artikel: artikel
        });
    } catch (error) {
        res.status(400)
        res.json({
            message: 'Gagal menemukan artikel',
            code: 400
        });
    }

});

// ALl Artikel
router.get('/',async (req,res) => {

    try {
        res.status(200);
        const artikel = await Artikel.find();
        res.json({
            message: 'Data artikel',
            code: 200,
            artikel: artikel
        });
    } catch (error) {
        res.status(404);
        res.json({
            message: 'Artikel not found',
            code: 200,
            artikel: null
        });
    }

});

// Update Artikel
router.put('/:id',async (req,res) => {

    try {
        
        res.status(200)
        const updateArtikel = await Artikel.updateOne({
            _id: req.params.id
        },{
            $set: {
                judul: req.body.judul,
                penulis: req.body.penulis,
                isi: req.body.isi,
                kategori: req.body.kategori,
            }
        }); 
        const artikel = await Artikel.findById(req.params.id);
        res.json({
            message: 'Berhasil mengubah artikel',
            code: 200,
            artikel: artikel
        });

    } catch (error) {
        res.status(400)
        res.json({
            message: 'Gagal mengubah artikel',
            code: 400
        });
    }

});


// Delete Artikel
router.delete('/:id',async (req,res) => {

    try {
        res.status(200);
        const artikel = Artikel.findById(req.body.id);
        const deleteArtikel = await Artikel.deleteOne({ _id: req.params.id });
        res.json({
            message: 'Berhasil menghapus artikel',
            code: 200
        });
    } catch (error) {
        res.status(400)
        res.json({
            message: 'Gagal menghapus artikel',
            code: 400
        });
    }

});

module.exports = router;
