// assert { type: "json" } ya no va
// https://stackoverflow.com/questions/70106880/err-import-assertion-type-missing-for-import-of-json-file
import productsList from "./products.json" with { type: "json" };

export function productsListComponent() {
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";

  const list = document.createElement("ul");

  function getProductSortedByPrice(){
    const listaOrdenada = productsList.sort((a, b) =>{
      return a.price - b.price;
    })
   return listaOrdenada;
 }
 const sortedProducts = getProductSortedByPrice();

 sortedProducts.forEach((product) => {
   const listItem = document.createElement('li'); 
   listItem.textContent = `${product.title} - $${product.price}`; 
   list.appendChild(listItem); 
});

  section.appendChild(list);

  return section;
}
