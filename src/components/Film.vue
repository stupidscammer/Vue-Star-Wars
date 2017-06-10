<template>
  <div>
	  	<div class="row">
		    <film-description :desc="results.opening_crawl"></film-description>
		    <film-details :results="results" :date="date"></film-details>
	  </div>
	  <div class="row">
	  	<character-details :details="characterDetails"></character-details>
	  </div>
  </div>
</template>

<script>
import FilmDescription from './FilmDescription';
import CharacterDetails from './CharacterDetails';
import FilmDetails from './FilmDetails';

export default {
  name: 'film',
  data() {
    return {
      results: {},
      characters: [],
      characterDetails: [],
      date: '',
    };
  },
  components: {
    FilmDescription,
    CharacterDetails,
    FilmDetails,
  },
  created() {
    this.filmDetails();
  },
  methods: {
    filmDetails() {
      const filmID = this.$route.params.id;
      fetch(`http://swapi.co/api/films/${filmID}`).then((response) => {
        return response.json();
      }).then((j) => {
        this.results = j;
        this.date = j.release_date.slice(0, -6);

        this.results.characters.forEach((characterUrl) => {
          fetch(characterUrl).then((response) => {
            return response.json();
          }).then((detail) => {
            this.characterDetails.push(detail);
          });
        });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
