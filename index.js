let submit=document.querySelector('.submit');
let num;
document.addEventListener('click',()=>{
    if(parseInt(document.activeElement.innerText)){
    num=document.activeElement.innerText;
    console.log(num);
    }
})
submit.addEventListener('click',()=>{
    let rating=document.querySelector('.rating');
    rating.style.display='none';
    submit.style.display='none';
    document.querySelector('.photo').style.display='flex'
    document.getElementById('rate').innerText=num
    document.getElementById('switch').style.display='none'
})