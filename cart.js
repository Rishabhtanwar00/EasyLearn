let products=[
    {
        name:'Python',
        tag:'python',
        price: 4,
        incart: 0
    },
    {
        name:'React',
        tag:'react',
        price: 5,
        incart: 0
    },
    {
        name:'Frontend Web',
        tag:'frontendweb',
        price: 7,
        incart: 0
    },
    {
        name:'FullStack Web',
        tag:'fullstackweb',
        price: 7,
        incart: 0
    },
    {
        name:'Java',
        tag:'java',
        price: 4,
        incart: 0
    }
]

let carts=document.querySelectorAll('.add-cart');

for(let i=0;i<carts.length;i++){
    carts[i].addEventListener('click',() =>{
        cartNumbers(products[i]);
        totalcost(products[i]);
    })
}
function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent=productNumbers;
    }
}

function cartNumbers(product){
    
    let productNumbers=localStorage.getItem('cartNumbers');
    
    productNumbers=parseInt(productNumbers);

   if(productNumbers){
    localStorage.setItem('cartNumbers',productNumbers +1);
    document.querySelector('.cart span').textContent=productNumbers +1;
   }
   else{
    localStorage.setItem('cartNumbers',1);
    document.querySelector('.cart span').textContent=1;
   }

   setItems(product);
}

function setItems(product){
    let cartItems =localStorage.getItem('productsincart');
    cartItems=JSON.parse(cartItems)
    if(cartItems!=null){
        if(cartItems[product.tag]==undefined){
            cartItems={
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].incart +=1;
    }
    else{
       product.incart=1;
       cartItems={
           [product.tag] : product
        }
    }
     localStorage.setItem("productsincart",JSON.stringify(cartItems))
}

function totalcost(product){
    let cartcost=localStorage.getItem('totalcost');
    
    if(cartcost!=null){
        cartcost=parseInt(cartcost);
        localStorage.setItem('totalcost',cartcost+product.price);
    }
    else{
    localStorage.setItem('totalcost',product.price);
    }
}
let  productheader=document.querySelector('.product-header');
function displayCart(){
   let cartItems=localStorage.getItem('productsincart');
   cartItems=JSON.parse(cartItems);
   let productcontainer=document.querySelector('.products');
   let cartcost=localStorage.getItem('totalcost');
   if( cartItems && productcontainer){
        productcontainer.innerHTML='';
        Object.values(cartItems).map(item =>{
            productcontainer.innerHTML += `
            <div class="product">
               <div class="producttitle">
                  <img src="C:\\Users\\Administrator\\Desktop\\website_project\\images\\${item.tag}.png">
                  <span>${item.name} Developer</span>
               </div>
               <div >$${item.price}.00</div>
               <div class="deleteitem">
                 <span>${item.incart}</span>
                 <a class="delete-btn"><i class="fas fa-trash-alt"></i></a>
               </div>
               <div >
                  $${item.incart*item.price}.00
               </div>
            </div>
            `;
        });
        productcontainer.innerHTML+=`
          <div class="basketTotalcontainer">
               <h4 class='basketTotalTitle'>
               Total : $${cartcost}.00
               </h4>
               <h4 class='checkout'>
                 <a>CheckOut</a>
               </h4>
          </div>


        `;
   }
   else{
    productcontainer.innerHTML = `
    <div class="emptycart">
       <img src="emptycart.png">
       <h2>No Item</h2>
    </div>
    `;
    productheader.style.display="none";
   }
}
var deletebutton=document.querySelector('.delete-btn');
var product=document.querySelectorAll('.product')

for(let i=0;i<product.length;i++){
    deletebutton.addEventListener('mouseover',() =>{
        console.log("hhh")
    })
}

onLoadCartNumbers();
displayCart();
