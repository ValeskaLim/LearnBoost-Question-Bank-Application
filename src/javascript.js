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
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
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
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
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

let progressBiology = 0;
let progressKimia = 0;
let progressEnglish = 0;
let progressFisika = 0;
let progressMatematika = 0;

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
        const subject = getSubjectValue();
        
        if(subject === 'biology'){
            progressBiology++;
            saveProgress();
        } else if(subject === 'kimia'){
            progressKimia++;
            saveProgress();
        } else if(subject === 'fisika'){
            progressFisika++;
            saveProgress();
        } else if(subject === 'english'){
            progressEnglish++;
            saveProgress();
        } else if(subject === 'matematika'){
            progressMatematika++;
            saveProgress();
        }

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

function saveProgress() {
    sessionStorage.setItem('progressBiology', progressBiology);
    sessionStorage.setItem('progressFisika', progressFisika);
    sessionStorage.setItem('progressMatematika', progressMatematika);
    sessionStorage.setItem('progressKimia', progressKimia);
    sessionStorage.setItem('progressEnglish', progressEnglish);
}

function loadProgress() {
    const savedProgressBiology = sessionStorage.getItem('progressBiology');
    const savedProgressFisika = sessionStorage.getItem('progressFisika');
    const savedProgressMatematika = sessionStorage.getItem('progressMatematika');
    const savedProgressKimia = sessionStorage.getItem('progressKimia');
    const savedProgressEnglish = sessionStorage.getItem('progressEnglish');

    if (savedProgressBiology !== null) {
        progressBiology = parseInt(savedProgressBiology, 10);
    }
    if (savedProgressFisika !== null) {
        progressFisika = parseInt(savedProgressFisika, 10);
    }
    if (savedProgressMatematika !== null) {
        progressMatematika = parseInt(savedProgressMatematika, 10);
    }
    if (savedProgressKimia !== null) {
        progressKimia = parseInt(savedProgressKimia, 10);
    }
    if (savedProgressEnglish !== null) {
        progressEnglish = parseInt(savedProgressEnglish, 10);
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

function updateProgressText(){
    document.getElementById('progressBiology').innerHTML = (progressBiology / 25) * 100 + "%";
    document.getElementById('progressKimia').innerHTML = (progressKimia / 25) * 100 + "%";
    document.getElementById('progressFisika').innerHTML = (progressFisika / 25) * 100 + "%";
    document.getElementById('progressMatematika').innerHTML = (progressMatematika / 25) * 100 + "%";
    document.getElementById('progressEnglish').innerHTML = (progressEnglish / 25) * 100 + "%";
}

function updateProgressCircle() {
    let progressValue = 0;

    const subject = getSubjectValue();
    if(subject === 'biology')
        progressValue = progressBiology;
    else if (subject === 'kimia')
        progressValue = progressKimia;
    else if (subject === 'english')
        progressValue = progressEnglish;
    else if (subject === 'fisika')
        progressValue = progressFisika;
    else if (subject === 'matematika')
        progressValue = progressMatematika;
    if(subject === 'latihanSoal'){
        progressValue = (progressBiology + progressKimia + progressEnglish + progressFisika + progressMatematika);
    }

    const progressValueElement = document.getElementById('progress-value');
    const progressCircle = document.querySelector('.progress-circle');
    progressValueElement.textContent = ((progressValue / 125) * 100).toFixed(1) + "%";
    if(subject !== 'latihanSoal')
        progressValueElement.textContent = ((progressValue / 25) * 100)+ "%";
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
    const progressBiologyBar = document.getElementById('progressBiologyBar');
    const progressKimiaBar = document.getElementById('progressKimiaBar');
    const progressMatematikaBar = document.getElementById('progressMatematikaBar');
    const progressFisikaBar = document.getElementById('progressFisikaBar');
    const progressEnglishBar = document.getElementById('progressEnglishBar');

    
    const progressBiologyPercentage = (progressBiology / 25) * 100;
    const progressFisikaPercentage = (progressFisika / 25) * 100;
    const progressEnglishPercentage = (progressEnglish / 25) * 100;
    const progressKimiaPercentage = (progressKimia / 25) * 100;
    const progressMatematikaPercentage = (progressMatematika / 25) * 100;

    progressBiologyBar.style.width = `${progressBiologyPercentage}%`;
    progressFisikaBar.style.width = `${progressFisikaPercentage}%`;
    progressEnglishBar.style.width = `${progressEnglishPercentage}%`;
    progressKimiaBar.style.width = `${progressKimiaPercentage}%`;
    progressMatematikaBar.style.width = `${progressMatematikaPercentage}%`;


    progressBiologyBar.nextElementSibling.textContent = progressBiologyPercentage + '%';
    progressFisikaBar.nextElementSibling.textContent = progressFisikaPercentage + '%';
    progressEnglishBar.nextElementSibling.textContent = progressEnglishPercentage + '%';
    progressKimiaBar.nextElementSibling.textContent = progressKimiaPercentage + '%';
    progressMatematikaBar.nextElementSibling.textContent = progressMatematikaPercentage + '%';
}

function getSubjectValue(){
    const subject = document.getElementById('subject').value;
    return subject;
}

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateProgressText();
});

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateProgressBars();
});

document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateProgressCircle();
    fetchQuestions();
});