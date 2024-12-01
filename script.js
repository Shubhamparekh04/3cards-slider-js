'use strict';

const imageArray = [
    {
        id: 1,
        caption: "A scenic view of mountains under a golden sunrise",
        image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    },
    {
        id: 2,
        caption: "Waves crashing on a serene beach at sunset",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    },
    {
        id: 3,
        caption: "A city skyline illuminated at night with stars above",
        image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    },
    {
        id: 4,
        caption: "A peaceful forest with a winding stream",
        image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?crop=entropy&cs=tinysrgb&fit=crop&w=1920&h=1080"
    }
];

let sliderContainer = document.querySelector('#slider-container');
sliderContainer.classList.add('d-flex');
let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let ct = 0, ct1 = 1, ct2 = 2;

imageArray.forEach(element => {
    let div = document.createElement('div');
    div.classList.add('sliderCard', 'hidden');

    let img = document.createElement('img');
    img.src = element.image;

    let p = document.createElement('p');
    p.innerText = element.caption;

    div.appendChild(img);
    div.appendChild(p);
    sliderContainer.appendChild(div);
});

let cards = document.querySelectorAll('.sliderCard');

// Show the initial images
cards[ct].classList.remove('hidden');
cards[ct1].classList.remove('hidden');
cards[ct2].classList.remove('hidden');

// Function to update the displayed cards
let check = (direction) => {
    // Hide all cards
    cards.forEach(ele => {
        ele.classList.add('hidden');
    });

    // Increment or decrement indices based on the direction
    if (direction === 'next') {
        ct++;
        ct1++;
        ct2++;
    } else if (direction === 'prev') {
        ct--;
        ct1--;
        ct2--;
    }

    // Handle wrapping manually (no modulus operator)
    if (ct >= imageArray.length) {
        ct = 0;
    } else if (ct < 0) {
        ct = imageArray.length - 1;
    }

    if (ct1 >= imageArray.length) {
        ct1 = 0;
    } else if (ct1 < 0) {
        ct1 = imageArray.length - 1;
    }

    if (ct2 >= imageArray.length) {
        ct2 = 0;
    } else if (ct2 < 0) {
        ct2 = imageArray.length - 1;
    }

    // Show the updated images
    cards[ct].classList.remove('hidden');
    cards[ct1].classList.remove('hidden');
    cards[ct2].classList.remove('hidden');

    console.log("Shown : ", ct, ct1, ct2);
}

// Next button event
nextBtn.addEventListener('click', () => {
    check('next');
});

// Previous button event
prevBtn.addEventListener('click', () => {
    check('prev');
});
