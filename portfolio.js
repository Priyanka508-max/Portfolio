let menuIcon=document.querySelector('#mrnu-icon');
let navbar=document.querySelector('#naavbar');
let sections=document.querySelector('section');
let navlinks=document.querySelector('header nav a');
window.onscroll=()=>{
sections.foreach(sec=>{
let top=window.scrollY;
let offset=sec.offsetTop-150;
let height=sec.offsetHeight;
let id= sec.getAttribute('id');

if(top>= offset &&top<offset+height){
    navlinks.foreach(link=>{
        link.classlist.remove('active');
        document.classlist.remove('active');
        document.querySelector('header nav a'[href='+id+ ' ]).classlist.add('active');
    })


}
})
}
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function send(){
    // console.log("function call");
var name=document.getElementById("name").value;
var email=document.getElementById("email").value;
var contact=document.getElementById("contact").value;
var sub=document.getElementById("sub").value;
var message=document.getElementById("message").value;

var body="Name:"+name+"<br/> Email:"+email+"<br/> Contact Number:"+contact+"<br/> Message:"+message;
console.log(body);
    Email.send({
        SecureToken :"0ebb1882-29a9-4f9b-ac88-5320cff5811f ",
        // Host : "smtp.elasticemail.com",
        // Username : "khairnarpriyanka100@gmail.com",
        // Password : "202ECA284D5160BA72A2516D760F243F71D9",
        To : 'khairnarpriyanka100@gmail.com',
        From : "khairnarpriyanka100@gmail.com",
        Subject : sub,
        Body :body
    }).then(
      message => {
        if(message=='OK'){
            swal("Successfully Send!", "Your Data Send Successfully!", "success");
        }
        else{
            swal("Something Wrong!", "Your Data is not Received!", "error");
        }
      }
    );
 }
 const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const Message = document.getElementById("message");

function sendEmail()
{
    const bodyMessage = `Full Name: ${fullName.value}<br>  Email: ${email.value}<br> Contact No: ${phone.value}<br> Message: ${Message.value}`

    Email.send({
        SecureToken: "3badb641-8196-4cde-8e44-96608ec3adcd",
        // Host : "smtp.elasticemail.com",
        // Username : "bharatilakshmi27@gmail.com",
        // Password : "1910A42C5B6B8447FFFF7A8B7BDB895892AF",
        To : 'bharatilakshmi27@gmail.com',
        From : "bharatilakshmi27@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK")
        {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}

function checkInputs()
{
    const items = document.querySelectorAll(".item");

    for(const item of items)
    {
        if(item.value == "")
        {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if(items[1].value != "")
        {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        })

        item.addEventListener("keyup", () => {
            if(item.value != "")
            {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }

            else
            {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        })
    }
}

function checkEmail()
{
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");


    if(!email.value.match(emailRegex))
    {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if(email.value != "")
        {
            errorTxtEmail.innerText = "Enter a valid email address";
        }

        else
        {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }

    else
    {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs()

    if(!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !Message.classList.contains("error") )
    {
        sendEmail();

        form.reset();
        return false;
    }


    
});



