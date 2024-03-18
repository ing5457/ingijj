function playTopAnimations() {
    const animatedTopElements = document.querySelectorAll(".anim-top");

    animatedTopElements.forEach((animatedText, index) => {
        animatedText.style.opacity = "0";
        animatedText.style.transform = "translateY(50px)";
        animatedText.style.transitionDelay = `${300 + index * 5}ms`; // Задержка для каждого элемента
    });

    requestAnimationFrame(() => {
        animatedTopElements.forEach(animatedText => {
            animatedText.style.opacity = "1";
            animatedText.style.transform = "translateY(0)";
        });
    });
}

function playRightAnimations() {
    const animatedRightElements = document.querySelectorAll(".anim-right");

    animatedRightElements.forEach((animatedText, index) => {
        animatedText.style.opacity = "0";
        animatedText.style.transform = "translateX(-50px)";
        animatedText.style.transitionDelay = `${700 + index * 5}ms`; // Задержка для каждого элемента
    });

    requestAnimationFrame(() => {
        animatedRightElements.forEach(animatedText => {
            animatedText.style.opacity = "1";
            animatedText.style.transform = "translateX(0)";
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    playTopAnimations();
    playRightAnimations();
});

function openTab(tabId) {
    // Скрыть все вкладки
    document.querySelectorAll('.tab-content').forEach(tabContent => {
        tabContent.style.display = 'none';
    });

    // Показать выбранную вкладку
    document.getElementById(tabId).style.display = 'block';

    // Плавно прокрутить страницу вверх
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });

    // Воспроизвести анимации
    playTopAnimations();
    playRightAnimations();
}

function navigate(direction) {
    const tabs = document.querySelectorAll('.tab-content');
    let currentTabId;

    tabs.forEach((tab, index) => {
        if (tab.style.display === 'block') {
            currentTabId = tab.id;
        }
    });

    let currentIndex = parseInt(currentTabId.replace('tab', ''), 10);
    let newIndex;

    if (direction === 'next') {
        newIndex = currentIndex < tabs.length ? currentIndex + 1 : currentIndex;
    } else if (direction === 'back') {
        newIndex = currentIndex > 1 ? currentIndex - 1 : currentIndex;
    }

    openTab('tab' + newIndex);
}

// Установить вкладку "tab1" по умолчанию
openTab('tab1');


function toggleTabs() {
    var tabs = document.querySelector('.tabs');
    tabs.style.display = tabs.style.display === 'none' ? 'flex' : 'none';
}