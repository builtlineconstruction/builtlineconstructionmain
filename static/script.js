// emailjs.init({
//             publicKey: '6upSXP_XXdZIVKN27',
// });

const texts = [
    "BUILD YOUR DREAM HOUSE WITH US",
    "QUALITY CONSTRUCTION YOU CAN TRUST",
    "WE SHAPE YOUR FUTURE BUILDINGS",
    "TRUSTED BY CLIENTS, PROVEN BY PROJECTS",
    "BUILT ON TRUST AND QUALITY",
    "RELIABLE CONSTRUCTION, PROVEN RESULTS",
    "YOUR TRUSTED CONSTRUCTION PARTNER"
];
    let index = 0;
    const heroText = document.getElementById("heroText");
setInterval(() => {
    index = (index + 1) % texts.length; 
    heroText.textContent = texts[index];
}, 3000);



// window.addEventListener('load',()=>{
//     const hero = document.querySelector(".hero");
//     const text = document.querySelector(".hero-content");
//     const image = document.querySelector(".Image");
//     // const nav = document.querySelector("nav")

//     setTimeout(() => {
//         hero.classList.add("show-bg");
//     }, 1000);

//     setTimeout(() => {
//         text.classList.add("show-text");  
//     }, 3000);

//      setTimeout(() => {
//         image.classList.add("showImage")
//         image.style.display = "block"
//         // nav.classList.add("shownav")
//      },4000);
// })

window.addEventListener('load', () => {
    const hero = document.querySelector(".hero");
    const text = document.querySelector(".hero-content");
    const image = document.querySelector(".Image");

    setTimeout(() => {
        hero.classList.add("show-bg");
    }, 1000);

    setTimeout(() => {
        text.classList.add("show-text");  
    }, 3000);

    setTimeout(() => {
        image.classList.add("showImage");
        image.style.display = "block";
    }, 4000);
});



let counters = document.querySelectorAll(".count");
const counterSection = document.querySelector("#counter");

function startCounting() {
    counters.forEach(counter => {
        let target = +counter.dataset.target;
        let count = 0;

        counter.innerText = "0"; // reset before start

        let interval = setInterval(() => {
            count++;
            counter.innerText = count + "+";

            if (count === target) {
                clearInterval(interval);
            }
        }, 30);
    });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting();
        }
    });
}, {
    threshold: 0.5 // section visible 50%
});

observer.observe(counterSection);


// function sendEmail(){ 
    
//         let fname = document.getElementById("firstname").value.trim();
//         let lname = document.getElementById("lastname").value.trim();
//         let email = document.getElementById("email").value.trim();
//         let number = document.getElementById("number").value.trim();
//         let bhk_group = document.querySelector('input[name="bhk"]:checked')?.value || " ";
//         let project = document.getElementById("project").value;
//         let message = document.getElementById("message").value.trim();

//         let params = {
//             first_name: fname,
//             last_name: lname,
//             from_email: email,
//             from_number: number,
//             from_bhk:bhk_group,
//             from_project:project,
//             message: message
//         }

//     emailjs
//     .send('service_f234mci', 'template_43z54fb', params)
//     .then(()=>{
//         alert('Email Successfully Submitted ✅')
//         document.getElementById("form").reset();    
//     })
//     .catch(()=>{
//         alert("Email can not send!")
//     })
   
// }

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

window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});


scrollBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// scroll up homepage button js code

const scrollWrapper = document.querySelector('.scrollWrapper');
        const items = [...scrollWrapper.children];

        items.forEach((item) => {
            const clonedItem = item.cloneNode(true);
            // clonedItem.classList.add("red");
            scrollWrapper.appendChild(clonedItem);
})

// calculation

let totalArea = 0;
const reduction = 150; 
let reductionApplied = false;

const lengthInput = document.getElementById("length");
const widthInput = document.getElementById("width");

    // Automatic area calculation
lengthInput.addEventListener("input", calculateTotalArea);
widthInput.addEventListener("input", calculateTotalArea);

function calculateTotalArea() {
    const length = parseInt(lengthInput.value) || 0;
    const width = parseInt(widthInput.value) || 0;
    totalArea = length * width;
    document.getElementById("totalAreaInput").value = totalArea;
    reductionApplied = false;
    updateCosts();
}

    // Navbar buttons logic
    const floorButtons = document.querySelectorAll(".floor-btn");
    floorButtons.forEach(btn => {
        btn.addEventListener("click", function(){
            floorButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            showFloors(parseInt(this.dataset.floor));
        });
    });

    function showFloors(selectedFloor) {
        for(let i=0;i<4;i++){
            const card = document.getElementById("floor"+i);
            card.style.display = i <= selectedFloor ? "block" : "none";
        }
        updateCosts();
    }

    function updateCosts() {
        let totalBefore = 0;
        let totalAfter = 0;

        for(let i=0;i<4;i++){
            const card = document.getElementById("floor"+i);
            if(card.style.display === "block"){
                const select = card.querySelector("select");
                let rate = parseInt(select.value);

                // Show informational popup once
                if(i>0 && totalArea >=1200 && !reductionApplied){
                    alert("Total area ≥ 1200 sq.ft. ₹150 per sq.ft will be reduced automatically for eligible floors (Ground floor excluded).");
                    reductionApplied = true;
                }

               const costBefore = totalArea * rate;
                let effectiveArea = totalArea;

                // Apply area reduction only for upper floors & only once
                if (i > 0 && totalArea >= 1200 && reductionApplied) {
                    effectiveArea = totalArea - reduction; // 1200 → 1050
                }

                const costAfter = effectiveArea * rate;


                card.querySelector(".costBefore").innerText = costBefore.toLocaleString();
                card.querySelector(".costAfter").innerText = costAfter.toLocaleString();

                totalBefore += costBefore;
                totalAfter += costAfter;
            }
        }

        document.getElementById("totalBefore").innerText = totalBefore.toLocaleString();
        document.getElementById("totalAfter").innerText = totalAfter.toLocaleString();
        document.getElementById("savingCost").innerText = (totalBefore - totalAfter).toLocaleString();
    }

    // Initialize default
    calculateTotalArea();
    showFloors(0);







