const searchFood = () => {
  const input = document.getElementById("search-input");
  const inputValue = input.value;
  input.value = "";

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMeal(data.meals));
};

const showFood = document.getElementById("show-food");
const displayMeal = (meals) => {
  // for (const meal of meals.meals) {
  //   const div = document.createElement('div');
  //   div.innerHTML = `
  //     <img class="img-fluid" src="${meal.strMealThumb}">
  //     <p>${meal.strMeal}</p>
  //   `
  //   showFood.appendChild(div);
  // }

  meals.forEach((meal) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <img onclick="loadDetailMeals(${meal.idMeal})" class="img-fluid" src="${meal.strMealThumb}">
      <p>${meal.strMeal}</p>
    `;
    showFood.appendChild(div);
  });
};

const loadDetailMeals = (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  fetch(url)
    .then(response => response.json())
    .then(data => showDetailMeals(data.meals))
}

const showDetailMeals = (meals) => {
  meals.forEach(meal => {
    const detailFood = document.getElementById('detail-food');
    const div = document.createElement("div");
    div.innerHTML = `
      <img class="img-fluid" src="${meal.strMealThumb}">
      <h3>${meal.strMeal}</h3>
      <p>${meal.strInstructions.slice(0, 200)}</p>
    `;
    detailFood.appendChild(div);
  });
}