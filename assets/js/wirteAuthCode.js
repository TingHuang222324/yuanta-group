// --------------------------------------------------
let initalOptions = {
  canvasId: "auth-code" /**canvas的id*/,
  txt: randomNum(100000, 999999).toString() /**傳入驗證碼內容*/,
  height: 39 /**驗證碼高度 */,
  width: 106 /**驗證碼寬度 */,
  fontColor1: 0 /**隨機生成字型顏色*/,
  fontColor2: 50 /**隨機生成字型顏色*/,
  bgColor1: 180 /**這個範圍的顏色作背景看起來清晰一些*/,
  bgColor2: 255 /**這個範圍的顏色作背景看起來清晰一些*/,
  fontStyle: "24px SimHei",
};
/**驗證碼建構函式**/
function writeAuthCode(options) {
  this.options = { ...initalOptions, ...options };
  let canvas = document.getElementById(options.canvasId);
  canvas.width = this.options.width || 300;
  canvas.height = this.options.height || 150;
  let ctx = canvas.getContext("2d"); /**建立一個canvas物件*/
  ctx.textBaseline = "middle";
  ctx.fillStyle = randomColor(this.options.bgColor1, this.options.bgColor2);
  ctx.fillRect(0, 0, this.options.width, this.options.height);
  for (let i = 0; i < this.options.txt.length; i++) {
    let txt = this.options.txt.charAt(i); /**讓每個字不一樣*/
    ctx.font = this.options.fontStyle;
    ctx.fillStyle = randomColor(this.options.fontColor1, this.options.fontColor2);
    ctx.shadowOffsetY = randomNum(-3, 3);
    ctx.shadowBlur = randomNum(-3, 3);
    ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
    let x = (this.options.width / (this.options.txt.length + 1)) * (i + 1);
    let y = this.options.height / 2;
    let deg = randomNum(-30, 30);
    /**設定旋轉角度和座標原點*/
    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);
    /**恢復旋轉角度和座標原點*/
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  }
  /**1~4條隨機干擾線隨機出現*/
  for (let i = 0; i < randomNum(1, 4); i++) {
    ctx.strokeStyle = randomColor(40, 180);
    ctx.beginPath();
    ctx.moveTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
    ctx.lineTo(randomNum(0, this.options.width), randomNum(0, this.options.height));
    ctx.stroke();
  }
  /**繪製干擾點*/
  for (let i = 0; i < this.options.width / 6; i++) {
    ctx.fillStyle = randomColor(0, 255);
    ctx.beginPath();
    ctx.arc(
      randomNum(0, this.options.width),
      randomNum(0, this.options.height),
      1,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }
  this.validate = function (code) {
    return this.options.txt == code;
  };
}
/**隨機數字**/
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
/**隨機顏色**/
function randomColor(min, max) {
  let r = randomNum(min, max);
  let g = randomNum(min, max);
  let b = randomNum(min, max);
  return "rgb(" + r + "," + g + "," + b + ")";
}
