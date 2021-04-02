<template>
  <div class="form-custom-select">
    <div class="form-custom-select__wrapper">
      <h2 class="form-custom-select__title title title_center">
        Select technology
      </h2>
      <div class="form-custom-select__input">
        <input
          placeholder="Select framework"
          type="text"
          class="form-custom-select__input-item"
          v-model="SelectValue"
          readonly
          @click="isOpenList = !isOpenList"
        />
        <div class="form-custom-select__reset-wrapper">
          <button @click="reset()" class="form-custom-select__reset"></button>
        </div>
        <div
          class="form-custom-select__list-wrapper"
          :class="{ active: isOpenList }"
        >
          <ul class="form-custom-select__list">
            <li
              class="form-custom-select__list-item"
              v-for="(item, index) in selectList"
              :key="index"
              @click="selectItem(item, index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "FormCustomSelect",
  props: ["multiselect"],
  data() {
    return {
      isOpenList: false,
      isMaxSelect: true,
      SelectValue: [],
      getList: [],
      lengthList: "",
      selectList: [
        "Vue",
        "React",
        "Angular",
        "Vue1",
        "React1",
        "Angular1",
        "Vue2",
        "React2",
        "Angular2",
        "Vue3",
        "React3",
        "Angular4"
      ]
    };
  },
  computed: {
    ...mapGetters(["ADD_ITEM_IN_LIST", "DISABLED_BTN"])
  },
  methods: {
    ...mapActions(["TOGGLE_BTN", "TOGGLE_ENABLED_BTN", "TOGGLE_MASSIV"]),
    selectItem(item, index) {
      this.TOGGLE_BTN();
      const allItem = document.querySelectorAll(
        ".form-custom-select__list-item"
      );
      if (this.multiselect) {
        allItem[index].classList.add("hide");
        if (this.SelectValue.length > 1) {
          if (this.isMaxSelect) {
            if (this.getList.indexOf(item) === -1) {
              this.getList.push(item);
              this.ADD_ITEM_IN_LIST.push(item);
              this.SelectValue.push(`... и ещё ${this.lengthList - 1}`);
              this.isMaxSelect = false;
            }
          } else {
            if (this.getList.indexOf(item) === -1) {
              this.getList.push(item);
              this.ADD_ITEM_IN_LIST.push(item);
              this.SelectValue.pop();
              this.lengthList++;
              this.SelectValue.push(`... и ещё ${this.lengthList - 1}`);
            }
          }
        } else {
          if (this.getList.indexOf(item) === -1) {
            this.SelectValue.push(item);
            this.getList.push(item);
            this.ADD_ITEM_IN_LIST.push(item);
            this.lengthList = this.SelectValue.length;
          }
        }
      } else {
        this.getList = [];
        this.getList.push(item);
        this.SelectValue = item;
        this.isOpenList = false;
        allItem.forEach(e => {
          e.classList.remove("hide");
        });
        allItem[index].classList.add("hide");
        this.TOGGLE_MASSIV();
        this.ADD_ITEM_IN_LIST.push(item);
      }
    },
    reset() {
      this.TOGGLE_ENABLED_BTN();
      this.SelectValue = [];
      this.getList = [];
      this.isMaxSelect = true;
      this.lengthList = 0;
      const allItem = document.querySelectorAll(
        ".form-custom-select__list-item"
      );
      allItem.forEach(e => {
        e.classList.remove("hide");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.form-custom-select {
  position: relative;
  &__title {
    padding-left: 20px;
  }
  &__input {
    max-width: 250px;
    margin: 0 auto;
    overflow: hidden;
    padding-right: 4px;
  }
  &__input-item {
    cursor: pointer;
    width: 100%;
    max-width: 223px;
    width: 100%;
    border: 1px solid #b6b5b4;
    border-radius: 4px;
    padding: 8px 13px;
    color: #303030;
    outline: none;
    position: relative;
    z-index: 2;
    &::placeholder {
      color: #c2c2c2;
    }
  }
  &__list-wrapper {
    transform: translateY(-100%);
    transition: all 0.5s ease 0s;
    opacity: 0;
    &.active {
      transform: translateY(0px);
      opacity: 1;
    }
  }
  &__list {
    max-width: 249px;
    height: 98px;
    overflow-y: auto;
    width: 100%;
    padding-left: 0;
    list-style-type: none;
    text-align: left;
    border: 1px solid #b6b5b4;
    border-radius: 4px;
    margin: 0px;
    li {
      font-weight: 700;
      height: 32px;
      padding: 0px 8px;
      display: flex;
      align-items: center;
      cursor: pointer;
      &:hover {
        background-color: #ededed;
      }
      &:first-child {
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
      &:last-child {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      &.hide {
        cursor: default;
        background-color: #7a7a7a;
        color: #a8a8a8;
      }
    }
  }
  &__reset-wrapper {
    position: absolute;
    right: 40px;
    top: 45px;
    height: 24px;
  }
  &__reset {
    position: relative;
    height: 24px;
    width: 24px;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;

    &:before {
      content: "";
      position: absolute;
      top: 10px;
      right: 0;
      width: 100%;
      height: 3px;
      background-color: #f21b1b;
      border-radius: 2px;
      transform: rotate(-45deg);
    }
    &:after {
      content: "";
      position: absolute;
      top: 10px;
      right: 0;
      width: 100%;
      height: 3px;
      background-color: #f21b1b;
      border-radius: 2px;
      transform: rotate(45deg);
    }
  }
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
</style>
