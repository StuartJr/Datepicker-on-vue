<template>
  <div class="form-custom-checkbox">
    <div class="form-custom-checkbox__wrapper">
      <h2 class="form-custom-checkbox__title title title_center">
        Select checkbox
      </h2>
      <div
        class="form-custom-checkbox__item"
        v-for="(item, index) in list"
        :key="index"
      >
        <div
          class="form-custom-checkbox__item-checkbox"
          :class="{ active: item.isSelected }"
          @click="selectItem(item)"
        ></div>
        <p class="form-custom-checkbox__item-text" @click="selectItem(item)">
          {{ item.library }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "FormCustomCheckbox",
  props: ["multiselect"],
  data() {
    return {
      list: [
        {
          library: "VueCheckbox",
          isSelected: false
        },
        {
          library: "ReactCheckbox",
          isSelected: false
        },
        {
          library: "AngularCheckbox",
          isSelected: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["CHECKBOX_LIST"])
  },
  methods: {
    ...mapActions(["TOGGLE_BTN_DIS_CHECK", "TOGGLE_BTN_ENB_CHECK"]),
    selectItem(item) {
      item.isSelected = !item.isSelected;
      if (this.multiselect) {
        if (item.isSelected) {
          if (this.CHECKBOX_LIST.indexOf(item.library) === -1) {
            this.CHECKBOX_LIST.push(item.library);
          }
        } else {
          let indexItem = this.CHECKBOX_LIST.indexOf(item.library);
          this.CHECKBOX_LIST.splice(indexItem, 1);
        }
      } else {
        if (item.isSelected) {
          for (var i = 0; i < this.list.length; i++) {
            this.list[i].isSelected = false;
          }
          item.isSelected = true;
          this.CHECKBOX_LIST.splice(item.library);
          this.CHECKBOX_LIST.push(item.library);
        } else {
          this.CHECKBOX_LIST.splice(item.library);
        }
      }
      if (this.CHECKBOX_LIST.length == 0) {
        this.TOGGLE_BTN_DIS_CHECK();
      } else {
        this.TOGGLE_BTN_ENB_CHECK();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.form-custom-checkbox {
  &__item {
    display: flex;
    max-width: 278px;
    margin: 0px auto 10px auto;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__item-checkbox {
    width: 24px;
    height: 24px;
    border: 1px solid #b6b5b4;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    &.active {
      border: 1px solid #3f9cf2;
      background-color: #3f9cf2;
      &:before {
        content: "";
        position: absolute;
        top: 12px;
        left: 2px;
        width: 12px;
        height: 3px;
        background-color: #f57d0c;
        transform: rotate(50deg);
        border-radius: 2px;
      }
      &:after {
        content: "";
        position: absolute;
        top: 10px;
        left: 6px;
        width: 18px;
        height: 3px;
        background-color: #f57d0c;
        transform: rotate(-50deg);
        border-radius: 2px;
      }
    }
  }
  &__item-text {
    cursor: pointer;
    padding-left: 8px;
    display: flex;
    align-items: center;
  }
}
</style>
