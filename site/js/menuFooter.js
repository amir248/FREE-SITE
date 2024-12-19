function mFooter(){
    document.querySelector('.menuFooter').addEventListener('click',()=>{
        const mFooter=document.createElement('div');
        mFooter.classList.add('mFooter');
        document.querySelector('body').append(mFooter);
    });
    
    return console.log('It\'s menu in Footer');

}
mFooter();