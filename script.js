//Select all keys
const keys = document.querySelectorAll('.btn-item');

//Select num
function selectNum(event) {
  //keyCode
  let numkeyCode = getKeyCode(event);
  //typed or pressed key
  const key = document.querySelector(`[data-code="${numkeyCode}"]`);
  console.log(key);
}

function getKeyCode(event) {
  let keyCode;

  const isKeyboard = event.type === 'keydown';
  if (isKeyboard) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.code;
  }
  return keyCode;
}

//click with mouse
keys.forEach(function (key) {
  key.addEventListener('click', selectNum);
});

//keybord type
window.addEventListener('keydown', selectNum);
