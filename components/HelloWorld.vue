<template>
  <input placeholder="请输入账号" />
  <Mbutton>
    <template v-slot:two="v1"> {{v1.value}} </template>
    <template v-slot:one="v"> {{v.value}} </template>

    <template v-slot:three="c">{{c.value}}</template>
  </Mbutton>
  <div>
    <ul v-for="(item,index) in op" :key="index"><Select :Select="select[index]" :options="op[index]" :x="x"></Select></ul>
    
  </div>
  
  <my-dialog :isShowDialog.sync="isShowDialog" title="设置标题" :showCloseIcon="true" @beforeClose="beforeClose"
    :mask="true" :clickMaskClose="true">
    <!-- 要与组件的具名插槽对应 -->
    <template slot="header"> 具名插槽 </template>
    <template> 默认插槽 </template>
    <!-- 要与子组件的插槽对应 -->
    <template slot="footer">
      <el-button size="small" @click="isShowDialog = false">取消</el-button>
      <el-button type="primary" size="small" @click="isShowDialog = false">确认</el-button>
    </template>
  </my-dialog>

  <el-button @click="isShowDialog = true" type="primary">
    打开弹框
  </el-button>
  <List :list="z"  @click="addline" :x="x"></List>
  <LazyLoad></LazyLoad>


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
// let count = 500 //全局作用域
// function foo1() {
//   let count = 0;//函数全局作用域
//   function foo2() {
//     count++;//函数内部作用域
//     console.log(count);
//     return count;
//   }
//   return foo2;//返回函数
// }
// let result = foo1();
// result();//结果为1
// result()

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
<script setup>
import Mbutton from './button.vue'
import MyDialog from './dialog.vue'
// import LazyLoad from './lazyload.vue'
import Select from './select.vue'
import List from './list.vue'
import { ref, reactive } from 'vue'
import { add } from 'lodash'
const select=reactive(['CPU','显卡','内存','硬盘'])
const x = ref('5')
const op = [[{
    price: '11',
    name: 'cpu1',
  },
  {
    price: '8',
    name: 'cpu2',
  },
  {
    price: '7',
    name: 'cpu3',
  },
  {
    price: '6',
    name: 'cpu4',
  },
  {
    price: '5',
    name: 'cpu5',
  }],[ {
    price: '5',
    name: '显卡',
  }],[ {
    price: '5',
    name: '内存',
  }],[ {
    price: '5',
    name: '硬盘',
  }]
 
]
// const goods=[{id:1,name:'cpu'},{id:2,name:'显卡'},{id:3,name:'内存'},{id:4,name:'硬盘'},]
let isShowDialog = ref(false)
let z = reactive([{
  id: 1,
  title: 'a1aaaaa'
},
{
  id: 2,
  title: 'a2bbbbbbbb'

}])
const addline = () => {
  z.push({ id: 4, titile: 'dasgfs' })
  console.log(z);
}

// function s (){
// let a = 10
// // console.log(a++);
// return ()=>{
//   console.log(a++);
// }
// // setTimeout(()=>{
// //   console.log(a++);
// // },1000)
// }
// // s()
// // s()
// let b = s()
// b()
// b()



</script>

<style scoped>

</style>
