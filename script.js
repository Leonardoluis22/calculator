let $display = document.querySelector('#display');

function btntypeV() {
  let btn = document.getElementsByClassName('btn-item');
  let val = null;
  for (let i = 0; i < btn.length; i++) {
    switch (btn[i]) {
      case btn[0]:
        val = clear();
        break;

      default:
        break;
    }
  }
  return val;
}

function clear() {
  $display.value = '';
}

document.addEventListener('click', btntypeV);
