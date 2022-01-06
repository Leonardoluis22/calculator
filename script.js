let $display = document.querySelector('#display');

function btntypeValue() {
  let btn = document.getElementsByClassName('btn-item');
  let val = null;

  for (let i = 0; i < btn.length; i++) {
    switch (btn[i]) {
      case btn[0]:
        val = clear();
        break;
      case btn[1]:
        val = 'x';
        break;
      case btn[2]:
        val = '%';
        break;
      case btn[3]:
        val = '/';
        break;
      default:
        break;
    }
  }
  return val;
}

document.addEventListener('click', function () {
  let btnValue = btntypeValue();
  alert(btnValue);
});

function clear() {
  $display.textContent = '';
}
