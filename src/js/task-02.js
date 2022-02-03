const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const createListOfIngredients = ingredients => {
  return ingredients.map((ingredient) =>{
    const list = document.createElement('li');
    list.textContent = ingredient;
    list.classList = 'item';
    return list;
  });
}

const elements = createListOfIngredients(ingredients);
listIngredients.append(...elements);

