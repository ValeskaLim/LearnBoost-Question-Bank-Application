const express = require('express');
const router = express.Router();
const con = require('../db');

router.get('/questions', (req, res) => {
    const subchapterName = req.query.subchapter_name;
    if (!subchapterName) {
        return res.status(400).send('subchapter_name is required');
    }
    const query = `
        SELECT q.question_id, q.question_text, o.option_id, o.option_text, s.subject_name 
        FROM questions q 
        JOIN options o ON q.question_id = o.question_id 
        JOIN subjects s ON q.subject_id = s.subject_id 
        WHERE s.subchapter_name = ? 
        ORDER BY q.question_id, o.option_id`;

    con.query(query, [subchapterName], (err, results) => {
        if (err) {
            console.error('Error fetching questions:', err);
            return res.status(500).send('Error fetching questions');
        }

        const questionsMap = {};
        results.forEach(row => {
            if (!questionsMap[row.question_id]) {
                questionsMap[row.question_id] = {
                    question_id: row.question_id,
                    question_text: row.question_text,
                    options: []
                };
            }
            questionsMap[row.question_id].options.push({
                option_id: row.option_id,
                option_text: row.option_text
            });
        });

        const questions = Object.values(questionsMap);
        res.json(questions);
    });
});

// Route to check answers
router.post('/check-answer', (req, res) => {
    const { question_id, selected_option_id } = req.body;
    const query = `
        SELECT correct_option_id 
        FROM answers 
        WHERE question_id = ?
    `;
    con.query(query, [question_id], (err, results) => {
        if (err) {
            console.error('Error checking answer:', err);
            res.status(500).send('Error checking answer');
            return;
        }

        if (results.length === 0) {
            res.status(404).send('Question not found');
            return;
        }

        const correct = results[0].correct_option_id === selected_option_id;
        res.json({ correct });
    });
});

module.exports = router;
