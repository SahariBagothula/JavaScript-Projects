const eachButton = document.querySelectorAll(".container");
const body = document.querySelector("body")

eachButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "black"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id;
        }

        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id;
        }
    })
})