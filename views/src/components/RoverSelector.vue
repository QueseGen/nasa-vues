<template>
  <div v-for="post in results" v-bind:key="post.id">

    <h2>{{ post.rover.name}}</h2>
    <p>Capture: {{post.earth_date}}/Sol{{post.sol}}   |    By:  {{post.camera.full_name}}</p>
    <p style="box-sizing: content-box; text-indent: 40px;">{{ post.explanation }}</p> <br>
    <img v-bind:src=post.img_src>
    <p><u>Launching & Landing Day</u><br> {{post.rover.launch_date}} - {{post.rover.landing_date}} <br> </p>
  </div>


  <form @submit.prevent="pullData" ref="formm">
    <label>Chose a Rover:  </label>
    <select id="rover"  name="rover">
      <option>Curiosity</option>
      <option>Opportunity</option>
      <option>Spirit</option>
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
      console.log(event.target)
      const {rover, date} = Object.fromEntries(new FormData(event.target));
      const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/"+rover+"/photo?earth-date="+date;
      try {
        const response = await axios.get(url);
        // JSON responses are automatically parsed.
        this.posts.push(response.data);
      } catch (error) {
        this.errors.push(error);
      }
      this.posts=this.posts[0].photos;
      console.log(this.posts);
    }},
  }
</script>
//getData('https://api.nasa.gov/planetary/apod?api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ')
//this.getData("https://api.nasa.gov/planetary/apod?api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ");
//this.getData("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ")
// this.getData('https://api.nasa.gov/mars-photos/api/v1/rovers/'+this.rover+'/photos?sol=1000&api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ')
//this.url="";
}, created() {
// this.getData('https://api.nasa.gov/mars-photos/api/v1/rovers/"+this.rover+"/photos?api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ');
<style scoped>

</style>
