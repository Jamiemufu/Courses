var button = document.querySelector('button')
var body = document.getElementsByTagName('body')[0]

button.addEventListener('click', function () {
  console.log('someone clicked the button?')
  if (body.style.background = 'red') {
    body.style.background = 'white'
  } else {
    body.style.background = 'red'
  }
});
