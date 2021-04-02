<template>
  <div class="form-part">
    <div class="form-part__wrapper">
      <div class="form-part__wrapper-item">
        <div class="form-part__item"></div>
        <div class="form-part__item"></div>
        <div class="form-part__item"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormPart",
  mounted() {
    const allItem = document.querySelectorAll(".form-part__item");
    allItem[0].classList.add("select");
  }
};
</script>
<style lang="scss" scoped>
.form-part {
  padding-bottom: 30px;
  &__wrapper-item {
    display: flex;
    justify-content: space-between;
    max-width: 350px;
    margin: 0 auto;
  }
  &__item {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    background-color: #dfe4e8;
    position: relative;
    border: 2px solid #dfe4e8;
    &:first-child {
      &:before {
        content: none;
      }
    }
    &:last-child {
      &:after {
        content: none;
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -38px;
      width: 36px;
      height: 3px;
      background-color: #dfe4e8;
      transform: translateY(-50%);
    }
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      right: -38px;
      width: 36px;
      height: 3px;
      background-color: #dfe4e8;
      transform: translateY(-50%);
    }
    &.select {
      border: 2px solid #3f9cf2;
      &:before {
        background-color: #3f9cf2;
      }
    }
    &.active {
      border: 2px solid #3f9cf2;
      background-color: #3f9cf2;
      &:before {
        background-color: #3f9cf2;
      }
      &:after {
        background-color: #3f9cf2;
      }
    }
  }
}
</style>
