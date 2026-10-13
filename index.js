console.log("Connected!")

let clsbtn = document.getElementById('icon');
let popupDiv = document.getElementById('popup');
let body = document.getElementsByTagName('body')[0];
clsbtn.addEventListener('click', function(){
    popupDiv.style.display = "flex";
    body.style.overflow = "hidden";
})


let clsbtnpopup = document.getElementById("popup-close");
let popup = document.getElementById('popup');
console.log(body)
clsbtnpopup.addEventListener('click', function(){
    popup.style.display = "none";
    body.style.overflow = "scroll";
})


// Why Pf dropdown
let dropdowHeading = document.getElementById('why-pf-heading');
let dropdownList = document.getElementsByClassName('popup-content-dropdown-list')[0];
let whyPfIcon = document.getElementById('why-pf-icon');
dropdowHeading.addEventListener('click', function(){
    dropdownList.classList.toggle("flex");
    if(dropdownList.classList.contains("flex")){
        whyPfIcon.style.transform = "rotate(270deg)";
    }else{
        whyPfIcon.style.transform = "rotate(90deg)";
    }

})


// Work out with us
let wowuHeading = document.getElementById('work-out-with-us');
let wowuList = document.getElementById('work-out-with-us-list');
let wowuIcon = document.getElementById('work-out-with-us-icon');

wowuHeading.addEventListener('click', function(){
    wowuList.classList.toggle('flex');

    if(wowuList.classList.contains('flex')){
        wowuIcon.style.transform = "rotate(270deg)";
    }else{
        wowuIcon.style.transform = "rotate(90deg)";
    }

})


// Drop down for Regions
let regionHeading = document.getElementById('popup-region-heading');
let regionList = document.getElementById('popup-region-list');
let regionIcon = document.getElementById('pop-dropdow=heading-arrow');

regionHeading.addEventListener('click', function(){
    console.log("Clicked");
    // regionList.style.display = 'flex';
    regionList.classList.toggle('flex');
    if(regionList.classList.contains('flex')){
        regionList.style.display = "flex";
        regionIcon.style.transform = "rotate(270deg)";
    }else{
        regionList.style.display = "none";
        regionIcon.style.transform = "rotate(90deg)";
    }
    console.log(regionList)
})










// Section 4 : Slider

const slider = document.getElementById("section-four-slider-container");

const cards = document.querySelectorAll(".section-four-slider-card");

const leftIcon = document.getElementById("left-icon");
const rightIcon = document.getElementById("right-icon");
const currentSlide = document.getElementById("current-slide");

let currentIndex = 0;

// Find the card closest to the center of the slider
function updateCurrentSlide() {
    const containerRect = slider.getBoundingClientRect();
    const containerCenter = containerRect.left + slider.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;

        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
        }
    });

    currentIndex = closestIndex;
    currentSlide.textContent = currentIndex + 1;
}

// Scroll to a particular card
function showCard(index) {
    if (index < 0 || index >= cards.length) {
        return;
    }

    currentIndex = index;

    const card = cards[index];

    const targetLeft =
        slider.scrollLeft +
        card.getBoundingClientRect().left -
        slider.getBoundingClientRect().left -
        (slider.clientWidth - card.getBoundingClientRect().width) / 2;

    slider.scrollTo({
        left: targetLeft,
        behavior: "smooth"
    });

    currentSlide.textContent = currentIndex + 1;
}

// Next button
rightIcon.addEventListener("click", function () {
    showCard(currentIndex + 1);
});

// Previous button
leftIcon.addEventListener("click", function () {
    showCard(currentIndex - 1);
});

// Update counter during manual scrolling or swiping
slider.addEventListener("scroll", updateCurrentSlide);

// Set initial counter
updateCurrentSlide();

