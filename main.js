const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    content = document.getElementById('content'),
    author = document.getElementById('author');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${amPm}`;

    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function setBg() {
    let hour = new Date().getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?sunrise-1440p")';
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?italy")';
        greeting.textContent = 'Good Afternoon, ';
    } else {
        document.body.style.backgroundImage = 'url("https://source.unsplash.com/1600x900/?night")';
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    }
}



function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}



            localStorage.setItem('name', result.value[0]);
            localStorage.setItem('focus', result.value[1]);


axios.get('https://api.quotable.io/random').then(res => {
    content.textContent = res.data.content;
    author.textContent = res.data.author;
});

showTime();
setBg();
getName();
getFocus();

