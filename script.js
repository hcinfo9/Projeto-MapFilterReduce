const flag =0
const list= document.querySelector(".list-lanches")
const valorTotal=document.querySelector('#valorTotal')
const preco= document.querySelectorAll('.preco-lanche')
const precoTotal= document.querySelector('.valorFinal')


function mostraCardapio(array){
    let MyLy =''
    array.forEach(products => {
        valorTotal.style.display='none'
        MyLy +=`<li class="list-item-lanches">
                  <img class="image-lanche" src="${products.src}">
                  <p>${products.name}</p>
                  <p class="preco-lanche">R$ ${products.price.toFixed(2).replace('.', ',')}</p>
                </li>`
        list.style.display='grid'
        list.innerHTML=MyLy
    });
    
}

function mostrarDesconto(){

    const newPrices =menuOptions.map((products) => ({
        ...products,
       price: products.price * 0.9
       
    }))

    mostraCardapio(newPrices)
 }

 function somarTudo(){
 
    list.style.display= 'none'

    menuOptions.reduce((cont, item) => {
        cont += item.price
        return precoTotal.innerHTML=cont
       
    },0)
    precoTotal.innerHTML= `R$ ${precoTotal.innerHTML.replace('.', ",")}0`
    valorTotal.style.display='block'

 }

 

 function filtrarProdutos(){
    const filterProduct=menuOptions.filter((products) => products.vegan)
    mostraCardapio(filterProduct)
 }
    