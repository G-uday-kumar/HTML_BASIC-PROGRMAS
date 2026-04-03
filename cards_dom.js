let first_name=document.getElementsByTagName("input")[0]
let last_name=document.getElementsByTagName("input")[1]
let contact=document.getElementsByTagName("input")[2]
let email=document.getElementsByTagName("input")[3]

let card=document.getElementsByClassName("card")[0]

let btn=document.getElementsByTagName("button")[0]




btn.addEventListener("click",()=>{

let full_name=document.getElementsByClassName("fn")[0]
let cnt=document.getElementsByClassName("cnt")[0]
let e=document.getElementsByClassName("e")[0]
let cards=document.getElementsByClassName("cards")[0]

let con=confirm("Do you want to submit??")
if (con===true){

    
    if(first_name.value===""||last_name.value===""||(isNaN(contact.value.length<=9||contact.value.length>10))||email.value===""){
        alert("please give a proper input")
    }
    else{
        let f_name=first_name.value+" "+last_name.value
        let f_contact=contact.value
        let f_mail=email.value
        cards.innerHTML +=`
         <div class="card">
            
            <h1>Full Name:- <span class="fn">${f_name}</span></h1>
            <h1>Contact :- <span class="cnt">${f_contact}</span></h1>
            <h1>E-mail:- <span class="e">${f_mail}</span></h1>
        </div>
        `
        // full_name.innerText=first_name.value+" "+last_name.value
        // cnt.innerText=contact.value
        // e.innerText=email.value
        
    }
    }
    else{
        alert("cancelled!!")
    }
})