// varebles
const elForm = document.querySelector(".site-form");
const elFormInput = elForm.querySelector(".form-input");
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

    elItem.classList.add("me-3", "mb-1", "bg-white", "p-3", "rounded-3", );
  
    elImg.src = item.Poster;
    elTitle.classList.add("mt-3", "fw-bold")
    elTitle.textContent = item.Title;
    elType.textContent = `type: ${item.Type}`;

    elType.classList.add("text-dark", "fw-bold")
    elItem.appendChild(elImg);
    elItem.appendChild(elTitle);
    elItem.appendChild(elType);
  
    elList.appendChild(elItem);
  });
};

// bring arr with URL
function featchRend(searchInput, searchSelect) {
  fetch(`https://www.omdbapi.com/?apikey=62e0ff11&s=${searchInput}&type=${searchSelect}`)
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
  
  console.log(selectValue);
  featchRend(inpuValue, selectValue);
});
