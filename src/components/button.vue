<template>
      <div class="flex">
    <el-button type="primary" :icon="Edit"  @click="add">
        <slot name= 'one' :value="v1"> </slot>
      <slot name='two' :value="v2">  </slot>
      <slot name='three' :value="v3"> 3 </slot>
    </el-button>

    
  </div>
       
</template>

<script>
export default {
  name: 'mbutton',
  props: {},
  components: {},

}
</script> 
<script setup>
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const e=defineEmits([])
const messag =7890
// defineExpose({
//     messag
// })

let x= 789
function add(){
    e('a',x)
}
let v1 = ref(111)
let v2=reactive(222)
let v3 = ref('vaf')

</script>

<style scoped>

    .button {
        color: green;
        position: absolute;
    width:100px;
    height:50px; 
     top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto; 
         border: solid 1px;
      
    }
    /* :first-letter {font-size:30px;} */
    /* :hover {color: #FF00FF}
    :first-child {color: red} */ 
    /* .button::first-line {background:red;} */
    /* .button::after{
		content: '我是前增';
	} */
    /* [v-cloak]{
        display: none;
    } */
</style>
