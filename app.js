tabs = document.querySelectorAll(".tab");
tabButtons = document.querySelectorAll(".tab-btn");
function onTabClick(event){
    tabButtons.forEach(tabButton => tabButton.classList.remove("tab-checked"));
    event.target.classList.add("tab-checked")
}
tabs.forEach(tab => tab.querySelector("a").addEventListener("click",onTabClick));