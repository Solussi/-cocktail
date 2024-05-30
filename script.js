function nextQuestion(currentQuestionIndex) {
    const currentQuestion = document.getElementById(`question${currentQuestionIndex}`);
    const nextQuestion = document.getElementById(`question${currentQuestionIndex + 1}`);

    if (validateAnswer(currentQuestion)) {
        currentQuestion.classList.add('hidden');
        nextQuestion.classList.remove('hidden');
    } else {
        alert('답변을 선택해주세요.');
    }
}

function validateAnswer(questionElement) {
    const inputs = questionElement.querySelectorAll('input[type="radio"]');
    for (let input of inputs) {
        if (input.checked) {
            return true;
        }
    }
    return false;
}

function setResultHeader(resultType) {
    const resultHeader = document.getElementById("headerText");
    let headerText = "";

    switch(resultType) {
        case 'A':
            headerText = '마가리타 (Margarita)';
            break;
        case 'B':
            headerText = '';
            break;
        case 'C':
            headerText = '';
            break;
        case 'AB':
            headerText = '';
            break;
        case 'AC':
            headerText = '';
            break;
        case 'BC':
            headerText = '';
            break;
    }

    resultHeader.innerText = headerText;
}

function showResult() {
    const form = document.getElementById('quizForm');
    if (!validateAnswer(document.getElementById('question5'))) {
        alert('답변을 선택해주세요.');
        return;
    }

    const resultDiv = document.getElementById('result');
    const resultImage = document.getElementById('resultImage');
    const resultText = document.getElementById('resultText');
    const resultHeader = document.getElementById("headerText");

    let scoreA = 0;
    let scoreB = 0;
    let scoreC = 0;

    const answers = new FormData(form);

    for (let [key, value] of answers.entries()) {
        if (value === 'A') scoreA++;
        else if (value === 'B') scoreB++;
        else if (value === 'C') scoreC++;
    }

    let resultType;
    if (scoreA >= 2 && scoreB >= 2) {
        resultType = 'AB';
    } else if (scoreA >= 2 && scoreC >= 2) {
        resultType = 'AC';
    } else if (scoreB >= 2 && scoreC >= 2) {
        resultType = 'BC';
    } else if (scoreA > scoreB && scoreA > scoreC) {
        resultType = 'A';
    } else if (scoreB > scoreA && scoreB > scoreC) {
        resultType = 'B';
    } else if (scoreC > scoreA && scoreC > scoreB) {
        resultType = 'C';
    }

    setResultHeader(resultType);
    switch(resultType) {
        case 'A':
            resultImage.src = 'images/typeA.jpg';
            resultText.innerText = '열정적이고 활발한 당신에게 어울리는 신선하고 활기찬 맛! 청량함과 달콤함이 멋진 하루를 보낸 당신에게 어울리는 보상이에요!';
            break;
        case 'B':
            resultImage.src = 'images/typeB.jpg';
            resultText.innerText = '';
            break;
        case 'C':
            resultImage.src = 'images/typeC.jpg';
            resultText.innerText = '';
            break;
        case 'AB':
            resultImage.src = 'images/typeAB.jpg';
            resultText.innerText = '';
            break;
        case 'AC':
            resultImage.src = 'images/typeAC.jpg';
            resultText.innerText = '';
            break;
        case 'BC':
            resultImage.src = 'images/typeBC.jpg';
            resultText.innerText = '';
            break;
    }

    form.classList.add('hidden');
    resultDiv.classList.remove('hidden');
}
