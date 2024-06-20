function getZoomLevel() {
    return Math.round(window.devicePixelRatio * 100);
}

function checkZoomLevel() {
    const zoomLevel = getZoomLevel();
    const menuBox = document.getElementById('menu-box');
    const content = document.querySelector('.content');

    if (zoomLevel >= 200) {
        menuBox.classList.add('fade-out');
    } else {
        menuBox.classList.remove('fade-out');
    }
}

window.addEventListener('resize', checkZoomLevel);
window.addEventListener('load', checkZoomLevel);

document.addEventListener('DOMContentLoaded', function () {
    fetch('/user-grade')
        .then(response => response.json())
        .then(data => {
            if (data.grade) {
                document.querySelector('#navbar-grade').textContent = data.grade + 'th Grade';
                document.querySelector('#body-grade').textContent = data.grade + 'th Grade';
            } else {
                document.querySelector('#navbar-grade').textContent = 'NULL';
                document.querySelector('#body-grade').textContent = 'NULL';
            }
        })
        .catch(error => {
            console.error('Error fetching grade:', error);
            document.querySelector('#grade').textContent = 'Error loading grade';
        });

    fetch('/user-name')
        .then(response => response.json())
        .then(data => {
            if (data.username) {
                document.querySelector('#names').textContent = data.username.toUpperCase();
            } else {
                document.querySelector('#names').textContent = 'NULL';
            }
        })
        .catch(error => {
            console.error('Error fetching name:', error);
            document.querySelector('#names').textContent = 'Error loading name';
        });

    updateProgressCircle();
    fetchQuestions();
});

function toggleDropdown(menuId) {
    const dropdownMenu = document.getElementById(menuId);
    dropdownMenu.classList.toggle('hidden');
}

let questions = [];
let currentQuestionIndex = 0;

async function fetchQuestions() {
    const subchapterName = document.getElementById('subchapterName').value;
    console.log('Subchapter Name:', subchapterName);
    const response = await fetch(`/questions?subchapter_name=${encodeURIComponent(subchapterName)}`);
    if (response.ok) {
        questions = await response.json();
        console.log('Fetched Questions:', questions);
        displayQuestion();
    } else {
        console.error('Error fetching questions');
    }
}

function displayQuestion() {
    if (questions.length === 0) {
        console.error('No questions available');
        return;
    }

    const question = questions[currentQuestionIndex];
    console.log('Displaying Question:', question);

    document.getElementById('questionLabel').textContent = question.question_text;
    question.options.forEach((option, index) => {
        document.getElementById(`option${index + 1}Label`).textContent = option.option_text;
        document.getElementById(`option${index + 1}`).value = option.option_id;
    });
    document.querySelectorAll('input[name="answer"]').forEach(radio => radio.checked = false);

    document.getElementById('prevButton').classList.toggle('hidden', currentQuestionIndex === 0);
    document.getElementById('nextButton').textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
    document.getElementById('errorContainer').classList.add('hidden');

    MathJax.typeset();
}

async function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const selectedOptionId = parseInt(selectedOption.value);
    const questionId = questions[currentQuestionIndex].question_id;

    const response = await fetch('/check-answer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question_id: questionId, selected_option_id: selectedOptionId })
    });
    const result = await response.json();

    if (result.correct) {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            finishQuiz();
        }
    } else {
        document.getElementById('errorContainer').classList.remove('hidden');
    }
}

function finishQuiz() {
    window.location.href = '/latihan_soal';
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function updateProgressCircle() {
    const progressValueElement = document.getElementById('progress-value');
    const progressCircle = document.querySelector('.progress-circle');
    const progressPercentage = parseInt(progressValueElement.textContent);

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progressPercentage / 100) * circumference;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = offset;
    progressCircle.style.transform = 'rotate(-90deg)';
    progressCircle.style.transformOrigin = '50% 50%';
}

function updateProgressBars() {
    const progressElements = document.querySelectorAll('.progress-bar');
    progressElements.forEach((progressElement) => {
        const progressValueElement = progressElement.nextElementSibling;
        const progressPercentage = parseInt(progressValueElement.textContent);
        progressElement.style.width = progressPercentage + '%';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateProgressBars();
    fetchQuestions();
});