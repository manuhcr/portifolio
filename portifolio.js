
const searchBox = document.querySelector(".search-box");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data");
searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  searchInput.focus();
  if (searchInput.value != "") {
    var values = searchInput.value;
    searchData.classList.remove("active");
    searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + values + "</span>";
  } else {
    searchData.textContent = "";
  }
}
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
  searchData.classList.toggle("active");
  searchInput.value = "";
}
function abrirModal0() {
  new bootstrap.Modal("#modalExemplo1").show();
}
function abrirModal1() {
  new bootstrap.Modal("#modalExemplo2").show();
}
function abrirModal2() {
  new bootstrap.Modal("#modalExemplo3").show();
}
function abrirModal3() {
  new bootstrap.Modal("#modalExemplo4").show();
}
