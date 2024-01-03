var valid_email = false;
var valid_password = false;
var valid_password_confirm = false;

const form   = document.getElementById('form');
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
    if(valid_email && valid_password && valid_password_confirm)
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
    if(!emailRegex.test(campos[1].value))
    {
        setError(1)
        valid_email = false; 
    }
    else
    {
        removeError(1)
        valid_email = true;
    }

}

function Senha()
{
    if(campos[2].value.length < 8)
    {
        setError(2)
        valid_password = false;
    }
    else
    {
        removeError(2)
        valid_password = true;
    }    
}

function confirmaSenha()
{
    if(campos[3].value == campos[2].value)
    {
        removeError(3);
        valid_password_confirm = true;
    }
    else
    {
        setError(3);
        valid_password_confirm = false;
    }
}

function validaUF()
{
    if (!isNaN(campos[4].value))
    {
        setError(4);
    }
    else
    {
        removeError(4);
    }
}
function validaCidade()
{
    if (!isNaN(campos[5].value))
    {
        setError(5);
    }
    else
    {
        removeError(5);
    }
}

