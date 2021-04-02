<template>
  <div class="form-select">
    <div class="form-select__wrapper">
      <select
        id="select"
        class="form-select__select"
        @input="$emit('input', $event.target.value)"
      >
        <option
          class="form-select__option"
          v-for="(item, index) in framework"
          :key="index"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormSelect",
  props: ["framework"],
  mounted() {
    const select = document.getElementById("select");
    select.value = "";
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.form-select {
  &__select {
    width: 100%;
    max-width: 250px;
    border: 1px solid #b6b5b4;
    border-radius: 4px;
    padding: 8px 13px;
    outline: none;
    &::placeholder {
      color: #303030;
    }
    &:focus {
      box-shadow: 0px 0px 4px 2px rgba(148, 160, 255, 1);
    }
  }
  &__option {
    padding: 5px 0px
    &:hover {
      color: red;
      background-color: red;
    }
  }
}
</style>
