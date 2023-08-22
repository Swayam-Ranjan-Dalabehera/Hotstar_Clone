let movies = [
    {
        name: 'Falcon and the Winter Soldier',
        des:
            ' Following the events of Avengers: Endgame, Sam Wilson/Falcon and Bucky Barnes/Winter Soldier team up in a global adventure that tests their abilities -- and their patience.',
        image: 'images/slider 2.png'
    },
    {
        name: 'Loki',
        des:
             ' The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame."',
        image: 'images/slider 1.png'
    },
    {
        name: 'Wanda Vision',
        des:
             ' Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.',
        image: 'images/slider 3.png'
    },
    {
        name: 'Raya and the Last Dragon',
        des:
             'In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.',
        image: 'images/slider 4.png'
    },
    {
        name: 'Luca',
        des:
             ' Set in a beautiful seaside town on the Italian Riviera, Disney and Pixar’s original feature film “Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.',
        image: 'images/slider 5.png'
    }
]
const carousel = document.querySelector('.carousel');
let sliders = []
let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++

    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}
for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach(item => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = document.querySelectorAll(".pre-btn");
let nxtBtns = document.querySelectorAll(".nxt-btn");

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });
    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});
