// getElementsByStyle => (property: string, value: string): Array<HTMLElement>


const getElementsByStyle = (property, value) => {
    const findElements = (element) => {
        const findings = [];
        if(getComputedStyle(element)[property] === value) {
            findings.push(element);
        }
        [...element.children].forEach(node =>  findings.push(...findElements(node)));
        return findings;
    }

return findElements(document.body);
}

//handle different formatting conventions 

const getElementsByStyle = (property, value) => {
    // create a temporary element and get its style
    const tempElement = document.createElement("div"); tempElement.style.display = "none";
    // it might be nice to keep it hidden
    tempElement.style[property] = value; // set the style
    document.body.appendChild(tempElement); // technically it needs to be added to the DOM in order to work
    const formattedValue = getComputedStyle(tempElement)[property]; // get the computed style value
    tempElement.remove(); // remove it if we did add it
    // create a helper function
        const findElements = (element) => {
            const findings = [];
            // see if this element matches
            if (getComputedStyle(element)[property] === formattedValue) {
            findings.push(element); // add it
            }
            // add all children, recursion will stop here if there aren't any child nodes
            [...element.children].forEach(child => findings.push(...findElements(child)));
            return findings;
        }
    // call our helper function
    return findElements(document.body);
    }
