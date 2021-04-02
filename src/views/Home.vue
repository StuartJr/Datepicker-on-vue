<template>
  <div class="home">
    <DatePicker />
  </div>
</template>

<script>
// @ is an alias to /src
import DatePicker from "@/components/datepicker/DatePicker.vue";

export default {
  name: "Home",
  components: {
    DatePicker
  }
};
</script>
