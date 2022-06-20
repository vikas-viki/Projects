
window.addEventListener('load', () =>{
let c1 =document.getElementById("C1");
let list = document.getElementById("LIST");
list.style = "display: none;";
})

let form = document.getElementById("FORM");

form.addEventListener('submit',(e) => {

e.preventDefault();
let n = document.getElementById("N");

let rn =document.getElementById("RN");

let s = document.getElementById("S");

let c = document.getElementById("C");

let cls = document.getElementById("SD");

let u = document.getElementById("P");

if(cls == "selectHere"){
alert("Slect a class")
}
else(
console.log("selected")
);

let sn = document.createElement("h1");
sn.classList.add("sn");
sn.innerText= n.value;

let sr = document.createElement("button");
sr.classList.add("f", "sr");
sr.innerText= rn.value;

let sco = document.createElement("button");
sco.classList.add("f", "sco");
sco.innerText = c.value;

let ss = document.createElement("button");
ss.classList.add("f","ss");
ss.innerText = s.value;

let sc = document.createElement("button");
sc.classList.add("sc","f");
sc.innerText = cls.value;

let outf = document.createElement("a");
outf.classList.add("of","f");
outf.setAttribute("href",u.value)
outf.innerText= u.value;

let br = document.createElement("br");

let list = document.getElementById("LIST");

let c1 = document.createElement("div");
c1.classList.add("c1");
c1.id="C1";

let tb = document.createElement("img");
tb.setAttribute("alt","delete");
tb.setAttribute("src","trashbox.png");
tb.classList.add("tb");
tb.id="TB";


tb.addEventListener('click',() =>{
    c1.style = "display : none";
})


c1.appendChild(sn);

c1.appendChild(br);
c1.appendChild(sr);
c1.appendChild(br);
c1.appendChild(sco);
c1.appendChild(br);
c1.appendChild(ss);
c1.appendChild(br);
c1.appendChild(sc);
c1.appendChild(br);
c1.appendChild(outf);
c1.appendChild(tb);

list.appendChild(c1);




cls.value = "selectHere";
c.value = "";
s.value = "";
rn.value ="";
n.value = "";
u.value = "";

list.style = "display: none;";

let para = document.getElementById("PARA");
para.style = "display: none";
})

function chng(){
let c2 = document.getElementById("C2");
c2.style = "display: none";
let list = document.getElementById("LIST");
list.style = "display: block;";

}
function back(){
let c2 = document.getElementById("C2");
c2.style = "display: block";
let list = document.getElementById("LIST");
list.style = "display: none;";
}

