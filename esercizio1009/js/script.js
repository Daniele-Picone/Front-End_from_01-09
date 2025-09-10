

const productCatalog = [
  { id: 1, name: "Quaderno", price: 3, imageUrl: "https://picsum.photos/300/200" },
  { id: 2, name: "Matita", price: 1, imageUrl: "https://picsum.photos/300/201" },
  { id: 3, name: "Penna a sfera", price: 2, imageUrl: "https://picsum.photos/300/202" },
  { id: 4, name: "Zaino", price: 25, imageUrl: "https://picsum.photos/300/203" },
  { id: 5, name: "Astuccio", price: 7, imageUrl: "https://picsum.photos/300/204" },
  { id: 6, name: "Righello", price: 2, imageUrl: "https://picsum.photos/300/205" },
  { id: 8, name: "Gomma da cancellare", price: 1, imageUrl: "https://picsum.photos/300/206" },
  { id: 9, name: "Evidenziatore", price: 2, imageUrl: "https://picsum.photos/300/207" },
  { id: 10, name: "Forbici", price: 4, imageUrl: "https://picsum.photos/300/208" },
  { id: 11, name: "Colla stick", price: 2, imageUrl: "https://picsum.photos/300/209" },
  { id: 12, name: "Cartellina", price: 3, imageUrl: "https://picsum.photos/300/210" },
  { id: 13, name: "Block notes", price: 5, imageUrl: "https://picsum.photos/300/199" },
  { id: 14, name: "Calcolatrice", price: 15, imageUrl: "https://picsum.photos/300/211" },
  { id: 15, name: "Scrivania", price: 120, imageUrl: "https://picsum.photos/300/198" }
];
const cart= []

let cardWrapper = document.querySelector('.card_wrapper')

for(let product of productCatalog){
    
    let card = document.createElement('div');
    card.classList.add('card')
    card.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h4> ${product.name} </h4>
        <p> ${product.price} €</p>
      <button data-id="${product.id}" > aggiungi al carrello </button>

    `
    
    cardWrapper.appendChild(card)

}

