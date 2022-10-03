<template>
  <input placeholder="请输入账号" />
</template>

<script>
export default {
  name: 'demo',
  props: {},
  components: {},
  methods() {
    // 防抖
    let num = document.querySelector('input')
    num.addEventListener('input', antiShake(demo, 2000))
    function antiShake(fn, wait) {
      let timeOut = null
      return args => {
        if (timeOut) clearTimeout(timeOut)
        timeOut = setTimeout(fn, wait)
      }
    }
    function demo() {
      console.log('执行事件');
    }

  }
}
// let arr = [1,2,3,3,4]
//   // let item = [...new Set(arr)]
//   // console.log(item)
//   let a = arr
//   let b = a.filter((current, index, array)=>{
//     console.log(current, index, array)
//     return current < 4

//   })
// console.log(b);

// let arr = ['a','b','c']
// // 1。没有返回值 2.不能用break打断 3.遍历的是value
// // let res = arr.forEach(element =>{
// //   console.log(element);
// //   // break
// //   return element + '1'
// // })
// let res = arr.map((v,k)=>{
//   console.log(v,k)
//   //   // break
//   return v + '1'
// })
// console.log(res)


// 递归求和1-100
// function add(num1, num2) {
//   let num = num1 + num2
//   if (num2 > 99) {
//     return num
//   } else return add(num, num2 + 1)

// }
// let res = add(1, 2)
// console.log(res);


</script> 

<style scoped>

</style>
