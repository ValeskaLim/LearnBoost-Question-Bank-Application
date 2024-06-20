const express = require('express');
const path = require('path');
const router = express.Router();

// Serve static assets
router.use('/assets', express.static(path.join(__dirname, '../assets')));
router.use(express.static(path.join(__dirname, '../src')));

// Serve latihan-soal.html at the base route
router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/latihan-soal.html'));
});

// Mapping of latihansoal pages and detail pages
const pageMappings = {
    'Biopage': 'Biopage.html',
    'Chempage': 'Chempage.html',
    'Engpage': 'Engpage.html',
    'Mathpage': 'Mathpage.html',
    'Phypage': 'Phypage.html',
    'latihan_protista_1': 'latihan_protista_1.html',
    'latihan_klasifikasi_makhluk_hidup_1': 'latihan_klasifikasi_makhluk_hidup_1.html',
    'latihan_persamaan_tidaksamaan_linear_1': 'latihan_persamaan_tidaksamaan_linear_1.html'
};

// Serve specific pages based on the latihansoalPage parameter
router.get('/:latihansoalPage', (req, res) => {
    const pageName = req.params.latihansoalPage;
    console.log(`Primary page request: ${pageName}`);
    const filePath = pageMappings[pageName];

    if (filePath) {
        res.sendFile(path.join(__dirname, `../src/${filePath}`), (err) => {
            if (err) {
                console.error(err);
                res.status(404).send('Page not found');
            }
        });
    } else {
        res.status(404).send('Page not found');
    }
});

// Serve specific detail pages directly based on the detailPage parameter
router.get('/:latihansoalPage/:detailPage', (req, res) => {
    const detailPage = req.params.detailPage;
    const latihansoalPage = req.params.latihansoalPage;
    console.log(`Detail page request: ${detailPage}`);
    const filePath = pageMappings[detailPage];

    if (filePath) {
        res.sendFile(path.join(__dirname, `../src/${filePath}`), (err) => {
            if (err) {
                console.error(err);
                res.status(404).send('Detail page not found');
            }
        });
    } else {
        res.status(404).send('Detail page not found');
    }
});

module.exports = router;
