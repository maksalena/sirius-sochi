const selector = document.querySelector('.selector');
const imageOut = document.querySelector('.image-out');
const objectName = document.querySelector('.obj-name');
const objectType = document.querySelector('.obj-type');
const objectLoc = document.querySelector('.obj-loc');

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
  objectType.textContent = objects[key]['type'];
  objectLoc.textContent = objects[key]['location'];
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
