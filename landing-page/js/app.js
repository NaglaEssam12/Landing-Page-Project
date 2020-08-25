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
let idx = 0;
let flag = false;
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


  
window.addEventListener('scroll',function(event){
      for(let i = 0 ; i < sectionElements.length ; i++)
          {
              var mySection = document.querySelector('#section' + (i+1));
              //I used getBoundingClientRect() to deteremine the top of each section.
             if(mySection.getBoundingClientRect().top < window.innerHeight)
                {
                    index = i;
                    listItems[i].firstChild.classList.add('your-active-class');
                    sectionElements[i].classList.add('your-active-class');
                    scrollArr[i] = (i + 1);

                }         
          }
    //This loop to remove non active section
    for(let j = 0 ; j < sectionElements.length ;j++)
        {
            if(j !== index && scrollArr[j] !== 0)
                {
                    listItems[j].firstChild.classList.remove('your-active-class'); 
                    sectionElements[j].classList.remove('your-active-class');
                     sectionElements[j].removeAttribute('class');
                   scrollArr[j] = 0;
                }
        }
    
});


  for(let i = 0 ; i < sectionElements.length ; i++){
         listItems[i].addEventListener('click', function (event) {
          event.preventDefault();
             var element = sectionElements[i];
          element.classList.add('your-active-class');
          listItems[i].firstChild.classList.add('your-active-class');
          sectionElements[i].scrollIntoView({behavior: "smooth"}); // to make the scrolling smooth
          //These lines to differeniate which section has been clicked.
          testArr[i] = idx;
          idx++;
           
        //This loop to know which section has been clicked before to make it not active.  
    for(let j = 0 ; j < sectionElements.length ;j++)
        {
            if(j !== i && testArr[j] !== 0)
                {
                   sectionElements[j].classList.remove('your-active-class'); 
                   sectionElements[j].removeAttribute('class');
                   listItems[j].firstChild.classList.remove('your-active-class');
                }
            
        }
    });
      }
