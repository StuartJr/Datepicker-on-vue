<template>
  <div class="form-checkbox">
    <div class="form-checkbox__wrapper">
      <label
        class="form-checkbox__label"
        v-for="(item, index) in list"
        :key="index"
      >
        <input
          :value="item"
          type="checkbox"
          class="form-checkbox__input"
          v-model="listValue"
        />
        {{ item }}
      </label>
      <ul>
        <li v-for="(item, index) in listValue" :key="index">
          {{ `#${item}` }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "FormCheckbox",
  data() {
    return {
      list: ["Vue", "React", "Angular"],
      listValue: []
    };
  }
};
</script>
<style lang="scss" scoped>
.form-checkbox {
  &__wrapper {
    height: 54px;
  }
  ul {
    padding-left: 0;
    margin: 10px auto;
    list-style-type: none;
    display: flex;
    li {
      margin: 0px 6px;
      padding: 0px 5px;
      background-color: #b6b5b4;
      border-radius: 4px;
    }
  }
}
</style>
