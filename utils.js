//Hàm lấy số ngẫu nhiên từ 1 đến 100
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}
// hàm đổi từ độ C sang độ F
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Xuất các hàm để sử dụng trong các file khác
module.exports = {
  getRandomNumber,
  celsiusToFahrenheit,
};
