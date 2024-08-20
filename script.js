const observeForShowAndHidden = new IntersectionObserver((elements) => {
    elements.forEach((el) => {
        if (el.isIntersecting) {
            el.target.classList.add('show');
        } else {
            el.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elmt) => observeForShowAndHidden.observe(elmt));
// One small issue, smaller screens don't like this... At all...