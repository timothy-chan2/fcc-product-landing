/*To make the menu disappear when scrolling down*/

let lastScrollTop = 0;

window.addEventListener("scroll", () => {  
    let st = window.pageYOffset || document.documentElement.scrollTop;  
    if (st > lastScrollTop){
      document.getElementById("nav-bar").style.top = "-100%";
    } else {
      document.getElementById("nav-bar").style.top = "0";
    }
    lastScrollTop = st;
});

/* Highlighting cards*/
const cardId = ["#card-stand", "#card-lux"];
const card = [];
const selected = [];
const buttonSel = [document.querySelector("#sel1"), document.querySelector("#sel2")];

const highlight1 = () => {
		card[0].classList.toggle("card-highlight");
    selected[0].classList.toggle("card-highlight2");
    
    if (card[0].classList.contains("card-highlight")) {
      buttonSel[0].innerHTML = "BUY";
      buttonSel[0].style.color = "white";
      
      /* Change font to black when hovering over "BUY" and back to white when not hovering*/
      buttonSel[0].addEventListener("mouseover", () => {
        if (card[0].classList.contains("card-highlight")) {
          buttonSel[0].style.color = "black";
        }
      });
        document.querySelector("#sel1").addEventListener("mouseout", () => {
          if (card[0].classList.contains("card-highlight")) {
            buttonSel[0].style.color = "white";
          }
      });
    } else {
      buttonSel[0].innerHTML = "SELECT";
      buttonSel[0].style.color = "black";
    } 
}

const highlight2 = () => {
		card[1].classList.toggle("card-highlight");
    selected[1].classList.toggle("card-highlight2");
    if (card[1].classList.contains("card-highlight")) {
      buttonSel[1].innerHTML = "BUY";
      buttonSel[1].style.color = "white";
      
      /* Change font to black when hovering over "BUY" and back to white when not hovering*/
      document.querySelector("#sel2").addEventListener("mouseover", () => {
        if (card[1].classList.contains("card-highlight")) {
          buttonSel[1].style.color = "black";
        }
      });
        document.querySelector("#sel2").addEventListener("mouseout", () => {
          if (card[1].classList.contains("card-highlight")) {
            buttonSel[1].style.color = "white";
          }
      });
    } else {
      buttonSel[1].innerHTML = "SELECT";
      buttonSel[1].style.color = "black";
    }
}

for (let i = 0; i < cardId.length; i++) {
  card[i] = document.querySelector(cardId[i]);
  selected[i] = document.querySelector(cardId[i]).children[3];
}

card[0].addEventListener("click", highlight1);
card[1].addEventListener("click", highlight2);