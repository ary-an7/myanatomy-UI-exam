const name = document.getElementById("email")
const pass = document.getElementById("pass")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener('submit',(e) => {

    let messages =[]
    if(email.value===''  || email.value==null)
    {
        alert("name required")
    }
    if(pass.value===''  || pass.value==null)
    {
        alert("password required")
    }

    if(messages.length>0)
    {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
    if(pass.value!=''  && email.value!='')
    {
        alert("Successfully Logged In...!")
    }

})

function validate() {
    if(document.getElementById["email"].value==='')
    {
        alert("empty");
        return false;
    }
    
}




