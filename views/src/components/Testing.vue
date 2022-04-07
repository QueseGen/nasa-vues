<template>
  <div class="test">
    <br>
  <h1>+Article of the Day!+</h1>
    <div class="post" v-for="post in posts" v-bind:key="post.title">
    <h2> <u>{{ post.title}}</u></h2> <p>{{ post.date }}</p>
    <p class="brief">{{ post.explanation }}</p>
     <!-- <p class="brief"> {{post.url}}</p> -->
    <img v-bind:src=post.hdurl alt={{post.url}}>
    <p class="brief" id="copy">{{post.copyright}} <br> </p>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Test-ing",
  el: '#test',
  data() {
    return {
      NASA_STORY: process.env.VUE_APP_NASA_STORY,
      posts: [],
      errors:[]
    };
  },
  methods: {
    async getData() {
      try {
        const response = await axios.get(process.env.VUE_APP_NASA_STORY);
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

<style scoped>
.test {
  top: 60px;
  background-color: gold;
  width: clamp(300px,100%, 100%);
  box-sizing: content-box;
}
.brief{
  box-sizing: content-box;
  text-indent: 40px;
}

img{
  width: auto ;
  max-width: 100% ;
  height: auto ;
 }

</style>
