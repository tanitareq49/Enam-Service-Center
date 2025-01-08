//navbar//
const navToggle = document.querySelector("#mobile-nav-toggle");
const navBar = document.querySelector("#primary-navigation");


navToggle.addEventListener("click", ()=>{
    const visibility = navBar.getAttribute("data-visible");

    if (visibility === 'false') {
        navBar.setAttribute("data-visible", "true");
        navBar.classList.remove("-translate-x-full");
        navToggle.innerHTML = `<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentcolor"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/>
                    </svg>`;
    } else {
        navBar.setAttribute("data-visible", "false");
        navBar.classList.add("-translate-x-full");
        navToggle.innerHTML = `<svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="currentcolor"><path d="M120-240v-66.67h520V-240H120Zm673.33-48L600.67-480.67l192-192L840-625.33 695.33-480.67l145.34 145.34L793.33-288ZM120-448v-66.67h400V-448H120Zm0-205.33V-720h520v66.67H120Z"/>
                </svg>`;
    }
});
//end//


//slider//
const slides = document.querySelectorAll('.slider');
let currentIndex = 0;
const totalSlides = slides.length;
const intervalTime = 2000;
let slideInterval;

const homeSection = document.querySelector('#home'); // Select the home section

function startSlideShow() {
    slideInterval = setInterval(showNextSlide, intervalTime);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

function showNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].scrollIntoView({ behavior: 'smooth' });
}

function updateActiveDot(slideIndex) {
    const dots = document.querySelectorAll('a[id^="dot-"]');
    dots.forEach((dot, index) => {
        dot.style.opacity = index === slideIndex ? "1" : "0.3";
    });
}

// Observer to check if the home section is in view
const options = {
    root: null, // Use the viewport as the root
    threshold: 0.97, // Home section should be at least 97% visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startSlideShow(); // Start the slideshow when the home section is in view
        } else {
            stopSlideShow(); // Stop the slideshow when the home section is not in view
        }
    });
}, options);

observer.observe(homeSection);

// Use the Intersection Observer API to detect when a slide is in view and update the dots
const sliders = document.querySelectorAll('[id^="slide-"]');
const slideOptions = {
    root: null,
    threshold: 0.5,
};

const slideObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const slideId = entry.target.id;
            const slideIndex = parseInt(slideId.split("-")[1]) - 1;
            updateActiveDot(slideIndex);
        }
    });
}, slideOptions);

sliders.forEach(slide => {
    slideObserver.observe(slide);
});
//end//

//scroller
const scrollers = document.querySelectorAll('.scroller');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
            const duplicateItem = item.cloneNode(true);
            duplicateItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicateItem);
        })
    });
}
//end



