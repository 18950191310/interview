<template>
  <div>
    <ul>
 
      <li v-for="item in list" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  //通过props接收App中的list数据，指定类型为数组
  props:{
    list: Array
  }


}
</script>
<script setup>

// import { reactive } from 'vue'
//   let list=reactive([
// 	        {
// 		    id: 1,
// 		    title: '233'
// 		},
//                {
// 		    id: 2,
// 		    title: 'a2'
// 		}
// 	    ]) 
</script>