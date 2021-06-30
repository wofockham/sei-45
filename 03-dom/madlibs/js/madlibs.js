
const button = document.getElementById('lib-button');

const makeMadLib = function () {
  const noun = document.getElementById('noun').value;
  const adjective = document.getElementById('adjective').value;
  const name = document.getElementById('person').value;

  const story = `${ name } really likes ${ adjective } ${ noun }.`;
  const p = document.createElement('p');
  p.innerText = story;
  document.getElementById('story').appendChild(p);
};

button.addEventListener('click', makeMadLib);
