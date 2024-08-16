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


const observeForWhichBox = new IntersectionObserver((elements) => {
    elements.forEach((el) => {
        const target = el.target;

        // Check if the element has already animated
        const hasAnimated = target.dataset.animated === 'true';

        if (el.isIntersecting) {
            // is it interseting?
            if (!hasAnimated) {
                // if it has NOT animated already
                if (target.classList.contains("box1")) {
                    // if the target is box1
                    // add the following and remove the reverse one (in case this was called before)
                    target.classList.add('translatingLeft');
                    target.classList.remove('reverseTranslatingLeft');
                }
                if (target.classList.contains("box2")) {
                    // if the target is box1
                    // add the following and remove the reverse one (in case this was called before)
                    target.classList.add('translatingRight');
                    target.classList.remove('reverseTranslatingRight');
                }
                // set the dataset.animated to true
                target.dataset.animated = 'true'; // Mark as animated
            }
            // if it HAS animated (just did)
        } else {
            if (hasAnimated) {
                if (target.classList.contains("box1")) {
                    // if the target is box1
                    target.classList.remove('translatingLeft');
                    // pretty much just do the opposite of the top
                    target.classList.add('reverseTranslatingLeft');
                }
                if (target.classList.contains("box2")) {
                    // so that it comes back to the middle after you scroll by
                    target.classList.remove('translatingRight');
                    target.classList.add('reverseTranslatingRight');
                }
                // reset the flag to be false so that the top if case plays first!
                target.dataset.animated = 'false'; // Reset the flag
            }
        }
    });
});
// Target all boxes with the 'boxshit' class
const whichBox = document.querySelectorAll('.boxshit');
// For each of these elements with the 'boxshit' class, run the above function!
whichBox.forEach((elmt) => observeForWhichBox.observe(elmt));
