const toggleAccordian = () => {
    const accordianElements = document.getElementsByClassName('accordian');
    for (let i = 0; i < accordianElements.length; i++) {
        accordianElements[i].addEventListener('click', () => {
            const panel = accordianElements[i].nextElementSibling;
            const computedStyle = window.getComputedStyle(panel);
            if (computedStyle.display === 'none') {
                panel.style.display = 'block';
            } else {
                panel.style.display = 'none';
            }
        });
    }
}


const creatAccordian = () => {
    return `<div class="accordian">Accordian</div>
    <div class="panel">
        <p> Panel content .... blah blah,,, lorem ipsum lorem ipsum</p>
    </div>`
};

const getAccordians = (totalAccordians) => {
    let allAccordians = '';
    for (let i = 0; i < totalAccordians; i++) {
        allAccordians += creatAccordian();
    }
    return allAccordians;
};

 const app = document.querySelector('.app');
 app.innerHTML = getAccordians(3);
 toggleAccordian();




