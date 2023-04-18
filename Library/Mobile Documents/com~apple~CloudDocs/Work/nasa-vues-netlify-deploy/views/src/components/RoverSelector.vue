
<template>
  <h1 id="sol"> Sol Selector</h1>
  <div class="pics" v-for="post in results" v-bind:key="post.id">
    <h2>{{ post.rover.name}}</h2>
    <p>Capture: {{post.earth_date}}/Sol{{post.sol}}   |    By:  {{post.camera.full_name}}</p>
    <p>{{ post.explanation }}</p> <br>
    <img v-bind:src=post.img_src>
    <p><u>Launching & Landing Day</u></p>
    <p>{{post.rover.launch_date}} - {{post.rover.landing_date}}</p>
  </div>
  <form @submit.prevent="pullData"  onsubmit="parent.scrollTo(0,1200);" class="selector"  id="selector" style="min-height: 30vh;">
    <label>Chose a Rover:  </label>
    <select id="rover"  name="rover">
      <option value="curiosity">Curiosity</option>
      <option value="opportunity">Opportunity</option>
      <option value="spirit">Spirit</option>
    </select>

    <label style="padding-left: 8rem;">Date Captured:</label>
    <input type="date" id="date" name="date"> <br><br>

    <label  style="margin-top:8rem; ">Camera:  </label>
    <select id="camera"  name="camera">
      <option value="">All</option>
      <option value="&camera=FHAZ">Front Hazard Avoidance Camera</option>
      <option value="&camera=RHAZ">Rear Hazard Avoidance Camera</option>
      <option value="&camera=NAVCAM">Navigation Camera</option>
      <option value="&camera=PANCAM">Panoramic Camera</option>
      <option value="&camera=MINITES">Miniature Thermal Emission Spectrometer (Mini-TES)</option>
      <option value="&camera=MAST">MAST</option>
      <option value="&camera=CHEMCAM">Chemistry and Camera Complex</option>
      <option value="&camera=MAHLI">Mars Hand Lens Imager</option>
      <option value="&camera=MARDI">Mars Descent Imager</option>
    </select> <br>
    <div class="buttons">
    <input @click="scroll('home')" type="button"  value="HOME"/>
    <input type="submit"  value="SUBMIT" />
    </div>
    <p @click="scroll('home')" style="color: red; "> <b>(CLICK FOR TOP)</b></p>
  </form>


  </template>
<script>
import axios from "axios";

export default {
  name: "Rover-Selector",
  data() {
    return {
      results: [],
      errors: []
    }
  },
  methods: {
    async pullData(event) {
      this.results = [];
      const { rover, date, camera } = Object.fromEntries(new FormData(event.target));
      const url = '/.netlify/functions/pullData.js'; // Change this to your Netlify Function URL

      try {
        const response = await axios.post(url, { rover, date, camera });
        this.results = response.data;
      } catch (error) {
        this.errors.push(error);
      }
    },
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }},
  }
</script>
<style scoped>

img, form{
  width: auto ;
  max-width: 100% ;
  height: auto ;
}

img{
  aspect-ratio: auto;
}

p, h1, h2, .buttons {
  box-sizing: content-box;
  text-indent: 40px;
  justify-content: center;
  align-items: center;
}
</style>
