




















let place = document.querySelectorAll('.place-list li');
let active = "https://a.cdn-hotels.com/gdcs/production5/d320/a0c5a994-d99a-4278-a1b1-8a3b652461ac.jpg";

place.forEach((e) => {
    e.addEventListener("mouseenter", (event) =>{
     place.forEach((e) => {
        e.classList.remove("active");
     });

     event.target.classList.add("active");
     active = event.target.getAttribute("radz-img");
     let banner = document.querySelector(".banner");
     banner.style.backgroundImage = `url('${active}')`;
    
    });
});
    