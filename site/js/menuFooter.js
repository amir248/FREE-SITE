function mFooter(){
    document.querySelector('.menuFooter').addEventListener('click',()=>{
        const mFooter=document.createElement('div');
        mFooter.classList.add('mFooter');
        document.querySelector('body').append(mFooter);
        mFooter.innerHTML=`${menuList}`;
        setTimeout(()=>{
            document.querySelector('.mFooter').style.cssText=`
                height:100vh;
                opacity:1;
            `;

            document.querySelector(".mFooter").style.fontSize="33px";
           
        },100);
        document.querySelector(".mFooter").addEventListener("click",()=>{
            document.querySelector(".mFooter").style.height="0";
            setTimeout(()=>{
                document.querySelector('.mFooter').remove();
            },100);
        })
    });
    
    // return console.log('It\'s menu in Footer '+ menuList);
    
}
mFooter();