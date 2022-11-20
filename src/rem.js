// 基准大小
const baseSize = 75
// 设置 rem 函数
function setRem () {
  if (document.documentElement.clientWidth <= 750) {
    return
  }
  // 当前页面宽度相对于 1920 宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / 1920
   let VW=document.documentElement.clientWidth
  // 设置页面根节点字体大小, 字体大小最小为12
  let fontSize = (baseSize * Math.min(scale, 2)) > 56.25 ? (baseSize * Math.min(scale, 2)) : 56.25
    // let fontSize = (baseSize * scale) > 45 ? (baseSize * scale) : 45

  // let fontSize=VW>1440?45
  document.documentElement.style.fontSize = fontSize + 'px'
    console.log(1234);
  // console.log(scale, fontSize, (baseSize * Math.min(scale, 2)) )
}
//初始化
setRem()
// 防抖
// function antiShake(fn, wait){
//   let timeOut = null
//   return args => {
//     if(timeOut) clearTimeout(timeOut)
//     timeOut = setTimeout(fn, wait)
//   }
// }
// function e (){
//   console.log('执行事件');
// }
// function f(){
//   console.log('发起请求');
// }
// // 节流
// function throttle(event, time){
//   let timer = null
//   return function(){
//     if(!timer){
//       timer = setTimeout(()=>{
//         event()
//         timer = null 
//       }, time)
//     }
//   }
// }
// 改变窗口大小时重新设置 rem,这里最好加上节流
window.onresize = () => {
  throttle(setRem(), 2000)
  
}
// window.addEventListener('resize',throttle(setRem,2000))

