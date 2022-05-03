var currentImg;
var currentname;

const getHomePage = () => {
var productContainer = document.getElementById("products-list");
fetch("./data/products.json")
    .then(response => response.json())
    .then(data => {
        let result = "";
        data.map(item => {
        result += `
        <li>
            <img class="select-btn" role="button" onclick="homeImgClicked(${item.id})" id=${item.id} src=${item.thumbnail} />
            <h4>${item.name}</h4>
            <p>${item.price} ${item.currency}</p>
        </li>`
        })
        productContainer.innerHTML = result;
    })
}
getHomePage();

const getProduct = (id) => {
    let prodImg = document.getElementsByClassName("")
}

function homeImgClicked(id){
    let prodHome = document.getElementById("products-toogle");
    prodHome.classList.add("hide");
    let prodItem = document.getElementById("item-toogle");
    prodItem.classList.remove("hide");
    productsClicked(id);
}

function productsClicked(id){
    var itemImg = document.getElementById("item-img");
    var itemName = document.getElementById("item-info-name");
    var itemPrice = document.getElementById("item-info-price");
    var itemDesc = document.getElementById("item-info-description");

    fetch(`./data/${id}.json`)
    .then(response => response.json())
    .then(data => {
        itemImg.src = data.image;
        itemName.innerHTML = data.name;
        itemPrice.innerHTML = `${data.price} ${ data.currency}`;
        itemDesc.innerHTML = data.description;

        currentname = data.name;
        currentImg = data.image;
    })
}

function backClicked(){
    let prodHome = document.getElementById("products-toogle");
    prodHome.classList.remove("hide");
    let prodItem = document.getElementById("item-toogle");
    prodItem.classList.add("hide");
}

function toogleHide(){
    let prodHome = document.getElementById("products-toogle");
}

function modalInfo(){
    var modal = document.getElementById("modal-info");
    var info = "";
    info += `
    <div class="modal-info-container">
        <img src="${currentImg}" />
        <p>${currentname}</p>
    </div`
    console.log(modal)
    modal.innerHTML = info;
}

function mySubmitFunction(e) {
    e.preventDefault();
    let modal = document.getElementById("modal").classList.remove("hide");
    modalInfo();
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