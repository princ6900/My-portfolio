window.addEventListener('DOMContentLoaded', () => {
    const feedbackLink = document.getElementById('feedback-link');
    const feedbackPopup = document.getElementById('feedback-popup');
    const closeBtn = document.getElementById('close-btn');

    feedbackLink.addEventListener('click', () => {
        feedbackPopup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        feedbackPopup.style.display = 'none';
    });
});
