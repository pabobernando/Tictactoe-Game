let pemain = 'x';

document.getElementById('ket').innerHTML = ' Player Move : ' + pemain;
function kliktombol(x) {
  document.getElementById('btn' + x + 'depan').style.transform = 'perspective(600px) rotateY(-180deg)';
  document.getElementById('btn' + x + 'belakang').style.transform = 'perspective(600px) rotateY(0deg)';
  document.getElementById('btn' + x + 'belakang').innerHTML = pemain;
  document.getElementById('btn' + x + 'belakang').value = pemain;
  document.getElementById('btn' + x + 'belakang').disabled = 'disabled';

  if (pemain === 'x') {
    document.getElementById('ket').innerHTML = 'Player Move : O';
    cekPemenang();
    pemain = 'o';
  } else {
    document.getElementById('ket').innerHTML = 'Player Move : X';
    cekPemenang();
    pemain = 'x';
  }
}

function cekPemenang() {
  if (document.getElementById('btn1belakang').value === pemain && document.getElementById('btn2belakang').value === pemain && document.getElementById('btn3belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn4belakang').value === pemain && document.getElementById('btn5belakang').value === pemain && document.getElementById('btn6belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn7belakang').value === pemain && document.getElementById('btn8belakang').value === pemain && document.getElementById('btn9belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn1belakang').value === pemain && document.getElementById('btn4belakang').value === pemain && document.getElementById('btn7belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn2belakang').value === pemain && document.getElementById('btn5belakang').value === pemain && document.getElementById('btn8belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn3belakang').value === pemain && document.getElementById('btn6belakang').value === pemain && document.getElementById('btn9belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn1belakang').value === pemain && document.getElementById('btn5belakang').value === pemain && document.getElementById('btn9belakang').value === pemain) {
    menang();
  } else if (document.getElementById('btn3belakang').value === pemain && document.getElementById('btn5belakang').value === pemain && document.getElementById('btn7belakang').value === pemain) {
    menang();
  }
}
function menang() {
  document.getElementById('ket').innerHTML = ' Winner : ' + pemain;
  for (i = 1; i < 10; i++) {
    document.getElementById('btn' + i + 'depan').disabled = 'disabled';
  }
}
