<template>
  <div class="loading">
    <aside class="loading_img">
    </aside>
  </div>
</template>
<script>
export default {
  name: 'loading'
}
</script>
<style scoped>
  .loading{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 99;
    background: url('../../assets/back_bg.svg') no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading_img{
    width: 1.5rem;
    height: 1.5rem;
    background: url('../../assets/loading.png') center 67% no-repeat;
    background-size:cover;
    animation: all .5s linear infinite alternate;
  }
 @keyframes all
  {
  from {transform: translateY(-.2rem)}
  to {transform: translateY(0rem)}
  }
</style>
