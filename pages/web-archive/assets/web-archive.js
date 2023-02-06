/* -----------------------------------
WEB ARCHIVE
-------------------------------------- */
const select = document.querySelector(".archive-selector");
const options = document.querySelectorAll(".archive-selector option");

// 1

select.addEventListener("change", function() {
  const url = this.options[this.selectedIndex].dataset.url;
  if(url) {
    location.href = url;
  }
});


// 2
for(const option of options) {
  const url = option.dataset.url;
  if(location.href.includes(url)) {
    option.setAttribute("selected", "");
    break;
  }
}
