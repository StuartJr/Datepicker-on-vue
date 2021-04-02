<template>
  <div class="form-wrapper">
    <div class="form-wrapper__wrapper">
      <FormPart />
      <div class="form-wrapper__text border" v-if="countPart == 1">
        <FormInput v-model="inputValue" />
        <FormTextarea v-model="textareaValue" />
        <div class="form-wrapper__btn">
          <button
            :disabled="!inputValue && !textareaValue"
            class="form-wrapper__btn-item"
            @click="nextPart()"
          >
            Next
          </button>
        </div>
      </div>
      <div class="form-wrapper__select border" v-if="countPart == 2">
        <!-- <FormSelect :framework="framework" v-model="selectValue" /> -->
        <FormCustomSelect :multiselect="true" />
        <div class="form-wrapper__btn">
          <button
            :disabled="!DISABLED_BTN"
            @click="nextPart()"
            class="form-wrapper__btn-item"
          >
            Next
          </button>
        </div>
      </div>
      <div class="form-wrapper__checkbox border" v-if="countPart == 3">
        <!-- <FormCheckbox /> -->
        <FormCustomCheckbox :multiselect="true" />
        <div class="form-wrapper__btn">
          <button
            class="form-wrapper__btn-item"
            @click="sendForm()"
            :disabled="BTN_CHECKBOX"
          >
            Next
          </button>
        </div>
      </div>
      <div class="form-wrapper__final border" v-if="countPart == 4">
        <FormFinal :inputValue="inputValue" :textareaValue="textareaValue" />
      </div>
    </div>
  </div>
</template>
<script>
import FormPart from "./FormPart.vue";
import FormInput from "./FormInput.vue";
import FormTextarea from "./FormTextarea.vue";
// import FormSelect from "./FormSelect.vue";
import FormCustomSelect from "./FormCustomSelect.vue";
// import FormCheckbox from "./FormCheckbox.vue";
import FormCustomCheckbox from "./FormCustomCheckbox.vue";
import FormFinal from "./FormFinal.vue";
import { mapGetters } from "vuex";

export default {
  name: "FormWrapper",
  components: {
    FormPart,
    FormInput,
    FormTextarea,
    FormCustomSelect,
    FormFinal,
    FormCustomCheckbox
    // FormSelect
    // FormCheckbox
  },
  data() {
    return {
      inputValue: "",
      textareaValue: "",
      framework: ["Vue", "React", "Angular"],
      selectValue: "",
      countPart: 1
    };
  },
  computed: {
    ...mapGetters(["DISABLED_BTN", "BTN_CHECKBOX"])
  },
  methods: {
    nextPart() {
      this.countPart++;
      const allItem = document.querySelectorAll(".form-part__item");
      allItem[this.countPart - 1].classList.add("select");
      allItem[this.countPart - 2].classList.add("active");
    },
    sendForm() {
      this.countPart = 4;
      const allItem = document.querySelectorAll(".form-part__item");
      allItem.forEach(e => {
        e.classList.remove("select");
        e.classList.add("active");
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.form-wrapper {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  .border {
    max-width: 400px;
    margin: 0 auto;
    border: 1px solid #b6b5b4;
    border-radius: 8px;
    padding: 20px 15px;
  }
  &__btn {
    padding: 10px 0px;
  }
  &__btn-item {
    background: none;
    border: 1px solid #b6b5b4;
    border-radius: 4px;
    padding: 8px 13px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 0.3px;
    color: #7f7f7f;
    outline: none;
    &:hover {
      background-color: #b6b5b4;
      color: #010203;
    }
    &:disabled {
      cursor: default;
      &:hover {
        background: none;
        color: #7f7f7f;
      }
    }
  }
}
</style>
