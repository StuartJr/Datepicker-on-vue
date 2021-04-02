<template>
  <div class="form-input">
    <div class="form-input__wrapper">
      <h2 class="form-input__title title title_center">
        Your name
      </h2>
      <input
        placeholder="Title"
        type="text"
        class="form-input__input"
        @input="$emit('input', $event.target.value)"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "FormInput",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.form-input {
  &__wrapper {
    padding-bottom: 20px;
  }
  &__input {
    width: 100%;
    max-width: 250px;
    border: 1px solid #b6b5b4;
    border-radius: 4px;
    padding: 8px 13px;
    color: #303030;
    outline: none;
    &::placeholder {
      color: #c2c2c2;
    }
    &:focus {
      box-shadow: 0px 0px 4px 2px rgba(148, 160, 255, 1);
    }
  }
}
</style>
