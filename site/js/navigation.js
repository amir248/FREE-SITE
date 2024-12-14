function nav(){
    if(window.innerWidth<700){
        document.querySelector('#navigation').addEventListener('click',openMenu); 
    }
}
nav();
const menuList=`
<h3><a href="#">About Us</a></h3>
<h3><a href="#">Services</a></h3>
<h3><a href="#">Use Cases</a></h3>
<h3><a href="#">Pricing</a></h3>
<h3><a href="https://qucu.ru/blozhik/">Blog</a></h3>
<h3><a href="https://api.whatsapp.com/send/?phone=79528885656&text=Hi%21+%EF%BF%BD+I%27m+interested+...&type=phone_number&app_absent=0">get Consultation</a></h3>
`;
function openMenu(){
    document.querySelector('#navigation > span:nth-child(2)').style.cssText=`
        transform:rotate(30deg);
        transition: ease-out 1s ;
    `;
    document.querySelector('#navigation > span:nth-child(3)').style.cssText=`
        display:none;
        transition: ease-out 1s ;
    `;
    document.querySelector('#navigation > span:nth-child(4)').style.cssText=`
        transform:rotate(-30deg);
        transition: ease-out 1s ;
    `;
    const menuOpen=document.createElement('div');
    menuOpen.classList.add("openMenu");
    menuOpen.innerHTML=`${menuList}`;
    document.querySelector('body').prepend(menuOpen);
    setTimeout(()=>{
        document.querySelector('.openMenu').style.cssText=`height:100vh;font-size:33px;opacity:1;`;
    },10);
    document.querySelector('.openMenu').addEventListener('click',()=>{
        document.querySelector('.openMenu').style.cssText=`height:0;top:100vh;`;
        document.querySelector('#navigation > span:nth-child(2)').style.cssText=`
        transform:rotate(0deg);
        transition: ease-out 1s ;
    `;
    document.querySelector('#navigation > span:nth-child(3)').style.cssText=`
        display:block;
        transition: ease-out 1s ;
    `;
    document.querySelector('#navigation > span:nth-child(4)').style.cssText=`
        transform:rotate(0deg);
        transition: ease-out 1s ;
    `;
        setTimeout(()=>{
            document.querySelector('.openMenu').remove();
        },377);
    });
};//openMenu

