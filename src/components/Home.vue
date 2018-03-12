<template>
  <div>
    {{ homeText }}
    <p>{{ $t("message.hello") }}</p>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        homeText: 'Home Component'
      };
    }
  };
</script>
