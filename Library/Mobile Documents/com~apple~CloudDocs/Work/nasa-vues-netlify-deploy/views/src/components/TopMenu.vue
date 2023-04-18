<template >
  <div class="menu">
    <div class="items">
      <h1 @click="scroll('selector')">{{VUE_APP_NASA}}</h1>
    </div>
  </div>
</template>

<script>

import  config from './config'
export default {
  name: "Top-Menu",
  el:'#top',
  data(){
    return {VUE_APP_NASA: config.VUE_APP_NASA}
  },
  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
  }
}
</script>

<style scoped>
.menu, .items{
  display: flex;
  height: 50px;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  background-color: black;
  width: 100%;
  position: fixed;
}

.menu {

}
h1{
  color: white;
}
h1:hover {
  color: rgb(251, 81, 22);
}
</style>
