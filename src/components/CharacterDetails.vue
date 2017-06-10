<template>
	<div class="col-md-8">
  		<div class="panel panel-success">
  			<div class="panel-heading">
  				<div class="panel-title">
  					Characters
  				</div>
  			</div>
  			<div class="panel-body">
  				<div v-for="(characterDetail, index) in details" class="col-md-4">
          {{ details[index].name }}
        </div>
  			</div>
  		</div>
  	</div>
</template>

<script>
  export default {
    name: 'characterDetails',
    props: [
      'details',
    ],
  };
</script>
