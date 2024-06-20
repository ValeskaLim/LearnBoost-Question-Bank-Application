const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/assets', express.static(path.join(__dirname, '../assets')));
router.use(express.static(path.join(__dirname, '../src')));

router.get('', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/latihan-soal.html'));
});

const pageMappings = {
    'Biopage': 'Biopage.html',
    'Chempage': 'Chempage.html',
    'Engpage': 'Engpage.html',
    'Mathpage': 'Mathpage.html',
    'Phypage': 'Phypage.html',
    'latihan_bacteria_archeabacteria_1': 'latihan_bacteria_archeabacteria_1.html',
    'latihan_protista_1': 'latihan_protista_1.html',
    'latihan_virus_1': 'latihan_virus_1.html',
    'latihan_keanekaragaman_hayati_1':'latihan_keanekaragaman_hayati_1.html',
    'latihan_klasifikasi_makhluk_hidup_1': 'latihan_klasifikasi_makhluk_hidup_1.html',
    'latihan_teori_atom_1': 'latihan_teori_atom_1.html',
    'latihan_struktur_atom_kuantum_1': 'latihan_struktur_atom_kuantum_1.html',
    'latihan_senyawa_persamaan_reaksi_1': 'latihan_senyawa_persamaan_reaksi_1.html',
    'latihan_hukum_dasar_kimia_1': 'latihan_hukum_dasar_kimia_1.html',
    'latihan_ikatan_kimia_1': 'latihan_ikatan_kimia_1.html',
    'latihan_present_perfect_tense_1': 'latihan_present_perfect_tense_1.html',
    'latihan_past_continous_tense_1': 'latihan_past_continous_tense_1.html',
    'latihan_simple_future_tense_1': 'latihan_simple_future_tense_1.html',
    'latihan_past_perfect_tense_1': 'latihan_past_perfect_tense_1.html',
    'latihan_present_continous_tense_1': 'latihan_present_continous_tense_1.html',
    'latihan_pgl_1': 'latihan_pgl_1.html',
    'latihan_persamaan_tidaksamaan_linear_1': 'latihan_persamaan_tidaksamaan_linear_1.html',
    'latihan_persamaan_kuadrat_1': 'latihan_persamaan_kuadrat_1.html',
    'latihan_polynomial_1': 'latihan_polynomial_1.html',
    'latihan_trigonometri_1': 'latihan_trigonometri_1.html',
    'latihan_gerak_lurus_1': 'latihan_gerak_lurus_1.html',
    'latihan_parabola_1': 'latihan_parabola_1.html',
    'latihan_hukum_newton_gravitasi_1': 'latihan_hukum_newton_gravitasi_1.html',
    'latihan_momentum_1': 'latihan_momentum_1.html',
    'latihan_getaran_harmonis_1': 'latihan_getaran_harmonis_1.html'
};

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
