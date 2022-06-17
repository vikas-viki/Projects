function startListing(){
    let uiv = document.getElementById("UI").value;
    

    let o = document.createElement("div");
    o.classList.add("O");

    let uo = document.createElement("input");
    uo.classList.add("UO");
    uo.setAttribute("readonly", true);

    if(uiv === ""){
        alert("Input some value")
    }
    else{
        uo.value = uiv;
    }

    document.getElementById("UI").value = "";

    let bs = document.createElement("div");
    bs.classList.add("BS");

    let eb =document.createElement("button");
    eb.classList.add("EB");
    eb.innerText = "EDIT";

    eb.addEventListener('click',() =>{
        if(eb.innerText.toLowerCase() == "edit"){
            uo.removeAttribute("readonly", true);
            uo.focus();
            eb.innerText = "save";
        }
        else{
            uo.setAttribute("readonly", true);
            eb.innerText= "edit";
        }

    })

    let db = document.createElement("button");
    db.classList.add("DB");
    db.innerText= "DELETE";

    bs.appendChild(eb);
    bs.appendChild(db);

    o.appendChild(uo);
    o.appendChild(bs);

    let l = document.getElementById("L");
    l.appendChild(o);
    db.addEventListener('click', () =>{
        o.style ="display: none";
    })
}