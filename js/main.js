// Enter your code below.
// Step 1: Identify the Event (click, mouseover, mouseout)
let clickCounter = 0;

// Step 2: Identify the element where the event is going to happen
const parent = document.querySelector('.javascript-resources');

// Step 3: Get the element in your hand by selecting it with querySelector
const showButton = document.querySelector('#show-resources');

// Step 4: Create an event listener for that element (step 3) for the event identified in Step 1
showButton.addEventListener('click', () => {
    // Step 5: Create an event handler function
    parent.classList.toggle('d-none');
    // Step 6: Define what should happen after the event occurs
});

// Add event listener for 'mouseover' event to bold text
parent.addEventListener('mouseover', (event) => {
    // Step 5: Create event handler function
    if (event.target.classList.contains('list-group-item')) {
        // Step 6: Define what happens - add bold class
        event.target.classList.add('fw-bold');
    }
});

// Add event listener for 'mouseout' event to remove bold text
parent.addEventListener('mouseout', (event) => {
    // Step 5: Create event handler function
    if (event.target.classList.contains('list-group-item')) {
        // Step 6: Define what happens - remove bold class
        event.target.classList.remove('fw-bold');
    }
});

// Add event listener for 'click' event to italicize text
parent.addEventListener('click', (event) => {
    // Step 5: Create event handler function
    if (event.target.classList.contains('list-group-item')) {
        // Step 6: Define what happens - italicize text
        event.target.classList.add('fst-italic');
        clickCounter++;
        // Add click counter inside the clicked element
        event.target.innerHTML = `${event.target.innerText} (Clicked ${clickCounter} times)`;
    }
});
