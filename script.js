// Select all elements with the 'scrollHint' class
const scrollHints = document.querySelectorAll('.scrollHint');

// Create an IntersectionObserver instance
const observeForShowAndHidden = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains('scrollHint')) {
                entry.target.classList.add('show');
            } else {
                // If the element is of class 'scrollHint', wait 2.5 seconds before adding 'show'
                setTimeout(() => {
                    scrollHints.forEach((hint) => {
                        hint.classList.add('show');
                    });
                }, 3000);
            }
        } else {
            // Remove 'show' class when the element is not intersecting
            entry.target.classList.remove('show');
        }
    });
});

// Observe all elements with the 'hidden' class
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observeForShowAndHidden.observe(element));
