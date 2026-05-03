const translations = {
    en: {
        footerRights: "© 2026 HadyPro — All rights reserved",
        devBy: "Developed by",
        langBtn: "AR", 
        dir: "ltr",
        lang: "en"
    },
    ar: {
        footerRights: "© 2026 هادي برو — جميع الحقوق محفوظة",
        devBy: "تم التطوير بواسطة",
        langBtn: "EN", 
        dir: "rtl",
        lang: "ar"
    }
};

const texts = {
    en: "Content Creator - Streamer",
    ar: "صانع محتوى - ستريمر"
};

let currentLang = 'en';
let isLightMode = false;
let index = 0;
let isDeleting = false;

const pauseTime = 3000;

const langBtn = document.getElementById('lang-btn');
const themeBtn = document.getElementById('theme-btn');
const typeText = document.getElementById('type-text');
const footerRights = document.getElementById('footer-rights');
const devBy = document.getElementById('dev-by');
const mainHtml = document.getElementById('main-html');
const body = document.body;

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    const t = translations[currentLang];

    footerRights.innerText = t.footerRights;
    devBy.innerText = t.devBy;
    document.getElementById('lang-text').innerText = t.langBtn;

    mainHtml.dir = t.dir;
    mainHtml.lang = t.lang;

    index = 0;
    isDeleting = false;
    typeText.innerText = "";
});

themeBtn.addEventListener('click', () => {
    isLightMode = !isLightMode;

    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    if (isLightMode) {
        body.classList.add('light-mode');
        themeIcon.className = 'fa-solid fa-moon';
        themeText.innerText = 'Dark';
    } else {
        body.classList.remove('light-mode');
        themeIcon.className = 'fa-solid fa-sun';
        themeText.innerText = 'Light';
    }
});

function typeEffect() {
    const currentText = texts[currentLang];

    if (!isDeleting) {
        typeText.innerText = currentText.substring(0, index);
        index++;

        if (index > currentText.length) {
            isDeleting = true;
            index = currentText.length;
            setTimeout(typeEffect, pauseTime);
            return;
        }

        setTimeout(typeEffect, 100);
    } 
    else {
        typeText.innerText = currentText.substring(0, index);
        index--;

        if (index < 0) {
            isDeleting = false;
            index = 0;
            setTimeout(typeEffect, 500);
            return;
        }

        setTimeout(typeEffect, 50);
    }
}

typeEffect();