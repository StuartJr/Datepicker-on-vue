<template>
  <div class="date-picker-month">
    <div class="date-picker-month__wrapper">
      <button
        class="date-picker-month__btn date-picker-month__btn_prev"
        @click="prevMonth()"
      >
        <img
          class="date-picker-month__svg date-picker-month__svg_first"
          src="~@/assets/image/arrow.svg"
          alt="arrow"
        />
      </button>
      <div class="date-picker-month__text">
        <p class="date-picker-month__text-month">
          {{ listMonth[numMonth] }}
        </p>
        <p class="date-picker-month__text-year">{{ year }}</p>
      </div>
      <button
        class="date-picker-month__btn date-picker-month__btn_next"
        @click="nextMonth()"
      >
        <img
          class="date-picker-month__svg date-picker-month__svg_second"
          src="~@/assets/image/arrow.svg"
          alt="arrow"
        />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "DatePickerMonth",
  props: ["year", "numMonth"],
  data() {
    return {
      listMonth: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  methods: {
    prevMonth() {
      this.$emit("clickPrevMonth");
    },
    nextMonth() {
      this.$emit("clickNextMonth");
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker-month {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding: 19px 20px;
    border-bottom: 1px solid $border-color;
  }
  &__btn {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    &_prev {
      transform: rotate(-180deg);
    }
  }
  &__text {
    display: flex;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: $gray;
  }
  &__text-month {
    padding-right: 5px;
  }
}
</style>
