const fetchFact = function () {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) {
      return; // Nothing to do yet!
    }

    const data = JSON.parse(xhr.responseText);

    const p = document.createElement('p'); // detached DOM node
    p.innerHTML = data.text;
    document.body.appendChild(p);
  }

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send();
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact(); // First fact is free.
