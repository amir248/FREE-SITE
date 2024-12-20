function mFooter(){
    document.querySelector('.menuFooter').addEventListener('click',()=>{
        const mFooter=document.createElement('div');
        mFooter.classList.add('mFooter');
        document.querySelector('body').append(mFooter);

        setTimeout(()=>{
            document.querySelector('.mFooter').style.cssText=`
            height:100vh;
            opacity:1;
            `;
        },100);
    });
    
    return console.log('It\'s menu in Footer');

}
mFooter();