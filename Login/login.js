var valid_email = false;
var valid_password = false;


const form = document.getElementById('loginForm');
const campos = document.querySelectorAll('.input');
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

function setError(index)
{
    campos[index].style.border = '2px solid #e63636';
}
    
function removeError(index)
{
    campos[index].style.border = '1px solid #11751b';
}

function submit_data(){
    if(valid_email && valid_password)
    {
        window.location.href = "../Dashboard/dashboard.html";
    }
    else
    {
        window.alert("Preencha os campos corretamente");
    }
}

function Email()
{
    if(!emailRegex.test(campos[0].value))
    {
        setError(0)
        valid_email = false;
    }
    else
    {
        removeError(0)
        valid_email = true;
    }

}

function Senha()
{
    if(campos[1].value.length < 8)
    {
        setError(1)
        valid_password = false;
    }
    else
    {
        removeError(1)
        valid_password = true;
    }    
}