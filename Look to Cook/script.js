let currentIndex = 0;
let recipes = [];

const foodImage = document.getElementById("foodImage");
const recipeTitle = document.getElementById("recipeTitle");
const recipeDescription = document.getElementById("recipeDescription");

fetch('./datas/populer.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('JSON dosyası yüklenemedi!');
        }
        return response.json();
    })
    .then(data => {
      recipes = data;
      changeSlide(0);
    })
    .catch(error => {
        console.error('Hata:', error);
    });

function changeSlide(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = Object.keys(recipes).length - 1;
  } else if (currentIndex >= Object.keys(recipes).length) {
    currentIndex = 0;
  }

  foodImage.src = recipes[currentIndex].image;
  recipeTitle.textContent = recipes[currentIndex].title;
  recipeDescription.innerHTML = recipes[currentIndex].description;
  const recipeLink = document.getElementById("recipeLink");
  recipeLink.href = recipes[currentIndex].link;
}

fetch('./datas/en_yeniler.json')
  .then(response => {
    if (!response.ok) {
        throw new Error('JSON dosyası yüklenemedi!');
    }
    return response.json();
  })
  .then(data => {
    const mainDiv = document.getElementById('cards-container');

    data.forEach(item =>{
      const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <div class="card-info">
                <div class="card-badge">${item.badge}</div>
                <a href="/tabs/recipes/tarifler.html?category=${item.category}"><div class="card-category">${item.category}</div></a>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-author">${item.author}</p>
                <div class="card-details">
                    <span class="card-time">${item.time}</span>
                    <span class="card-rating">${item.rating}</span>
                </div>
            </div>
        `;
        
        mainDiv.appendChild(card);
    })
    .catch(error => {
      console.error('Hata:', error);
  });
  })