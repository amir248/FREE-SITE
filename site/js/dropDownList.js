document.querySelector('.consultation > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').addEventListener('click',()=>{
        closeDropList();
        openDropList('#oneSection');
});
document.querySelector('div.consultationClose:nth-child(8) > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').addEventListener('click',()=>{
    closeDropList();
    openDropList("#twoSection");
});
document.querySelector('div.consultationClose:nth-child(9) > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').addEventListener('click',()=>{
    closeDropList();
    openDropList('#threeSection');
});
document.querySelector('div.consultationClose:nth-child(10) > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').addEventListener('click',()=>{
    closeDropList();
    openDropList('#fourSection');
});
document.querySelector('#fiveSection > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').addEventListener('click',()=>{
    closeDropList();
    openDropList('#fiveSection');
});
document.querySelector('div.consultationClose:nth-child(12) > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').addEventListener('click',()=>{
    closeDropList();
    openDropList('#sixSection');
});
function closeDropList(){
    document.querySelector('.consultation > div > h3 > span').innerHTML='+';

    document.querySelector('.consultation > div > p').style.cssText='display:none';
    document.querySelector('.consultation > div > hr').style.display='none';
    document.querySelector('.consultation').classList.add('consultationClose');
    document.querySelector('.consultation > div > p').style.cssText='display:none';
    document.querySelector('.consultation').classList.remove('consultation');
};
function openDropList(x){
    document.querySelector(`${x}`+' > div:nth-child(1) > h3:nth-child(1) > span:nth-child(2)').innerHTML='-';
    document.querySelector(`${x}`).classList.add('consultation');
    
    document.querySelector(`${x}`+' > div:nth-child(1) > p:nth-child(3)').style.cssText='display:block';
    // document.querySelector(`${x}`+'div:nth-child(1) > hr:nth-child(2)').style.display='block';
    document.querySelector(`${x}`).classList.remove('consultationClose');
    // document.querySelector(`${x}`+' > div:nth-child(1) > p:nth-child(3)').style.display='block';
}