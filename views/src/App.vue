<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
 <h1>Testing</h1>
    <div v-for="post in posts" v-bind:key="post.title">

      <h2>{{ post.title}}</h2> <p>{{ post.date }}</p>
      <p style="box-sizing: content-box; text-indent: 40px;">{{ post.explanation }}</p> <br>
      <img v-bind:src=post.hdurl>
      <p>Reference:<br> {{post.copyright}} <br> {{post.url}} <br> </p>
    </div>

  <h1> Advancing</h1>
  <form>
    <label>Chose a Rover:  </label>
      <select id="rover" v-model="rover" name="rover">
        <option>Curiosity</option>
        <option>Opportunity</option>
        <option>Spirit</option>
      </select>
    <label>Date Captured:</label>
    <input type="date" id="date" name="Date">
    <input type="submit" value="Submit" />
  </form>
</template>

<script>
import axios from 'axios';

export default {
  el: '#app',
  data() {
    return {
      posts: [],
      errors:[]
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=ZtGGTCYJAN4niycyVPz6Dn3IyBuVwbNId4G6dpWJ"
        );
        // JSON responses are automatically parsed.
        this.posts.push(response.data);
      } catch (error) {
        this.errors.push(error);
      }
      console.log(this.posts[0].title);
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
