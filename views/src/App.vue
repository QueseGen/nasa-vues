<template>
  <TopMenu></TopMenu>
  <br>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
 <TestIng></TestIng>
 <rover-selector></rover-selector>
</template>

<script>
import RoverSelector from "@/components/RoverSelector";
import TopMenu from "@/components/TopMenu";
import TestIng from "@/components/Testing";

export default {
  components: {TestIng, TopMenu, RoverSelector},
  el: '#app',
}
</script>
<style>

</style>


