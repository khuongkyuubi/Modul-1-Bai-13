let textarea = document.getElementById("input");

let text = "TÔI LÀ MỘT TÊN NGỐC !!";

const arr = text.split("");
let arrLength = arr.length;
let result = "";
textarea.onkeyup = function (evt) {
    let length = textarea.value.length;
    console.log(length);
    // lấy ra độ dài của chuỗi giá trị nhập trên ô textarea
    // khi nhập thêm 1 giá trị thì length > 0 ( ==true)
    if (length) {
        for (let i = 0; i < length; i++) {
            // cho i chạy từ 0 đến độ dài của chuỗi
            // nối thêm 1 từ trong mảng vào lần lượt
            result += arr[i];
            if (i === arrLength) {
                // khi đạt đến độ dài của chuỗi thì reset
                result = "";
                textarea.value = "";
                break;
            }
        }
        // cho giá trị của ô textarea = giá trị cảu result
        textarea.value = result;
        result = ""; // reset result
    }
};