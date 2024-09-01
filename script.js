const observeForShowAndHidden = new IntersectionObserver((elements) => {
    console.log("Suki sucks")
    elements.forEach((el) => {
        if (el.isIntersecting) {
            if (el.target.id != "scrollHint") {
                el.target.classList.add('show');
            } else {
                setTimeout(() => {
                    console.log("I fucking love you")
                    scrollHint.classList.add('show');
                    
                }, 2500);
            }

        } else {
            el.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
const scrollHint = document.getElementById('scrollHint');
hiddenElements.forEach((elmt) => observeForShowAndHidden.observe(elmt));

