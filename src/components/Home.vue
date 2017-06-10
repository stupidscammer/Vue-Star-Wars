<template>
  <div class="row">
    <div class="col-md-4" v-for="(result, index) in results">
      <div class="panel panel-primary">
        <div class="panel-heading">
          <div class="panel-title">
            <h4 class="card-title">{{ result.title }}</h4>
          </div>
        </div>
        <div class="panel-body">
          
            <p>Year: {{ result.release_date }}</p>
            <p>Director: {{ result.director }}</p>
            
            <router-link :to="'/film/' + (index + 1)">
              <a :href="'/film/' + (index + 1)" class="btn btn-primary btn-md pull-left">Go Film Details</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      results: {},
    };
  },
  created() {
    this.fetchFilms();
  },
  methods: {
    fetchFilms() {
      fetch('http://swapi.co/api/films/').then((response) => {
        return response.json();
      }).then((j) => {
        this.results = j.results;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
