const cards=document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});

const themeBtn=document.createElement("button");

themeBtn.innerHTML="🌙";

themeBtn.style.position="fixed";
themeBtn.style.right="20px";
themeBtn.style.bottom="20px";
themeBtn.style.padding="12px";
themeBtn.style.borderRadius="50%";
themeBtn.style.border="none";
themeBtn.style.cursor="pointer";

document.body.appendChild(themeBtn);

themeBtn.onclick=()=>{
document.body.classList.toggle("dark");
};
