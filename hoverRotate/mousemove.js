const card = document.querySelector(".card");
const container = document.querySelector(".container");

const glass = document.querySelector("#glassimg");

//moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
  card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`;
});

//animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  glass.style.transform = "translateZ(100px) rotateZ(45deg)";
});

//animation back in when mouse leave
container.addEventListener("mouseleave", (e) => {
  card.style.transform = "rotateX(0deg) rotateY(0deg)";
  card.style.transition = " all 0.5s ease";
  glass.style.transform = "translateZ(0)";
});
