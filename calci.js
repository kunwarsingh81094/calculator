let string ="";
let btn = document.querySelectorAll(".button");
Array.from(btn).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == '=')
        {
            string=solveExpression(string);
            document.querySelector('input').value=string;
        }
else if(e.target.innerHTML == 'c')
{
    string=" ";
    document.querySelector('input').value=string;
}
else if(e.target.innerHTML == 'm+')
{
    string = string+(+100);
    document.querySelector('input').value=string;
    
}

else if(e.target.innerHTML == 'm-')
{
    string = string-(100);
    document.querySelector('input').value=string;
    
}

else{
    console.log(e.target);
    string = string+e.target.innerHTML;
    document.querySelector('input').value=string;
}


}

    )

})
function solveExpression(exp) {
    let res;
    try {
        res = eval(exp) || 0;
    } catch (e) {
        return "Error";
    }
    return res;
}

