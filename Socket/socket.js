function getData() {
  let x = document.getElementsByClassName('container');
  console.log(x);
  const h1 = document.createElement('h1');
  h1.innerText = 'Socket.Io';
  x.append(h1);
}
getData();
