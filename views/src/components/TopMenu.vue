<template >
  <div class="menu">
    <div class="items">
      <h1 @click="scroll('selector')">PRINT </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top-Menu",
  el:'#top',
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
