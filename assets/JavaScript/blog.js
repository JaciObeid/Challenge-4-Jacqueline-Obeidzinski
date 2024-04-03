function renderLastImput(){
    const lastImput = JSON.parse(localStorage.getItem("arrayUser"));

    for (let i = 0; i < lastImput.length; i++) {
let userPlace = document.getElementById('userImputs')
 const divImput = document.createElement("div");
    divImput.setAttribute("class", "titleCss")
    const imputTitle =document.createElement("h3");
    const textTitle = document.createTextNode(lastImput[i].title);
    imputTitle.appendChild(textTitle);
          divImput.appendChild(imputTitle);  

    const imputCont =document.createElement("p");
    imputCont.setAttribute("class", "contentCss");
    const textCont = document.createTextNode(lastImput[i].content);
    imputCont.appendChild(textCont);
        divImput.appendChild(imputCont); 

    const imputUser =document.createElement("p");
    imputUser.setAttribute("class", "userCss");
    const textImput = document.createTextNode("Posted By: "+ lastImput[i].userName);
    imputUser.appendChild(textImput);
        divImput.appendChild(imputUser);
        
    userPlace.appendChild(divImput);
            
    // document.getElementById('userImputs'). . appendChild(lastImput[i].userName);
}
}

function init(){
    renderLastImput();
}
   init();