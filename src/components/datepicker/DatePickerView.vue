<template>
  <div class="date-picker-view">
    <div class="date-picker-view__wrapper">
      <DatePickerHeader @resetInput="resetInput" />
      <DatePickerMonth
        @clickPrevMonth="clickPrevMonth"
        @clickNextMonth="clickNextMonth"
        :year="year"
        :numMonth="numMonth"
      />
      <DatePickerWeek />
      <DatePickerDates
        :allDays="allDays"
        :prevDays="prevDays"
        :nextDays="nextDays"
        @selectData="selectData"
      />
    </div>
  </div>
</template>
<script>
import DatePickerHeader from "./DatePickerHeader.vue";
import DatePickerMonth from "./DatePickerMonth.vue";
import DatePickerWeek from "./DatePickerWeek.vue";
import DatePickerDates from "./DatePickerDates.vue";

export default {
  name: "DatePickerView.vue",
  components: {
    DatePickerHeader,
    DatePickerMonth,
    DatePickerWeek,
    DatePickerDates
  },
  props: ["year", "numMonth", "allDays", "prevDays", "nextDays"],
  data() {
    return {};
  },
  methods: {
    resetInput() {
      this.$emit("resetInput");
    },
    clickPrevMonth() {
      this.$emit("clickPrevMonth");
    },
    clickNextMonth() {
      this.$emit("clickNextMonth");
    },
    selectData(index) {
      this.$emit("selectData", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker-view {
  position: absolute;
  top: 36px;
  left: 0;
  &__wrapper {
    padding: 19px 0px;
    box-shadow: 0px 0px 10px 0px rgba(50, 50, 50, 0.35);
    border-radius: 5px;
  }
}
</style>
