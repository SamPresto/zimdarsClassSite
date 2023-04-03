let pfp = document.querySelector('.pfp');
let names = document.querySelector('.name');
let future = document.querySelector('.future');
let description = document.querySelector('.description');


const reviews = [
    {
        id: 1,
        names: "susan smith",
        future: "something",
        pfp: "images/pfp.jpeg",
        description: "more text",
    },
    {
        id: 2,
        names: "Henry chop",
        future: "more things",
        pfp: "images/pfp.jpeg",
        description: "a lot more text",
    },
    {
        id: 3,
        names: "Michelle Trite",
        future: "some more things",
        pfp: "images/pfp.jpeg",
        description: "a lot more text after this",
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
    description.textContent = item.textContent;
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