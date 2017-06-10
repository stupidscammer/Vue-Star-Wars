<template>
	<div class="col-md-8"><br>
    <div class="panel panel-danger">
      <div class="panel-heading">
        <div class="panel-title">
          Film Description
        </div>
      </div>
      <div class="panel-body">
        {{ this.desc }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'filmDescription',
    props: [
      'desc',
    ],
  };
</script>
