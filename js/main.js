// Enter your code below.
let clickCounter = 0;

const parent = document.querySelector('.javascript-resources');
const showButton = document.querySelector('#show-resources');

showButton.addEventListener('click', () => {
    parent.classList.toggle('d-none');
});

parent.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fw-bold');
    }
});

parent.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.remove('fw-bold');
    }
});

parent.addEventListener('click', (event) => {
    if (event.target.classList.contains('list-group-item')) {
        event.target.classList.add('fst-italic');
        clickCounter++;
        event.target.innerHTML = `${event.target.innerText} (Clicked ${clickCounter} times)`;
    }
});
