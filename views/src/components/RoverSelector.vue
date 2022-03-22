
<template>
  <h1> Advancing/Scroll to bottom for Selector!</h1>
  <div v-for="post in results" v-bind:key="post.id">

    <h2>{{ post.rover.name}}</h2>
    <p>Capture: {{post.earth_date}}/Sol{{post.sol}}   |    By:  {{post.camera.full_name}}</p>
    <p style="box-sizing: content-box; text-indent: 40px;">{{ post.explanation }}</p> <br>
    <img v-bind:src=post.img_src>
    <p><u>Launching & Landing Day</u><br> {{post.rover.launch_date}} - {{post.rover.landing_date}} <br> </p>
  </div>

  <form @submit.prevent="pullData" id="selector" style="min-height: 30vh;">
    <label>Chose a Rover:  </label>
    <select id="rover"  name="rover">
      <option value="curiosity">Curiosity</option>
      <option value="opportunity">Opportunity</option>
      <option value="spirit">Spirit</option>
    </select>

    <label>Camera:  </label>
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
    </select>

    <label>Date Captured:</label>
    <input type="date" id="date" name="date">
    <input type="submit"  value="Submit" />
  </form>
  </template>
<script>
import axios from "axios";

export default {
  name: "RoverSelector",
  data() {
    return {
      results: [],
      errors: []
    }
  },
  methods: {
    async pullData(event) {
      this.results=[];
      console.log(event.target)
      const {rover, date, camera} = Object.fromEntries(new FormData(event.target));
      const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover+"/photos?earth_date="+date+camera+"&api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ";
      try {
        const response = await axios.get(url);
        // JSON responses are automatically parsed.
        this.results.push(response.data);
      } catch (error) {
        this.errors.push(error);
      }
      console.log(url,"\n now lets get results:")
      try {
        this.results=this.results[0].photos;
        console.log(this.results)
      }catch (e){
        this.errors.push(e);
        console.log("\n There were errors..",this.errors)
        this.results=[{"id":0,"sol":100,"camera":{"id":0,"name":"","rover_id":0,"full_name":""},"img_src":"https://i.ytimg.com/vi/PQv9lp_aVFA/maxresdefault.jpg","earth_date":"","rover":{"id":0,"name":"Sorry, no Captures for "+ date+":/","landing_date":"","launch_date":"","status":""}}];
      }
      if(this.results==null || this.results.length===0){this.results=[{"id":0,"sol":100,"camera":{"id":0,"name":"","rover_id":0,"full_name":""},"img_src":"https://i.ytimg.com/vi/PQv9lp_aVFA/maxresdefault.jpg","earth_date":"","rover":{"id":0,"name":"Sorry, no Captures for "+ date+":/","landing_date":"","launch_date":"","status":""}}];}
      console.log(this.results);
    }},
  }
</script>
<style scoped>

</style>
