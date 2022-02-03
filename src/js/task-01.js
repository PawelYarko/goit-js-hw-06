const refs = {
    categoriesElem: document.querySelector('#categories'),
    listsOfCategories: document.querySelector('.item'),
};

const categoriesLength = refs.categoriesElem.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const firstTitle = refs.listsOfCategories.firstElementChild.textContent;
console.log(`Category: ${firstTitle}`)
const firstListsLength = refs.listsOfCategories.lastElementChild.children.length;
console.log(`Elements: ${firstListsLength}`);

const secondTitle = refs.listsOfCategories.nextElementSibling.firstElementChild.textContent;
console.log(`Category: ${secondTitle}`);
const secondListsLength = refs.listsOfCategories.nextElementSibling.lastElementChild.children.length;
console.log(`Elements: ${secondListsLength}`);

const thirdTitle = refs.categoriesElem.lastElementChild.firstElementChild.textContent;
console.log(`Category: ${thirdTitle}`);
const thirdListsLength = refs.categoriesElem.lastElementChild.lastElementChild.children.length;
console.log(`Elements: ${thirdListsLength}`);
