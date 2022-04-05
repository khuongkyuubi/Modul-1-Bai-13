let textarea = document.getElementById("input");

let text = "TÔI LÀ MỘT TÊN NGỐC !!"
const arr = text.split("");
let count = 0;
let result = "";
textarea.onkeyup = function (evt) {
    // result = this.value;
    // console.log(evt);
    if (evt.key === "Delete" || evt.key === "Backspace") {
        if (this.value.length) {
            result = this.value;
            count = result.length - 1;
            return;
        }
    }
    result += arr[count];
    count++;
    if (count >= arr.length) {
        count = 0;
        result = "";
    }
    this.value = result;
    console.log(this.value);

};