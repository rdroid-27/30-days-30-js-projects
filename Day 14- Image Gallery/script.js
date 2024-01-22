const scroll=document.querySelector(".gallery");
const backBtn=document.querySelector("#backBtn");
const nextBtn=document.querySelector("#nextBtn");

scroll.addEventListener("wheel", (e)=>{
  e.preventDefault();
  scroll.scrollLeft+= e.deltaY;
  scroll.style.scrollBehavior="auto";

})
nextBtn.addEventListener("click", (e)=>{
  scroll.style.scrollBehavior="smooth";
  scroll.scrollLeft+=900;
})
backBtn.addEventListener("click", (e)=>{
  scroll.style.scrollBehavior="smooth";
  scroll.scrollLeft-=900;
})