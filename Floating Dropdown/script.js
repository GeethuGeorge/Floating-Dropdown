//Step:1 when user enter the mouse, we need to show the drop down
//at a time we need to show only one drop down
//Step: 2 when user leaves the mouse, we need to hide the drop down
//step:3: we need to add drop down background o ech drop down

//DOM Events

const navListItemsEl = document.querySelectorAll(".navbar__nav > li");
const dropdownBackgroundEl=document.querySelector(".dropdownBackground");
const dropdownEl=document.querySelectorAll(".dropdown")

/************************************************************************* */
//FUNCTION -1 mouse enter
//in functional declaration "this" is the element on which event listener is added
//in fuctional expression "this" is the window object
//if we need the list items directly inside the callback fn , use only Functional declaration


//Each time we call a callback fn inside an event listener the fn gets an event inside as parameter
//the event depends on the event like submit mouse click etc
//event gives us an event object , and there is something called target which is the element on which an add event listener is added
//this here is event.target ie list item, so we can use this or event.target
//it can be used along with functional expression and declaration


function showDropDown(){
this.classList.add('mouse-enter');
setTimeout(() => {
    this.classList.contains("mouse-enter") &&
    this.classList.add("mouse-enter-active");
}, 150);
/*Add background*/
const listItemDropdown=this.querySelector(".dropdown")/*here this means li that we hover, to take the dropdwon from li as dropdown is inside li and we get each drop down*/
addBackground(listItemDropdown);//need to use the drop down in the fn

}

//FUNCTION -2 mouse leave
function hideDropDown(){
this.classList.remove('mouse-enter','mouse-enter-active');
dropdownBackgroundEl.classList.remove("open")

}


//FUNCTION - 3 Add background
function addBackground(dropdown){
dropdownBackgroundEl.classList.add("open");
const dropdownCord=dropdown.getBoundingClientRect()//will get an domrectobject for each dropdown, we can see the dimensions and stored in a variable, dropdownCord is an object now and we need to get the height and width from it , so that we can make a background of that size
//store that in a object
const cords={
    height:dropdownCord.height,
    width:dropdownCord.width,
        //we need to adjust the top and left of dropdownBackground since its a positon absolute
    top: dropdownCord.top,
    left: dropdownCord.left
}

dropdownBackgroundEl.style.cssText=
`
 height:${cords.height}px;
 width:${cords.width}px;
 top: ${cords.top}px;
 left: ${cords.left}px;
`

}
//we have to apply this height and width to dropdownBackgroundEl
//we got width and height in JS , to convert it in to CSS , add style.cssText
//add backticks since we have more than one property
/*semiocolon after pixel is mandatory*/

//each dropdown has a different width and height
//in JS we have a inbuit method called getBoundingClientRect()
//in HTML everything is box shaped
//getBoundingClientRect() will give us the length and width of the elements , so we can put the element of which element we need to find the height and width,and distance from window etc... here its dropdown
//we need to now chnage the dropdwonbackground width and height equal to the dropdown width and height we get from the inbuilt method




/************************************************************************* */

//Event Listener

navListItemsEl.forEach((item) => {
    item.addEventListener("mouseenter", showDropDown);
});

navListItemsEl.forEach((item) => {
    item.addEventListener("mouseleave", hideDropDown);
});
