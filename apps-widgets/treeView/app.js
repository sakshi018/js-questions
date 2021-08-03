const defaultMargin = 14;
const treeObject = {
    root:
    {
        child1: {
            child11: {
                child111: {},
                child112: {}
            },
            child12: {
                child121: {}
            }
        },
        child2: {}
    }
};

const rootElement = document.querySelector('.root')
const input = document.querySelector('.search');
const error = document.querySelector('.error');
const fragment = document.createDocumentFragment();

class TreeView {
    treeMap;
    constructor() {
        this.treeMap = {};
        this.renderTree(treeObject, 0);
        rootElement.append(fragment);
        this.inputListener();
    }

    renderTree(treeObject, counter) {
        const keys = Object.keys(treeObject);
        keys.forEach(item => {
            if (typeof item === 'string') {
                let color = 'red';
                if (Object.keys(treeObject[item]).length === 0) {
                    color = 'green';
                }
                const element = this.renderNode(item, counter, color);
                fragment.append(element);
                this.renderTree(treeObject[item], counter + 20);
                this.treeMap[item] = treeObject;
            }
        });
    }

    renderNode(key, counter, color) {
        const element = document.createElement('div');
        element.style.marginLeft = `${defaultMargin + counter}px`;
        element.style.color = color;
        element.innerText = key;
        element.id = key;
        if (counter === 0) {
            element.style.textDecoration = 'underline';
        }
        return element;
    }

    inputListener() {
        input.addEventListener('input', this.debounce(this.onInput.bind(this)));
    }

    onInput(event) {
        this.changeBackgroundColor(this.treeMap, 'white');
        error.innerText = '';
        const searchText = event.target.value;
        if (searchText in this.treeMap) {
            this.changeBackgroundColor(this.treeMap[searchText], 'yellow');
            console.log(this.treeMap[searchText]);
        } else {
            error.innerText = 'Search text does not match';
        }
    }

    changeBackgroundColor(map, color) {
        const keys = Object.keys(map);
        keys.forEach(item => {
            if (typeof item === 'string') {
                const element = document.getElementById(item);
                element.style.background = color;
                this.changeBackgroundColor(map[item], color);
            }
        });
    }

    debounce(callback, delay = 250) {
        let timerId;

        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => callback.apply(this, args), delay);
        };
    }
}

const treeView = new TreeView();
