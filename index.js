const name = document.getElementById("email")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit',(e) => {

    let messages =[]
    if(email.value===''  || email.value==null)
    {
        messages.push("name required")
    }
    if(pass.value===''  || pass.value==null)
    {
        messages.push("password required")
    }
    if(pass.value.length<=8)
    {
        messages.push("\npassword must be 8 characters.")
    }

    if(messages.length>0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }

})


function validate() {
    if(document.getElementById["email"].value==='')
    {
        alert("empty");
        return false;
    }
    
}

function onclick_function(){
    alert("Successfully Logged In...!")
}




