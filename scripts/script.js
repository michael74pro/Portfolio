const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block"
        menu.style.display = "none"
        crossIcon.style.display = "none"
    }
    else {
        crossIcon.style.display = "inline-block"
        hamIcon.style.display = "none"
        menu.style.display = "block"
    }
});

const btnCommon = document.getElementById('common');
const btnGhost = document.getElementById('ghost');
const btnSubmit = document.getElementById('submit');

function handleBtnCommonClick() {
    alert('Ваше предложение о найме отправлено!');
}
function handleBtnGhostClick() {
    alert('Резюме сохранено!');
}
function handleBtnSubmitClick() {
    alert('Ваше сообщение отправлено!');
}

btnCommon.addEventListener('click', handleBtnCommonClick);
btnGhost.addEventListener('click', handleBtnGhostClick);
btnSubmit.addEventListener('click', handleBtnSubmitClick);