<template>
  <div>
    <AppComponent/>

    <ul v-if="posts && posts.length">
      <li v-for="post of posts" :key="post.id">
        <p><strong>{{post.id}}</strong></p>
        <p>{{post.title}}</p>
      </li>
    </ul>
    <ul v-else-if="errors && errors.length">
      <li v-for="error of errors">
        {{error.message}}
      </li>
    </ul>

  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        posts: [],
        errors: []
      }
    },

    async mounted() {
      try {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/topstories.json`)

        if (response.data) {
          response.data = response.data.slice(0, 10)
          this.posts = await Promise.all(response.data.map(async id => {
            const post = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            return post.data
          }))
        } else {
          this.posts = []
        }

      } catch (e) {
        this.errors.push(e)
      }
    }
  }
</script>

<style>
</style>