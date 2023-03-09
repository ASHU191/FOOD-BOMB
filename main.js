const bars = document.getElementById('bars');
const listItems = document.querySelector('.menus');
const link = document.querySelector('hover-link');

function baropen() {

    listItems.style.left = "0%";
}
function barclose() {
    listItems.style.left = "-100%"
};
