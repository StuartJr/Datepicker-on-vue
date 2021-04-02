<template>
  <div class="date-picker-field">
    <div class="date-picker-field__wrapper">
      <input
        type="text"
        class="date-picker-field__input"
        :placeholder="placeHolder"
        :id="inputFirst"
        @input="$emit('input', $event.target.value)"
        @click="showCalendar()"
        readonly
      />
      <svg
        class="date-picker-field__input-svg"
        :class="{ rotate: isShowCalendar }"
        width="14"
        height="9"
        viewBox="0 0 14 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.99992 5.29277L12.2928 -0.00012207L13.707 1.41409L6.99992 8.1212L0.292817 1.41409L1.70703 -0.00012207L6.99992 5.29277Z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "DatePickerField",
  props: ["inputFirst", "isShowCalendar", "placeHolder"],
  data() {
    return {};
  },
  methods: {
    showCalendar() {
      this.$emit("showCalendar");
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker-field {
  &.active {
    .date-picker-field__input {
      background-color: $dark-yellow;

      &:hover {
        background-color: $light-yellow;
      }
    }

    .date-picker-field__input-svg {
      fill: $white;
    }
  }
  &__wrapper {
    position: relative;
    display: flex;
    max-width: 181px;
  }
  &__input {
    max-width: 164px;
    cursor: pointer;
    background-color: $input-bag;
    outline: none;
    border: none;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: $white;
    font-weight: 600;
    padding: 7px 0px 8px 13px;
    border-radius: 5px;

    &::placeholder {
      color: $color-text;
      font-weight: 400;
    }
  }
  &__input-svg {
    cursor: pointer;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    fill: $color-text;
    transition: all 0.3s ease 0s;

    &.rotate {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}
</style>
