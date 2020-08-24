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
//To know the top and bottom of every section.
function myFunction(section) {
  var arr =[];
  var div = document.getElementById(section);
  var rect = div.getBoundingClientRect();
  x = rect.bottom;
  y = rect.top;
  l = rect.left;
  arr.push(x);
  arr.push(y);
  return arr;
}


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
       
        if(i === 0)
            {
                 newItem.innerHTML ='<a class="menu__link" href="#section1">Section 1</a>';
                
                 
            }
        else if(i === 1)
            {
                 newItem.innerHTML ='<a class="menu__link" href="#section2">Section 2</a>';
            }
        else if(i === 2)
            {
                 newItem.innerHTML ='<a class="menu__link" href="#section3">Section 3</a>';
            }
        else
            {
                 newItem.innerHTML ='<a class="menu__link" href="#section4">Section 4</a>';
                 
            }
    }

//To carry All list Items that we have created.
const listItems = document.querySelectorAll('li');
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


window.addEventListener('scroll',function(){
       let index = 0;
       arr = myFunction("section1") ;
    for(let j = 0 ; j < sectionElements.length ;j++)
        {
            
            if(j !== index && scrollArr[j] !== 0)
                {
                    listItems[j].firstChild.classList.remove('your-active-class'); 
                   scrollArr[j] = 0;
                }
            if(scrollArr[j] !== 0)
            {
                   listItems[j].firstChild.classList.remove('your-active-class'); 
                
            }
        }
    //First Section
    if(Math.abs(arr[0]) <1030 &&Math.abs(arr[0]) >= window.innerHeight && Math.abs(arr[1])<= window.innerHeight )
       {
          
           listItems[0].firstChild.classList.toggle('your-active-class');
           scrollArr[0] = 1;
           index = 0;
           
       }
    //Second Section
      else if(Math.abs(arr[0]) <= window.innerHeight && Math.abs(arr[1])<= window.innerHeight )
       {
           listItems[1].firstChild.classList.toggle('your-active-class');
           scrollArr[1] = 2;
           index = 1;
       }
    //Third Section
    else if(Math.abs(arr[0]) <= window.innerHeight && Math.abs(arr[1])>= window.innerHeight )
       {
           listItems[2].firstChild.classList.toggle('your-active-class');
           scrollArr[2] = 3;
           index = 2;
       }
    //Last Section
    else if(Math.abs(arr[0]) >= window.innerHeight && Math.abs(arr[1])>= window.innerHeight )
        {
           listItems[3].firstChild.classList.toggle('your-active-class');
            scrollArr[3] = 4;
            index = 3;
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
            console.log(testArr);
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



