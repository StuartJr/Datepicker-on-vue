<template>
  <div class="form-final">
    <div class="form-final__wrapper">
      <div class="form-final__item">
        <h2 class="form-final__title title title_left">
          Your name: <span class="text">{{ inputValue }}</span>
        </h2>
      </div>
      <div class="form-final__item">
        <h2 class="form-final__title title">
          About you:
        </h2>
        <p class="form-final__text form-final__text_table">
          {{ textareaValue }}
        </p>
      </div>
      <div class="form-final__item">
        <h2 class="form-final__title title">
          Selected technology:
        </h2>
        <!-- <p class="form-final__text">{{ ADD_ITEM_IN_LIST.join(", ") }}</p> -->
        <div class="form-final__text-wrapper">
          <p
            class="form-final__text form-final__text_list"
            v-for="(item, index) in ADD_ITEM_IN_LIST"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
      <div class="form-final__item">
        <h2 class="form-final__title title">
          Selected checkbox:
        </h2>
        <div class="form-final__text-wrapper">
          <p
            class="form-final__text form-final__text_list"
            v-for="(item, index) in CHECKBOX_LIST"
            :key="index"
          >
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "FormFinal",
  props: {
    inputValue: String,
    textareaValue: String
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["ADD_ITEM_IN_LIST", "CHECKBOX_LIST"])
  }
};
</script>
<style lang="scss" scoped>
.form-final {
  &__text-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  &__text {
    &_table {
      border: 1px solid #b6b5b4;
      border-radius: 8px;
      padding: 8px 13px;
      text-align: left;
    }
    &_list {
      display: flex;
      margin: 4px 6px;
      padding: 3px 8px;
      background-color: #b6b5b4;
      border-radius: 4px;
    }
  }
}
</style>
