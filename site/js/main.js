document.querySelector('.center > div:nth-child(1) > button:nth-child(3)').addEventListener('click',()=>{
    window.location.href=`https://wa.me/79528885656?text=Hi!%20%F0%9F%91%8B%20I'm%20interested%20...`;
    // window.location.href=`https://wa.clck.bar/79528885656?text=Hi,%20%F0%9F%91%8B%20I'm%20interested%20...`;
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
async function main(){
    await first();
    await second();
}
main();