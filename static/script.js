
const menuBtn=document.querySelector(".menu-toggle");
const nav=document.querySelector(".hero-header nav");

menuBtn.onclick=function(){
    nav.classList.toggle("show");
    if(nav.classList.contains("show")){
        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.getElementById("heroText");
    if (heroText) {
        const text = [
            "BUILD YOUR DREAM HOUSE WITH US",
            "QUALITY CONSTRUCTION YOU CAN TRUST",
            "WE SHAPE YOUR FUTURE BUILDINGS",
            "TRUSTED BY CLIENTS, PROVEN BY PROJECTS",
            "BUILT ON TRUST AND QUALITY",
            "RELIABLE CONSTRUCTION, PROVEN RESULTS",
            "YOUR TRUSTED CONSTRUCTION PARTNER"
        ];

        let index = 0;
        setInterval(() => {
            index = (index + 1) % text.length;
            heroText.textContent = text[index];
        }, 3000);
    }
});

let counters = document.querySelectorAll(".count");
const counterSection = document.querySelector("#counter");

function startCounting() {
    counters.forEach(counter => {
        let target = +counter.dataset.target;
        let count = 0;
        counter.innerText = "0";

        let interval = setInterval(() => {
            count++;
            counter.innerText = count + "+";

            if (count === target) {
                clearInterval(interval);
            }
        }, 100);  // CHANGED: 30ms → 100ms (3x slower, 3x faster)
    });
}

const observes = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
            observes.unobserve(counterSection);  // ADDED: Only count once
        }
    });
}, {
    threshold: 0.5
});

observes.observe(counterSection);



index = 0;

function slide(direction) {
  const track = document.getElementById("expertTrack");
  const card = track.children[0];
  const gap = 20;

  const cardWidth = card.offsetWidth + gap;
  const totalCards = track.children.length;
  const visibleCards = 1;
  const maxIndex = totalCards - visibleCards;
  cardWidth + gap

  index += direction;

  if (index < 0) index = 0;
  if (index > maxIndex) index = maxIndex;

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// copyright

document.getElementById("year").textContent = new Date().getFullYear();


// Select the scroll button
const scrollBtn = document.querySelector(".scroll-btn");

const scrollWrapper = document.querySelector('.scrollWrapper');
        const item = [...scrollWrapper.children];

        item.forEach((item) => {
            const clonedItem = item.cloneNode(true);
            // clonedItem.classList.add("red");
            scrollWrapper.appendChild(clonedItem);
})

const popupForm = document.querySelector('.popup-form')
const closePopup = document.getElementById('closePopup')
const openButtons = document.querySelectorAll(".openConsultation");

window.addEventListener("load", function(){
    if(!sessionStorage.getItem("consultationPopup")){
         setTimeout(function(){
            popupForm.classList.add("active");
            sessionStorage.setItem("consultationPopup","true");
        },1000);
    }

    openButtons.forEach(function(button){
        button.addEventListener('click', function(e){
            e.preventDefault();
            popupForm.classList.add('active')
        })
    })

    closePopup.addEventListener("click", function(){
        popupForm.classList.remove('active')
    })

    popupForm.addEventListener("click",function(e){
        if(e.target===popupForm){
            popupForm.classList.remove("active");
        }
    });

})
document.addEventListener("keydown",function(e){
    if(e.key==="Escape"){
        popupForm.classList.remove("active");
    }
});



const reelsSwiper = new Swiper(".reels-slider",{

    slidesPerView:1.3,

    centeredSlides:true,

    spaceBetween:30,

    loop:true,

    speed:700,

    navigation:{

        nextEl:".swiper-button-next",

        prevEl:".swiper-button-prev",

    },

    pagination:{

        el:".swiper-pagination",

        clickable:true,

    },

    breakpoints:{

        320:{

            slidesPerView:1.1,

            spaceBetween:20

        },

        768:{

            slidesPerView:2,

            spaceBetween:25

        },

        1200:{

            slidesPerView:3,

            spaceBetween:30

        }

    }

});