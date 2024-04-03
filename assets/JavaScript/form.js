var usName = document.getElementById("uName");
var usTitle = document.getElementById("uTitle");
var usContent= document.getElementById("uContent");
const submitButton = document.getElementById("submit");

function saveUserImput(){
    var userImput = {
        userName: usName.value,
        title: usTitle.value,
        content: usContent.value.trim(),
    };

    const arrayUser = JSON.parse(localStorage.getItem("arrayUser"));

    if (arrayUser !==null){
        arrayUser.push(userImput);
        localStorage.setItem("arrayUser", JSON.stringify(arrayUser));
        }
    else { let array =[]
        array.push(userImput);
        localStorage.setItem("arrayUser", JSON.stringify(array));
        }
}

submitButton.addEventListener("click", function(event){
   event.preventDefault();
   saveUserImput();
   window.location = "blog.html"
});

