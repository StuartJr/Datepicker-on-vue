<template>
  <div class="date-picker-dates">
    <div class="date-picker-dates__wrapper">
      <table class="date-picker-dates__table">
        <tr class="date-picker-dates__string">
          <td
            class="date-picker-dates__column date-picker-dates__column_prev"
            v-for="item in prevDays"
            :key="item.id"
          >
            {{ item }}
          </td>
          <td
            class="date-picker-dates__column date-picker-dates__column_today"
            v-for="(index, item) in allDays"
            :key="index"
            @click="selectData(index)"
          >
            {{ item + 1 }}
          </td>
          <td
            class="date-picker-dates__column date-picker-dates__column_next"
            v-for="item in nextDays"
            :key="item.id"
          >
            {{ item }}
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "DatePickerDates",
  props: ["allDays", "prevDays", "nextDays"],
  methods: {
    selectData(index) {
      this.$emit("selectData", index);
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker-dates {
  &__table {
    max-width: 355px;
    margin: 0 auto;
  }
  &__string {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  &__column {
    position: relative;
    margin-top: 8px;
    height: 40px;
    max-width: 48px;
    width: 40px;
    margin-left: 4px;
    margin-right: 4px;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    justify-content: center;
    &_prev {
      color: $light-gray;
    }
    &_today {
      cursor: pointer;
      color: $gray;
      &.active {
        color: $white;
        &:before {
          content: "";
          width: 40px;
          height: 40px;
          top: 2%;
          left: 2%;
          position: absolute;
          background-color: $dark-yellow;
          border-radius: 50%;
          z-index: -1;
        }
      }
      &.select {
        color: $white;
        &:after {
          content: "";
          width: 40px;
          height: 40px;
          top: 2%;
          left: 2%;
          position: absolute;
          background-color: $dark-yellow;
          border-radius: 50%;
          z-index: -1;
        }
      }
    }
    &_next {
      color: $light-gray;
    }
  }
}
</style>
