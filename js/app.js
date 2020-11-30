const button = document.querySelector('.btn-start');
const calendarContainer = document.querySelector('.container');

const calendarMonths = 24;

const openDoor = (path, event) => {
    var target = event.target;
    target.parentNode.style.backgroundImage = `url("${path}")`;
    target.style.opacity = "0";
    target.style.backgroundColor = "#333";
}

const createCalendar = () => {
    console.log('test');

    if (calendarContainer.childElementCount == 0) {
        for (let i = 0; i < calendarMonths; i++) {
        const calendarDoor = document.createElement('div');
        calendarDoor.classList.add('image');
        calendarDoor.style.gridArea = "door" + (i + 1);

        const calendarDoorText = document.createElement('div')
        calendarDoorText.classList.add('text');
        
        calendarDoor.appendChild(calendarDoorText);
        calendarContainer.appendChild(calendarDoor);
        
        let picNumber = i + 1;
        calendarDoorText.textContent += `${picNumber}`;

        let picPath = `./img/${picNumber}.jpg`;
        console.log(picPath);

        calendarDoorText.addEventListener('click', openDoor.bind(null, picPath));
        }
    }
}

button.addEventListener('click', createCalendar);