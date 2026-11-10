async function init() {
    const response = await fetch('/products.json');

    const adatok = await response.json();

    const webshopName=document.getElementsByTagName('h1')[0];
    webshopName.textContent=adatok.shopName;
    const body = document.getElementById('body');
    for (const product of adatok.products) {
        const col=document.createElement('div');
        col.classList.add("col-sm-12");
        col.classList.add("col-md-6");
        col.classList.add("col-lg-4");

        const card=document.createElement('div');
        card.classList.add('card');
        card.style.Width='100 px';
        
        const img=document.createElement('img');
        img.src=product.img;
        img.classList.add('card-img-top');
        card.appendChild(img);
        
        const cardBody=document.createElement('div');
        card.classList.add('card-body');
        
        const name=document.createElement('h5');
        name.classList.add('card-title');
        name.textContent=product.name;
        cardBody.appendChild(name);

        
        const price=document.createElement('p');
        price.textContent=product.price;
        cardBody.appendChild(price);


        const btn=document.createElement('button');
        btn.textContent='reservation';
        //btn.addEventListener('click',click());
        cardBody.appendChild(btn);
        card.appendChild(cardBody);
        col.appendChild(card);
        body.appendChild(col);
        
    }
    const btns=document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.addEventListener('click',()=>{
            const output=document.getElementById('reserveAlert');
            output.hidden=false;
            setTimeout(()=>{
                output.hidden=true;
            },3000);
        });
    });
}
init();






