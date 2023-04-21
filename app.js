let pfp = document.querySelector('.pfp');
let names = document.querySelector('.name');
let future = document.querySelector('.future');
let description = document.querySelector('.description');


const reviews = [
    {
        id: 1,
        names: "Zimdars",
        future: "Espn Sports Analyst",
        pfp: "images/zimmy1.jpg",
        description: "As a proffesional fútbol player, it's easy to analyze NBA games.",
    },
    {
        id: 2,
        names: "Zimmy",
        future: "The Jim Cramer of Technology and Business",
        pfp: "images/zimmy2.jpg",
        description: "Teaches a wide variety of business and technology classes.",
    },
    {
        id: 3,
        names: "A Man Of Many Names",
        future: "Retired Premier Leagure Defender",
        pfp: "images/zimmy3.jpg",
        description: "It's true, back in the day Whitewater was in the premier league.",
    },
];


const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');


let currentItem = 0;

window.addEventListener('DOMContentLoaded', () => {
    currentReview(currentItem);
});

function currentReview(person) {
    const item = reviews[person];
    pfp.src = item.pfp;
    names.textContent = item.names;
    future.textContent = item.future;
    description.textContent = item.description;
}



nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length -1) {
        currentItem = 0;
    }
    currentReview(currentItem);
});
prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length -1;
    }
    currentReview(currentItem);
});
