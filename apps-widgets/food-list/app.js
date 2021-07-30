/*
  Hi there! Thanks for taking on this code test. The requirements are listed below:
  
  1. Create a "Foods" class or constructor that will take two arguements: a root element and a data object (foodData).
  2. Render all of the items in the data object into the DOM with the root element as the parent
  3. If the user clicks a food item, it should be removed from the list
  
  Rules:
  - Only vanilla JS
  - Feel free to use Google, Bing, DuckDuckGo to look things up
  - Time limit: 30 minutes
*/

const rootElement = document.querySelector('.foods');
const foodData = [
    {
        id: 1,
        image: '🌮',
        name: 'taco'
    },
    {
        id: 2,
        image: '🍔',
        name: 'burger'
    },
    {
        id: 3,
        image: '🍆',
        name: 'eggplant'
    },
    {
        id: 4,
        image: '🍎',
        name: 'apple'
    },
    {
        id: 5,
        image: '🥞',
        name: 'pancakes'
    },
];

class Foods {
    data;
    rootEl;
    constructor(root, foodData) {
        this.rootEl = root;
        this.data = foodData;
        console.log('thisdata', this.data);
    }

    generateList() {
        const fragment = document.createDocumentFragment();
        this.data.forEach(item => {
            if (typeof item === 'object') {
                fragment.appendChild(this.getFoodItem(item));
            }
        })
        this.rootEl.appendChild(fragment);

        this.rootEl.addEventListener('click', event => {
            console.log('event', event);
            const targetEl = event.target;
            targetEl.remove();
        });
    }

    getFoodItem(foodItem) {
        const el = document.createElement('div');
        el.innerText = foodItem.image;
        el.classList.add(foodItem.name);
        return el;
    }
}

const foods = new Foods(rootElement, foodData);
foods.generateList();