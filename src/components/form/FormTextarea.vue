<template>
  <div class="form-textarea">
    <div class="form-textarea__wrapper">
      <h2 class="form-textarea__title title title_center">
        About myself
      </h2>
      <textarea
        placeholder="Enter text"
        class="form-textarea__textarea"
        @input="$emit('input', $event.target.value)"
      >
      </textarea>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormTextarea",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.form-textarea {
  &__textarea {
    resize: none;
    height: 200px;
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
