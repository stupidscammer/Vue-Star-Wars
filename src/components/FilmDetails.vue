<template>
	<div class="col-md-4"><br>
		<div class="panel panel-primary">
				<div class="panel-heading">
						<div class="panel-title">
							Film Details
						</div>
				</div>
				<div class="panel-body">
					<ul class="list-unstyled">
						<li><span class="pull-left"> <strong >Movie Name: </strong> {{ results.title }}</span><br /></li>
						<li><span class="pull-left"><strong>Year: </strong> {{ date }}</span><br /></li>
						<li><span class="pull-left"><strong>Director: </strong> {{ results.director }}</span><br /></li>
						<li><span class="pull-left"><strong>Producer: </strong> {{ results.producer }}</span><br /></li>
					</ul>
				</div>
		</div>
  </div>
</template>

<script>
  export default {
    name: 'filmDetails',
    props: [
      'results',
      'date',
    ],
  };
</script>
