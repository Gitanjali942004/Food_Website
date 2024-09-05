let menu=document.querySelector('#menu-bars');
let navbar=document.querySelector('.navbar');
var box;
menu.onclick = () =>
{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section =document.querySelectorAll('section');
let navlinks =document.querySelectorAll('header .navbar a');
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  }
  
//Loader
function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader,3000);
}

window.onload=fadeOut;

//Search Form
function searchform()
{
    document.querySelector('#search-form').classList.toggle('active');
}

function closesearchform()
{
  document.querySelector('#search-form').classList.remove('active');
}
function gotomenu()
{
  document.querySelector('#search-form').classList.remove('active');
  window.location = 'index.html#menu';
}


//SignIn Form
function signinform()
{
    document.querySelector('#signin-form').classList.toggle('active');
}

function closesigninform()
{
  document.querySelector('#signin-form').classList.remove('active');
}

function searchitem()
{
  document.querySelector('#signin-form').classList.remove('active');
}

function gotohome()
{
  document.querySelector('#search-form').classList.toggle('active');
}
//SignIn Form END...

//Review Change Border
function chngborder1()
{
  box= document.getElementById("g1")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  var img1= document.getElementById("imgg1");
  img1.style.borderColor="#99ffdd"
}
function chngborder2()
{
  box= document.getElementById("g2")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  img= document.getElementById("imgg2");
  img.style.borderColor="#99ffdd"
}
function chngborder3()
{
  box= document.getElementById("g3")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  img= document.getElementById("imgg3");
  img.style.borderColor="#99ffdd"
}
function chngborder4()
{
  box= document.getElementById("g4")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  img= document.getElementById("imgg4");
  img.style.borderColor="#99ffdd"
}
function chngborder5()
{
  box= document.getElementById("g5")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  img= document.getElementById("imgg5");
  img.style.borderColor="#99ffdd"

}
function chngborder6()
{
  box= document.getElementById("g6")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  img= document.getElementById("imgg6");
  img.style.borderColor="#99ffdd"
}
function chngborder7()
{
  box= document.getElementById("g7")
  box.style.borderColor="#99ffdd"
  box.style.borderRadius="4rem"
  box.style.height='290px'
  img= document.getElementById("imgg7");
  img.style.borderColor="#99ffdd"
}
//Review Change Border end...

//Review Reverse_change Border 
function newchngborder1()
{
  box= document.getElementById("g1")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  var img1= document.getElementById("imgg1");
  img1.style.borderColor="white"
}
function newchngborder2()
{
  box= document.getElementById("g2")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  img= document.getElementById("imgg2");
  img.style.borderColor="white"
}
function newchngborder3()
{
  box= document.getElementById("g3")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  img= document.getElementById("imgg3");
  img.style.borderColor="white"
}
function newchngborder4()
{
  box= document.getElementById("g4")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  img= document.getElementById("imgg4");
  img.style.borderColor="white"
}
function newchngborder5()
{
  box= document.getElementById("g5")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  img= document.getElementById("imgg5");
  img.style.borderColor="white"
}
function newchngborder6()
{
  box= document.getElementById("g6")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  img= document.getElementById("imgg6");
  img.style.borderColor="white"
}
function newchngborder7()
{
  box= document.getElementById("g7")
  box.style.borderColor="white"
  box.style.borderRadius="0"
  box.style.height='280px'
  img= document.getElementById("imgg7");
  img.style.borderColor="white"
}
//Review Reverse_change Border end.....

//Order Form Validation
function validatename()
{
    var regName = /^[A-Za-z ]+$/;
    var name=document.getElementById('name').value;

      if(name =="")
      {
        document.getElementById('namee').innerHTML="**Please Enter Your Name**";
        return false;
      }
      if(regName.test(name))
      {
        document.getElementById('namee').innerHTML=' ';
      }
      else
      {
        document.getElementById('namee').innerHTML='**Please Enter Character Only**';

      }
      if(name.length<2 || name.length>30)
      {
        document.getElementById('namee').innerHTML="**Name length must be between 2 and 30**";
        return false;
      }
      
 }


 function validatemobile()
 {
  var phoneno = /^[7-9]\d{9}$/;
  var mobileno=document.getElementById('mobile').value;
  if(mobileno == "")
  {
    document.getElementById('mobilee').innerHTML="**Please Enter Your Mobile Number**";
  }
  else if(!mobileno.match(phoneno))
  {
    document.getElementById('mobilee').innerHTML="**Please Enter Valid Mobile Number**";
  }
  else
  {
    document.getElementById('mobilee').innerHTML="  ";
  }
 }

 function validatefoodname()
{
    var regName = /^[A-Za-z ]+$/;
    var foodname=document.getElementById('foodname').value;

      if(foodname =="")
      {
        document.getElementById('foodnamee').innerHTML="**Please Enter Food Name**";
        return false;
      }
      if(regName.test(foodname))
      {
        document.getElementById('foodnamee').innerHTML=' ';
      }
      else
      {
        document.getElementById('foodnamee').innerHTML='**Please Enter Character Only**';
      }
      if(foodname.length<2 || foodname.length>30)
      {
        document.getElementById('foodnamee').innerHTML="**Food Name length must be between 2 and 30**";
        return false;
      }
 }

 function validateextrafood()
{
    var regName = /^[A-Za-z ]+$/;
    var extrafood=document.getElementById('extrafood').value;

      if(extrafood =="")
      {
        document.getElementById('extrafoodd').innerHTML="**Please Enter Food Name**";
        return false;
      }
      if(regName.test(extrafood))
      {
        document.getElementById('extrafoodd').innerHTML=' ';
      }
      else
      {
        document.getElementById('extrafoodd').innerHTML='**Please Enter Character Only**';
      }
      if(extrafood.length<2 || extrafood.length>30)
      {
        document.getElementById('extrafoodd').innerHTML="**Food Name length must be between 2 and 30**";
        return false;
      }
 }

 function validateaddress()
 {
  var regName = /^[A-Za-z ]+$/;
  var address=document.getElementById('address').value;

    if(address =="")
    {
      document.getElementById('addresss').innerHTML="**Please Enter Your Address**";
      return false;
    }
    if(regName.test(address))
    {
      document.getElementById('addresss').innerHTML=' ';
    }
    else
    {
      document.getElementById('addresss').innerHTML='**Please Enter Character Only**';
    }
    if(address.length<2 || address.length>30)
    {
      document.getElementById('addresss').innerHTML="**Address length must be between 2 and 30**";
      return false;
    }
 }

 function validatemessage()
 {
  var regName = /^[A-Za-z ]+$/;
  var message=document.getElementById('message').value;

    if(message =="")
    {
      document.getElementById('messagee').innerHTML="**Please Enter Your Message**";
      return false;
    }
    if(regName.test(message))
    {
      document.getElementById('messagee').innerHTML=' ';
    }
    
    if(message.length<2 || message.length>150)
    {
      document.getElementById('messagee').innerHTML="**Message length must be between 2 and 30**";
      return false;
    }
 }

//Order Form Validation End

//Sign-in  Form Validation

function validateusername()
{
  var regName = /^[A-Za-z ]+$/;
    var name=document.getElementById('username').value;

      if(name =="")
      {
        document.getElementById('usernamee').innerHTML="**Please Enter Your Name**";
        return false;
      }
      if(regName.test(name))
      {
       
        document.getElementById('usernamee').innerHTML=' ';
      }
      else
      {
        document.getElementById('usernamee').innerHTML='**Please Enter Character Only**';

      }
      if(name.length<2 || name.length>30)
      {
        document.getElementById('usernamee').innerHTML="**Name length must be between 2 and 30**";
        return false;
      }
}

function validatepass()
  {  
    var password=document.getElementById('password').value;

    if(password ==" ")
    {
      document.getElementById('passwordd').innerHTML="**Please Enter Your Password**";
      return false;
    }
}

//Sign-in  Form Validation

function validateusername()
{
  var regName = /^[A-Za-z ]+$/;
    var name=document.getElementById('username').value;

      if(name =="")
      {
        document.getElementById('usernamee').innerHTML="**Please Enter Your Name**";
        return false;
      }
      if(regName.test(name))
      {
       
        document.getElementById('usernamee').innerHTML=' ';
      }
      else
      {
        document.getElementById('usernamee').innerHTML='**Please Enter Character Only**';

      }
      if(name.length<2 || name.length>30)
      {
        document.getElementById('usernamee').innerHTML="**Name length must be between 2 and 30**";
        return false;
      }
}

function validatepass()
  {  
    document.getElementById('pwerr').style.color='blue';  
     var pw = window. document. forms.Form. pass. value;   
     
  //check empty password field  
     if(pw == "") 
     {  
     document.getElementById("pwerr").innerHTML = "**Fill the password please!";  
     return false;  
     }  
   
 //minimum password length validation  
  if(pw.length < 8) 
  {  
     document.getElementById("pwerr").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  else {  
     document.getElementById("pwerr").innerHTML = "   Correct Password type";  
  }  
}

function validatepass()
{
  var regName = /^[A-Za-z ]+$/;
    var name=document.getElementById('Password').value;

      if(name =="")
      {
        document.getElementById('passwordd').innerHTML="**Please Enter Your Name**";
        return false;
      }

      if(name == "") 
     {  
     document.getElementById("passwordd").innerHTML = "**Fill the password please!";  
     return false;  
     }  
   
 //minimum password length validation  
  if(name.length < 8) 
  {  
     document.getElementById("passwordd").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  else {  
     document.getElementById("passwordd").innerHTML = "   Correct Password type";  
  }  
}

