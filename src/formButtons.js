function mySubmitFunction(e) {
    e.preventDefault();
    let modal = document.getElementById("modal").classList.remove("hide") 
}

function checkBoxOnce(event){
    let btns = document.querySelectorAll("[id=input-check]");
    btns.forEach(item => {
        item.checked = false;
    })
    event.srcElement.checked = true;
    manageBtns();
}

function manageBtns(){
    let btn = document.getElementById("cart-btn");
    btn.disabled = false;
}

function closeModal(){
    let modal = document.getElementById("modal").classList.add("hide") 
}