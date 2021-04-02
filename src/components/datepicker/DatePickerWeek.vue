<template>
  <div class="date-picker-week">
    <div class="date-picker-week__wrapper">
      <div class="date-picker-week__list">
        <div
          v-for="(item, index) in week"
          :key="index"
          class="date-picker-week__item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DatePickerWeek.vue",
  data() {
    return {
      week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    };
  }
};
</script>
<style lang="scss" scoped>
.date-picker-week {
  &__wrapper {
    display: flex;
    padding: 10px 0px;
    margin: 0px 20px;
    border-bottom: 1px solid $border-color;
  }
  &__list {
    display: flex;
    max-width: 350px;
    margin: 0 auto;
  }
  &__item {
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $color-text;
    width: 50px;
  }
}
</style>
