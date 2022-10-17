<template>

<div class="img_list">
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=1184237773,2695670454&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=459"
        src="./images/1.png"
      />
      <img
        class="img_box"
        data-src="https://img2.baidu.com/it/u=2628247099,1771218600&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=622"
        src="./images/2.jpg"
      />
      <img
        class="img_box"
        data-src="http://t13.baidu.com/it/u=3187811031,370569877&fm=224&app=112&f=JPEG?w=500&h=500"
        src="./images/3.jpg"
      />
      <img
        class="img_box"
        data-src="https://img1.baidu.com/it/u=1010991239,3465939268&fm=253&fmt=auto&app=120&f=JPEG?w=650&h=415"
        src="./images/4.jpg"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=2261202215,3362900313&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        src="./images/5.jpg"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=3512499643,429825831&fm=253&fmt=auto&app=138&f=JPEG?w=720&h=405"
        src="./images/6.png"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=1638371052,3843930664&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        src="./images/7.png"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=1662872505,2893562837&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500"
        src="./images/8.jpeg"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=2309365270,2230523295&fm=253&fmt=auto&app=138&f=JPEG?w=690&h=460"
        src="./images/9.png"
      />
      <img
        class="img_box"
        data-src="https://img2.baidu.com/it/u=785981561,1793614883&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=749"
        src="./images/10.jpg"
      />
      <img
        class="img_box"
        data-src="https://img2.baidu.com/it/u=188852548,1953932846&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=460"
        src="./images/11.jpeg"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=2601040831,2931402236&fm=253&fmt=auto&app=138&f=JPEG?w=389&h=500"
        src="./images/12.jpg"
      />
      <img
        class="img_box"
        data-src="https://img1.baidu.com/it/u=2364565845,172523012&fm=253&fmt=auto&app=138&f=JPEG?w=373&h=499"
        src="./images/13.jpeg"
      />
      <img
        class="img_box"
        data-src="https://img1.baidu.com/it/u=166639052,1801075720&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500"
        src="./images/14.jpeg"
      />
      <img
        class="img_box"
        data-src="https://img0.baidu.com/it/u=1719467230,1146268765&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281"
        src="./images/15.jpeg"
      />
    </div>
</template>

<script>
export default {
  name: 'lazyload',
  props: {},
  components: {},
  
}

</script> 
<script setup>
function lazyLoad () {
        // 先获取当前可视区的高度
        let viewHeight = document.documentElement.clientHeight
        // 获取滚动条高度
        let scrollHeight =
          document.documentElement.scrollTop || document.body.scrollTop
        // 拿到所有图片的信息
        let imgs = document.querySelectorAll('.img_box')

        imgs.forEach(item => {
          console.log('item.offsetTop', item.offsetTop)
          const offsetHeight = item.offsetTop
          if (offsetHeight < viewHeight + scrollHeight) {
            item.src = item.dataset.src
          }
        })
      }
      lazyLoad()
      window.addEventListener('scroll', throttle(lazyLoad, 1000))

      // 节流
      function throttle (fn, time) {
        let flag = true
        return function () {
          if (!flag) return
          flag = false
          setTimeout(() => {
            fn.apply(this)
            flag = true
          }, time)
        }
      }</script>

<style scoped>
.img_box {
        display: block;
        width: 300px;
        height: 160px;
        margin: 0 auto 20px;
        border: 1px solid #ccc;
      }


</style>
