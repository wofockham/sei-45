const fetchCover = function () {
  const title = document.getElementById('title').value;
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

document.getElementById('search').addEventListener('click', fetchCover);
