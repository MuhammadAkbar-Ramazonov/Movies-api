// varebles
const elForm = document.querySelector(".site-form");
const elFormInput = elForm.querySelector(".form-input");
const elFormInputNum = elForm.querySelector(".form-input-num");


const elFormSelect = elForm.querySelector(".slect-type");
const elList = document.querySelector(".site-list");

// create movies
function renderMovies(arr) {
  elList.innerHTML = ""
  arr.forEach(item => {
    const elItem = document.createElement("li");
    const elImg = document.createElement("img");
    const elTitle = document.createElement("h3");
    const elType = document.createElement("p");
    const elYear = document.createElement("p");


    elItem.classList.add("mb-3", "me-3", "bg-white", "pb-3", "rounded-3", );
    elItem.style.maxWidth = "300px"
    elImg.src = item.Poster;
    elImg.width = "300"
    elImg.height = "500";

    elTitle.classList.add("mt-3", "fw-bold")
    elTitle.textContent = item.Title;
    elType.textContent = `type: ${item.Type}`;
    elYear.textContent = `year: ${item.Year}`;


    elType.classList.add("text-dark", "fw-bold")
    elYear.classList.add("text-dark", "fw-bold")

    elItem.appendChild(elImg);
    elItem.appendChild(elTitle);
    elItem.appendChild(elType);
    elItem.appendChild(elYear);

  
    elList.appendChild(elItem);
  });
};

// bring arr with URL
function featchRend(searchInput, searchSelect, serchYear) {
  fetch(`https://www.omdbapi.com/?apikey=62e0ff11&s=${searchInput}&type=${searchSelect}&y=${serchYear}`)
  .then(res => res.json())
  .then(data => {
    renderMovies(data.Search)
  })
}

// event
elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
  const inpuValue = elFormInput.value;
  const selectValue = elFormSelect.value;

  const elFormInputNumValue = elFormInputNum.value 
  
  featchRend(inpuValue, selectValue, elFormInputNumValue);
});
