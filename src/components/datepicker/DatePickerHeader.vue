<template>
  <div class="date-picker-header">
    <p class="date-picker-header__title">Select date below</p>
    <p class="date-picker-header__reset reset" @click="resetInput">
      reset
    </p>
  </div>
</template>
<script>
export default {
  name: "DatePickerHeader",
  methods: {
    resetInput() {
      this.$emit("resetInput");
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker-header {
  display: flex;
  justify-content: space-between;
  padding: 0px 20px 19px 20px;
  border-bottom: 1px solid $border-color;
  &__title {
    color: $gray;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.02em;
  }
}
</style>
