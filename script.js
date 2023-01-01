let _leftButton = document.getElementById("left-button");
let _rightButton = document.getElementById("right-button");

let _galleryWindow = document.getElementById("gallery-content");
let _cardTrack = document.getElementById("card-track");
let _galleryMap = document.getElementById("gallery-map");

let cardCounter = 1;

class workCard {
    constructor(title, image, link, subject) {
        this.title = title;
        this.image = image;
        this.link = link;
        this.subject = subject;
    }
}

var workCard1 = new workCard("Online Resume", "https://cdn.discordapp.com/attachments/989718721465569330/1047521105507795024/Dienasty_an_isometric_view_from_behind_of_a_corporate_worker_wo_cce2727c-1d5d-44b5-9b27-a3e030434cd1.png", "https://andygs-resume.netlify.app", "HTML/JS/CSS/React");

_galleryWindow.addEventListener("click", (event) => {
    
    if(event.target.id === "left-button"){
        moveCards("prev");
    }

    if(event.target.id === "right-button"){
        moveCards("next");
    }
})

//Create a new card
//Set the background-image
//Create and display a banner with the subject and title
//Add a link
//workCard(title, image, link, subject)



function moveCards(direction){

    if(direction === "prev"){

    }

    if(direction === "next"){
        if(cardCounter > 1){
            _leftButton.style.display = "flex";
            document.getElementById(`card-${cardCounter-1}`).style.transition = "all 1s ease-out";
            document.getElementById(`card-${cardCounter-1}`).style.transform = "translateX(-500px)";

            setTimeout(() => {
                _cardTrack.removeChild(document.getElementById(`card-${cardCounter - 2}`));
                clearTimeout(this);
            }, "1000");
        }

        let nextCard = document.createElement("div");
        nextCard.id = `card-${cardCounter}`;
        _cardTrack.appendChild(nextCard);
        document.getElementById(`card-${cardCounter}`).style.position = "absolute";
        document.getElementById(`card-${cardCounter}`).style.zIndex = `${-1 * cardCounter}`;
        document.getElementById(`card-${cardCounter}`).style.transition = "all 1s ease-out";
        document.getElementById(`card-${cardCounter}`).style.backgroundImage = `url(${workCard1.image})`;
        document.getElementById(`card-${cardCounter}`).style.backgroundSize = "cover";
        cardCounter++;

    }

}

