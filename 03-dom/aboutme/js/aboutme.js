
document.body.style.fontFamily = 'Arial, sans serif';

const nickname = document.getElementById('nickname');
nickname.innerHTML = 'The Blade';
document.getElementById('favorites').innerHTML = 'cheesecake, butterflies, hotdogs';
document.getElementById('hometown').innerHTML = 'Sydney';

const listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = 'listitem';
}

const bill = document.createElement('img'); // detached DOM node
bill.src = 'http://www.fillmurray.com/250/400';
document.body.appendChild( bill ); // attach the DOM node
