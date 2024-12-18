document.querySelector('.center > div:nth-child(1) > button:nth-child(3)').addEventListener('click',()=>{
    window.location.href=`https://wa.me/79528885656?text=Hi!%20%F0%9F%91%8B%20I'm%20interested%20...`;
    // window.location.href=`https://wa.clck.bar/79528885656?text=Hi,%20%F0%9F%91%8B%20I'm%20interested%20...`;
});
document.querySelector('.letsMake > div:nth-child(1) > button:nth-child(3)').addEventListener('click',()=>{
    window.location.href=`https://wa.me/79528885656?text=Hi!%20!!!%20I'm%20interested%20...`;

});
document.querySelector('.contactUs > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1)').addEventListener('click',()=>{
    window.location.href=`https://wa.me/79528885656?text=Hi!%20^_^%20I'm%20interested%20...`;

});
function first(){
    return new Promise ((resolve)=>{
        function oK(){
            console.log('first!! ');

        }
        setTimeout(()=>{
            resolve(oK());
        },3000)
    });
}
function second(){
    return new Promise ((resolve)=>{
        function oK(){
            console.log('second!!! ');
        }
    resolve(oK());
    });
}
function nav(){
    return new Promise((resolve)=>{
        function navig(){
            const nav=document.createElement('script');
            nav.src='site/js/navigation.js';
            document.querySelector('body').append(nav);
        }
        resolve(navig());
    });
};//nav
function date(){
    return new Promise((resolve)=>{
        function datee(){
            const date=document.createElement('script');
            date.src='site/js/date.js';
            document.querySelector('body').append(date);
        }
        resolve(datee());
    });
}
function dropDownList(){
    return new Promise((resolve)=>{
        function list(){
            const list=document.createElement('script');
        list.src='site/js/dropDownList.js';
        document.querySelector('body').append(list);
        }
        resolve(list());
    });
};//dropDownList()
async function main(){
    await nav();
    await dropDownList();
    await date();
    await first();
    await second();
}
main();