let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");
let date=document.querySelector(".date");
let month=document.querySelector(".month");
let year=document.querySelector(".year");






//                       hour

 const hours=()=>{
    const hour = new Date().getHours();
    const ampm=hour>=12? "PM":"AM";
    const hour12=hour%12||12;

    return `${hour12} ${ampm}`
};
setInterval(()=>{
    box1.innerText=hours();
},1000);
box1.innerText=hours();

//                      minute
const minute=()=>{
    const min = new Date().getMinutes();
    return String(min).padStart(2, "0");
};
setInterval(()=>{
    box2.innerText=minute();
},1000);
box2.innerText=minute();




//                     seconds

const second=()=>{
    const sec = new Date().getSeconds();
    return String(sec).padStart(2,"0");
};
setInterval(()=>{
    box3.innerText=second();
},1000);
box3.innerText=second();
//                          Date
const dete=()=>{
    const det=new Date().getDate();
    return String(det).padStart(2,"0");

}
console.log(dete());
setInterval(()=>{
    date.innerText=dete();
},1000);
date.innerText=dete();
//                       month
const moth=()=>{
    const mo=new Date().getMonth() + 1;
    return String(mo).padStart(2,"0");

}
console.log(moth());
setInterval(()=>{
    month.innerText=moth();
},1000);
month.innerText=moth();
//                       year
const yeer=()=>{
    const mo=new Date().getFullYear();
    return mo;

}
console.log(yeer());
setInterval(()=>{
    year.innerText=yeer();
},1000);
year.innerText=yeer();

