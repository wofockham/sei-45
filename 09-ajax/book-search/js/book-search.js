const fetchCover = function (event) {
  event.preventDefault(); // don't leave this page
  console.log(event);
  const title = document.getElementById('title').value;
  console.log('getting cover for', title);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=title:${ title }`);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    const data = JSON.parse(xhr.responseText);
    const cover = data.items[0].volumeInfo.imageLinks.thumbnail;
    document.getElementById('cover').setAttribute('src', cover);
  };
};

document.querySelector('form').addEventListener('submit', fetchCover);
