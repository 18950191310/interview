<template>
  <div >  <el-select v-model="value" class="m-2" :placeholder="'请选择'+name" size="large" @change="cha">
    <el-option v-for="item in options" :key="item.name" :name="item.type"
      :value="item.name+'   '+ item.price+' 元'" :style="{ width: s+'px' }" />
  </el-select></div>



</template>

<script>
export default {

}
</script>

<script  setup>
import { ref } from 'vue'
const props=defineProps({
    Select: String,
    options: Array,
    x: String,
    width:Number
 })
 const f = props.options[0].type
const value = ref('')
const emit=defineEmits([])
function cha(e){
 emit('change1',[e,f])
}

const name = props.Select?props.Select:ref('CPU')
const s= props.width?props.width:ref(550)

</script>
<style>

</style>
