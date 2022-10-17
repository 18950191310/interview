<template>
  <el-select v-model="value" class="m-2" :placeholder="'请选择'+Select" size="large">
    <el-option v-for="item in options" :key="item.name" :name="item.name"
      :value="item.name+'  '.repeat(x)+ item.price" />
  </el-select>


</template>

<script>
export default {
  props: {
    Select: String,
    options: Array,
    x: String
  }
}
</script>

<script  setup>
import { repeat } from 'lodash';
import { ref } from 'vue'

const value = ref('')



</script>
