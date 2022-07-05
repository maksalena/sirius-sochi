const selector = document.querySelector('.selector');
const imageOut = document.querySelector('.image-out');
const objectName = document.querySelector('.obj-name');
const objectE = document.querySelector('.obj-e');
const objectS = document.querySelector('.obj-s');
const objectG = document.querySelector('.obj-g');
const objEUpgrade = document.querySelector('.obj-eu');
const objSUpgrade = document.querySelector('.obj-su');
const objGUpgrade = document.querySelector('.obj-gu');

for (let key in objects) {
    let option = document.createElement('option');
    option.setAttribute('value', key);
    option.setAttribute('label', key);

    selector.append(option);
}

selector.addEventListener('change', changeImg.bind(this),false);
function changeImg(elem) {
  imageOut.src = "images/" + elem.target.value + ".png";
  const key = elem.target.value;
  console.log(key);
  if (key === undefined) {
      return true;
  }
  objectName.textContent = objects[key]['name'];
  objectE.textContent = objects[key]['E'];
  objectS.textContent = objects[key]['S'];
  objectG.textContent = objects[key]['G'];

  objEUpgrade.textContent = objects[key]['EUp'];
  objSUpgrade.textContent = objects[key]['SUp'];
  objGUpgrade.textContent = objects[key]['GUp'];
}


var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
var result = document.getElementById("res");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
result.innerHTML = Number(slider1.value) + Number(slider2.value) + Number(slider3.value);

slider1.oninput = function() {
    output1.innerHTML = this.value;
    result.innerHTML = Number(slider1.value) + Number(slider2.value) + Number(slider3.value);
}

slider2.oninput = function() {
    output2.innerHTML = this.value;
    result.innerHTML = Number(slider1.value) + Number(slider2.value) + Number(slider3.value);
}

slider3.oninput = function() {
    output3.innerHTML = this.value;
    result.innerHTML = Number(slider1.value) + Number(slider2.value) + Number(slider3.value);
}

function myScript() {
   // код скрипта
}

function changeE() {
  objectE.innerHTML = Number(objectE.textContent) + 10;
  objectG.innerHTML = Number(objectE.textContent) - 5;
}

function changeS() {
  objectS.innerHTML = Number(objectE.textContent) + 10;
  objectG.innerHTML = Number(objectE.textContent) + 5;
}

function changeG() {
  objectE.innerHTML = Number(objectE.textContent) - 10;
  objectS.innerHTML = Number(objectE.textContent) + 5;
  console.log("press");
}

function check1() {
  if (ch1.checked) {
    result.innerHTML = Number(result.textContent) + 10;
  } else {
    result.innerHTML = Number(result.textContent) - 10;
  }
}

function check2() {
  if (ch2.checked) {
    result.innerHTML = Number(result.textContent) + 20;
  } else {
    result.innerHTML = Number(result.textContent) - 20;
  }
}

function check3() {
  if (ch3.checked) {
    result.innerHTML = Number(result.textContent) + 30;
  } else {
    result.innerHTML = Number(result.textContent) - 30;
  }
}
