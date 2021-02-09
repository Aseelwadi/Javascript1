 alert("Hello ASAC Student ");  
// var time = prompt (" Whats the time now , Enter the hours just please :) ");
// while(time > 23)
// {
//     time = prompt (" Whats the time now , Enter the hours just please  :) "); 
// }

// var hourtime = '' ;
// if (time < 10) {
//     hourtime = '<img src="https://wallpapercave.com/wp/wp2443609.jpg"/> ';
//   } else if (time < 20) {
//     hourtime = 'Good day <br> +<img src="https://www.wishesmsg.com/wp-content/uploads/good-day-message.jpg"/>';
//   } else {
//     hourtime = 'Good evening <br> +<img src = "https://th.bing.com/th/id/OIP.eLOznSiXHXfhId2V-v33BwHaDY?pid=Api&rs=1"/>';
//   }

// function personAge ( )
// {
// var age = prompt ("Please enter your Age ");
// var agepic = ' '

// if (age != null) {
// if (age <= 15 ){
//     document.write(age +"<h3> ^_^  Enjoy your Chilhood and prepare yourself to be a great person in the future :) <br></h3> ") ;
    
//     agepic = '<img src="https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168_960_720.png"/>'
   
// }
// else if (age >15 && age<50)
// {document.write(age +"<h3> ^_^ you are at the right age to be creative :) <br> </h3>") ;
// agepic = '<img src="https://cdn.pixabay.com/photo/2014/04/02/17/03/freedom-307791_960_720.png"/>'
// }
// else
// {
//     document.write(age +"<h3>^_^ Thank you for every thing you have done . It's time to give advices :) <br></h3> ") ; 
    
    
//     agepic = '<img src="https://cdn.pixabay.com/photo/2018/04/07/20/37/man-3299537_960_720.png"/>'
// }
// }




// document.write(agepic);

// var enjoy = prompt ("Rate your enjoyment at this point from 10");
// var result ='';
// for(var i =1 ; i<enjoy; i++)
// {
//     result= result+agepic;
// }

// document.write(result);
// }
function personAge ( )
{
var age = prompt ("Please enter your Age ");
var agepic = ' '

if (age != null) {
if (age <= 15 ){
    document.write(age +"<h3> ^_^  Enjoy your Chilhood and prepare yourself to be a great person in the future :) <br></h3> ") ;
    
    agepic = '<img src="https://cdn.pixabay.com/photo/2013/07/13/12/43/kids-160168_960_720.png"/>'
   
}
else if (age >15 && age<50)
{document.write(age +"<h3> ^_^ you are at the right age to be creative :) <br> </h3>") ;
agepic = '<img src="https://cdn.pixabay.com/photo/2014/04/02/17/03/freedom-307791_960_720.png"/>'
}
else
{
    document.write(age +"<h3>^_^ Thank you for every thing you have done . It's time to give advices :) <br></h3> ") ; 
    
    
    agepic = '<img src="https://cdn.pixabay.com/photo/2018/04/07/20/37/man-3299537_960_720.png"/>'
}
}




document.write(agepic);

var enjoy = prompt ("Rate your enjoyment at this point from 10");
var result ='';
for(var i =1 ; i<enjoy; i++)
{
    result= result+agepic;
}

document.write(result);
}

personAge();

// function myFunction(a, b) {
//   return a * b;
// }
// var x = myFunction(4, 3);
// document.write ('<h2> another example of Function :</h2> The result is :   '+ a +'*'+b+'=' x);

