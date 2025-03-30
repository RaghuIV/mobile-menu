import { itemArr } from "/data.js";
const eachItems = document.querySelector(".menu");
const footerEl = document.getElementById("footer");
const ordersLi = document.querySelector(".orders");
const completeOrder = document.querySelector("#buy");
const payment = document.querySelector(".window");
const closeModal = document.querySelector(".close-btn");

const displayMenu = function (arr) {
  let str = "";
  arr.forEach((obj) => {
    str += `<div class="items">
            <img src=${obj.image} alt="item"/>
            <div class="item-data">
                <div class="name">${obj.name}</div>
                <div class="description">${obj.description}</div>
                <div class="name">$${obj.price}</div>
            </div>
            <div class="circle" data-item-name='${obj.name}'><i class="fa-regular fa-plus"></i></div>
            </div>`;
  });
  return str;
};

document.addEventListener("DOMContentLoaded", () => {
  eachItems.innerHTML = displayMenu(itemArr);
});

document.addEventListener("click", (e) => {
  let data = "";
  if (e.target.dataset.itemName) {
    data = e.target.dataset.itemName;
    addItem(data);
  } else if (e.target.parentElement.dataset.itemName) {
    data = e.target.parentElement.dataset.itemName;
    addItem(data);
  }

  if (e.target.dataset.itemValue) {
    data = e.target.dataset.itemValue;
    removeItem(data);
  } else if (e.target.parentElement.dataset.itemValue) {
    data = e.target.parentElement.dataset.itemValue;
    removeItem(data);
  }

  if (
    e.target.classList.contains("close-btn") ||
    e.target.parentElement.classList.contains("close-btn")
  ) {
    payment.style.display = "none";
  } else if (e.target.id === "buy") {
    payment.style.display = "flex";
  }
});

function addItem(data) {
  const IncrementArray = itemArr.find((element) => {
    return element.name === data;
  });
  ++IncrementArray.count;
  footerEl.style.display = "flex";
  displayOrder(itemArr);
}

function removeItem(data) {
  const IncrementArray = itemArr.find((element) => {
    return element.name === data;
  });
  --IncrementArray.count;
  displayOrder(itemArr);
}

function displayOrder(arr) {
  let str = "";
  const displayData = arr.filter((countData) => countData.count > 0);
  for (let data of displayData) {
    str += `<div class ="order">
  <div class="orderName">${data.name}</div>
  <div class="orderQuantity">${data.count}</div>
  <div class="dec-qauntity" data-item-value='${data.name}'><i class='fa-solid fa-minus'></i></div>
  </div>`;
  }
  ordersLi.innerHTML = str;
  if (!displayData.length) {
    footerEl.style.display = "none";
  }
}
