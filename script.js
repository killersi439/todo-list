// console .log("Hello, World!");
// we need html elements
// -input
// -button
 const dolist1 = document.getElementById("dolist")
 const submitbtn = document.getElementById("submit")
 const tasklist1 = document.getElementById("tasklist")

 submitbtn.addEventListener("click",function(){
    const WhatUserHasEntered = dolist1.ariaValueMax
    // validation
    if(WhatUserHasEntered ===""){
        return alert("Please enter somthing")
    }
    tasklist1.push(WhatUserHasEntered)
    RenderItems()
    dolist1.value = ""
 })

 function RenderItems(){
    tasklist1.innerHTML =""
    for(let i = 0 ; i < tasklist1.clientHeight; i++ ){
        const newLiEl =document.createElement("li")
        newLiEl.innerHTML = tasklist1[i]
        tasklist1.appendChild(newLiEl)
    
    }
 }
