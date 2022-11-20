<template>
  <!-- <input placeholder="请输入账号" /> -->
  <div>伊瑟拉电脑自选</div>
  <!-- <Mbutton @a="ad">
    <template v-slot:two="v1"> {{v1.value}} </template>
    <template v-slot:one="v"> {{v.value}} </template>

    <template v-slot:three="c">{{c.value}}</template>
  </Mbutton> -->
  <div class="child">
    <ul v-for="(item, index) in op" :key="index" class="son">
      <Select
        :Select="select[index]"
        :options="op[index]"
        :x="x[index]"
        :width="w[index]"
        @change1="changep"
      ></Select>
    </ul>
  </div>
  <div>订单:{{ order.value }}</div>
  <div>总价: {{ total }}元</div>
  <!-- <my-dialog :isShowDialog.sync="isShowDialog" title="设置标题" :showCloseIcon="true" @beforeClose="beforeClose"
    :mask="true" :clickMaskClose="true">
    <template slot="header"> 具名插槽 </template>
    <template> 默认插槽 </template>
    <template slot="footer">
      <el-button size="small" @click="isShowDialog = false">取消</el-button>
      <el-button type="primary" size="small" @click="isShowDialog = false">确认</el-button>
    </template>
  </my-dialog> -->

  <!-- <el-button @click="isShowDialog = true" type="primary">
    打开弹框
  </el-button> -->
  <!-- <List :list="z"  @click="addline" :x="x"></List> -->
  <!-- <LazyLoad></LazyLoad> -->
  <!-- <div>大家好</div> -->
  <div class="border"></div>
</template>

<script>
export default {
  name: "demo",
  props: {},
  components: {},
  methods() {
    // 防抖
    let num = document.querySelector("input");
    num.addEventListener("input", antiShake(demo, 2000));
    function antiShake(fn, wait) {
      let timeOut = null;
      return (args) => {
        if (timeOut) clearTimeout(timeOut);
        timeOut = setTimeout(fn, wait);
      };
    }
    function demo() {
      console.log("执行事件");
    }
  },
};

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
// class EventBus{
//   constructor(){
//     this.tasks={}
//   }
//   on(key,fn){
//     if(!this.tasks[key]){
//       this.tasks[key]=[fn]
//     }else this.tasks[key].push(fn)

//   }
//   off(key,fn){
//     if(!this.tasks[key]){
//       return
//     }else {
//       let task = this.tasks[key]
//       let index = task.findIndex(f=>fn===f||fn===f.callback)
//       if(index>=0){
//         task.splice(index,1)
//       }
//       }
//     }

//   }
//   emmit(key,once=false,...args){
//     if(this.tasks[key]){
//       let task=this.tasks[key].slice()
//       for(let i of task){
//         i(...args)
//       }
//       if(once){
//         delete this.tasks[key]
//       }
//     }
//   }
//   once(key,fn){
//     this.emmit(key,true,fn)
//   }
// }
</script>
<script setup>
import Mbutton from "./button.vue";
import MyDialog from "./dialog.vue";
// import LazyLoad from './lazyload.vue'
import Select from "./select.vue";
import List from "./list.vue";
import { ref, reactive } from "vue";
const select = reactive(["", "显卡", "内存", "硬盘"]);
const x = ref(["5", "6", "7", "8"]);
const w = ref([, 300, 400, 500]);
const total = ref(0);
const order = reactive({});
const op = [
  [
    {
      price: "11",
      name: "cpu1",
      type: "cpu",
    },
    {
      price: "8",
      name: "cpu2",
      type: "cpu",
    },
    {
      price: "7",
      name: "cpu3",
      type: "cpu",
    },
    {
      price: "6",
      name: "cpu4",
      type: "cpu",
    },
    {
      price: "5",
      name: "cpu5",
      type: "cpu",
    },
  ],
  [
    {
      price: "5",
      name: "显卡2",
      type: "显卡",
    },
    {
      price: "34",
      name: "显卡45",
      type: "显卡",
    },
    {
      price: "55",
      name: "显卡224",
      type: "显卡",
    },
  ],
  [
    {
      price: "5",
      name: "内存3",
      type: "内存",
    },
    {
      price: "52",
      name: "内存32",
      type: "内存",
    },
    {
      price: "54",
      name: "内存39",
      type: "内存",
    },
  ],
  [
    {
      price: "5",
      name: "硬盘4",
      type: "硬盘",
    },
    {
      price: "49",
      name: "硬盘44",
      type: "硬盘",
    },
    {
      price: "98",
      name: "硬盘49",
      type: "硬盘",
    },
  ],
];
// let c=new Promise(function(resolve,reject){
//   console.log(12);
//   resolve('aaa')
//   console.log(123);
//   console.log(12346);
// }).then(e=>console.log(e))
// console.log(c.constructor);
const arr = [];
const arrt = [];
// /判断类型，如果该类型商品不存在，直接添加，否则根据下标替换/
function changep(v) {
  // console.log(v);
  if (!arrt.includes(v[1])) {
    arrt.push(v[1]);
    arr.push(v[0]);
  } else {
    let j = arrt.indexOf(v[1]);
    arr.splice(j, 1, v[0]);
  }
  countTotal(arr);
  getOrder(arr);
}
// 计算总价
function countTotal(arr) {
  let t = 0;
  for (let i of arr) {
    let j = parseInt(i.split("  ")[1]);
    // console.log(j);
    t += j;
  }

  total.value = t;
}
// 统计订单
function getOrder(arr) {
  let o = [];
  for (let i of arr) {
    let j = i.split("  ")[0];
    o.push(j);
  }
  order.value = o;
  console.trace();
}
let a1 = 0;
let b1 = 0;
let c1 = -2;
let d1 = -1;
d1 = ++a1 > 0 || b1++ > 0 || c1 + 1 > 0;
console.log(a1, b1, c1, d1);
// if (true) {
//   debugger;
// }

// const goods=[{id:1,name:'cpu'},{id:2,name:'显卡'},{id:3,name:'内存'},{id:4,name:'硬盘'},]
let isShowDialog = ref(false);
let z = reactive([
  {
    id: 1,
    title: "a1aaaaa",
  },
  {
    id: 2,
    title: "a2bbbbbbbb",
  },
]);
const addline = () => {
  z.push({ id: 4, titile: "dasgfs" });
  console.log(z);
};

const ad = (a) => {
  console.log(a);
};
console.table();
// let a = 'wo  rld'
// let b = `hello,${  a  }`
// console.log(b);
// let {a,b,c}={c:1,b:3,a:2}
// console.log(a,b,c);

// Array.of from copyWithin(0,1,2)在下标0处开始替换为[1,2)的内容 fill find findIndex entries keys
// let a = [1,2,3,4]
// let b =a.keys()
// console.log(b);

// const obj = {
//     birth: 1990,
//     getAge: function (year) {
//         let fn = y => y - this.birth;
//         return fn.call({ birth: 2000 }, year);
//     }
// };
// console.log(obj.getAge(2020));
//  function a(name){
//    this.name = 'dsf'

// }
// function b(){

// }
// b.prototype=new a()
// b.prototype.name = 'gfh'
// let c = new b()
// console.log(c.name);
// function  d() {

// }
// d.prototype.age=16
// let e =new d()
// console.log(e.age);
// let b = a.entries()
// for(let i of b){
//   console.log(i);
// }

// console.log(a.findIndex(e=>e>2));
// let a=Array.from('sdsd')
// console.log(a);
// let a = [1,2,3,4]
// let b = a.reduceRight((pre,cur)=>pre*cur)
// console.log(b);
// let a = ['张三','李四']
// let a = 'sdafafs'
// let b = a.substr(1,3)
// let c = a.substring(1,3)
// let d=a.slice(1,3)
// console.log(b,c,d);
// let c = a.sort((a,b)=>{
//   return a.localeCompare(b)
// })
// console.log(c);

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
// let a= new Set([5,1,2,3,4])
// console.log(a.keys());
// console.log(a.values());
// console.log(a.entries());
// let a = new Set([5,1,2,3,4])
// for (let i of a.keys()){
//   console.log(i);
// }
// let a = [4,5,2,1,65]
// let b =Math.min(...a)
// console.log(b);
// console.log(Math.pow(3,4))
// let a = setTimeout(() => {
//   console.log(a);
// }, 100);
</script>

<style scoped>
.child {
  /* overflow: hidden; */
  /* display: inline-block; */
  /* display: flow-root; */
  /* display: table-cell; */
  /* position: fixed; */
  /* position: absolute */
  /* contain: content; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
}
/* :after{content: '';display: block;clear: both;} */
/* .son{
  height: 50px;
  float: left;
} */
/* .border{
 
width: 0;
height: 0;
border-style: solid;
border-width: 50px 50px;
border-color: transparent transparent red;

} */
.svg {
  width: 50px;
  height: 50px;
  color: red;
}
</style>
