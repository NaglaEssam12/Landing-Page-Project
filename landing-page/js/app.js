/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/



let sectionElements=[]; 
let activeTest = 0;
let i = 0;
let index = 0;
let testArr = [0 , 0 , 0 , 0];    //this array to know which section have been clicked.
let scrollArr = [0 , 0 , 0 , 0];  //this array to know which section have been scrolled to.
var arr=[];                       //this array to know the top and bottom of every section.
/* These lines of code to put all sections of page in single data structure*/
sectionElements.push(document.querySelector('#section1'));
sectionElements.push(document.querySelector('#section2'));
sectionElements.push(document.querySelector('#section3'));
sectionElements.push(document.querySelector('#section4'));



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0 ; i < sectionElements.length ;i++)
    {
        const newItem = document.createElement('li');
        const unorderedList = document.querySelector('#navbar__list');
        unorderedList.appendChild(newItem);
        newItem.innerHTML = '<a class="menu__link" href="#section' + (i+1) + '">Section ' + (i+1) +  '</a>';
    }

//To carry All list Items that we have created.
const listItems = document.querySelectorAll('li');
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


    
window.addEventListener('scroll',function(){
      for(let i = 0 ; i < sectionElements.length ; i++)
          {
              var mySection = document.querySelector('#section' + (i+1));
              //I used getBoundingClientRect() to deteremine the top of each section.
             if(mySection.getBoundingClientRect().top < window.innerHeight)
                {
                    index = i;
                    listItems[i].firstChild.classList.add('your-active-class');
                    scrollArr[i] = (i + 1);

                }         
          }
    //This loop to remove non active section
    for(let j = 0 ; j < sectionElements.length ;j++)
        {
            if(j !== index && scrollArr[j] !== 0)
                {
                    listItems[j].firstChild.classList.remove('your-active-class'); 
                   scrollArr[j] = 0;
                }
        }
    
});




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

function clickItem(item , element , index)
{
   
    
    item.addEventListener('click',function(){
    element.classList.add('active');
        //These lines to differeniate which section has been clicked.
            activeTest = i;
            testArr[index] = (i+1);
            i++;
        //This loop to know which section has been clicked before to make it not active.  
    for(let j = 0 ; j < sectionElements.length ;j++)
        {
           // console.log(testArr);
            if(j !== index && testArr[j] !== 0)
                {
                   sectionElements[j].classList.remove('active'); 
                   sectionElements[j].removeAttribute('class');
                }
        }
    });
    
    
}
clickItem(listItems[0],sectionElements[0],0);
clickItem(listItems[1],sectionElements[1],1);
clickItem(listItems[2],sectionElements[2],2);
clickItem(listItems[3],sectionElements[3],3);



