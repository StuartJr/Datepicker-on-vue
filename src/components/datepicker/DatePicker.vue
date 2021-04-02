<template>
  <div class="date-picker">
    <div class="date-picker__wrapper">
      <div class="date-picker__header">
        <p class="date-picker__title">publication date</p>
        <p class="date-picker__reset reset" @click="resetInput()">reset</p>
      </div>
      <div class="date-picker__input-wrapper">
        {{ setInputAtt }}
        <div class="date-picker__input">
          <DatePickerField
            v-model="dateStart"
            :class="{ active: dateStart.length > 0 }"
            @showCalendar="showCalendar"
            inputFirst="inputFirst"
            placeHolder="From"
            :isShowCalendar="isShowCalendar"
          />
          <DatePickerView
            v-if="isShowCalendar"
            @resetInput="resetInput"
            @clickPrevMonth="clickPrevMonth"
            @clickNextMonth="clickNextMonth"
            @selectData="selectData"
            :year="year"
            :numMonth="month"
            :allDays="allDays"
            :prevDays="prevDays"
            :nextDays="nextDays"
          />
        </div>
        <span class="date-picker__span"></span>
        <div class="date-picker__input">
          <p class="date-picker__error" v-if="isError">
            Вторая дата должна быть больше первой
          </p>
          <DatePickerField
            v-model="dateEnd"
            :class="{ active: dateEnd.length > 0 }"
            @showCalendar="showCalendarSecond"
            inputFirst="inputSecond"
            placeHolder="To"
          />
          <DatePickerView
            v-if="isShowCalendarSecond"
            @resetInput="resetInput"
            @clickPrevMonth="clickPrevMonthSecond"
            @clickNextMonth="clickNextMonthSecond"
            @selectData="selectDataSecond"
            :year="yearEnd"
            :numMonth="monthEnd"
            :allDays="allDaysEnd"
            :prevDays="prevDaysEnd"
            :nextDays="nextDaysEnd"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DatePickerField from "./DatePickerField.vue";
import DatePickerView from "./DatePickerView.vue";

export default {
  name: "Datepicker",
  components: {
    DatePickerField,
    DatePickerView
  },
  data() {
    return {
      isShowCalendar: false,
      isShowCalendarSecond: false,
      isFirstOpen: true,
      isFirstOpenSecond: true,
      isError: false,
      dateStart: "",
      dateEnd: "",
      day: "",
      month: "",
      year: "",
      allDays: "",
      prevDays: "",
      nextDays: "",
      selectDay: "",
      selectMonth: "",
      selectYear: "",
      dayEnd: "",
      monthEnd: "",
      yearEnd: "",
      allDaysEnd: "",
      prevDaysEnd: "",
      nextDaysEnd: "",
      selectDayEnd: "",
      selectMonthEnd: "",
      selectYearEnd: "",
      selectIndex: ""
    };
  },
  computed: {
    setInputAtt: function() {
      // const allDays = document.querySelectorAll(
      //   ".date-picker-dates__column_today"
      // );
      // if (this.dateStart.length && this.dateEnd.length) {
      //   if (this.isShowCalendar) {
      //     for (let a = this.selectDay + 1; a <= 31; a++) {
      //       allDays[a - 1].classList.add("range");
      //     }
      //   }
      //   if (this.isShowCalendarSecond) {
      //     for (var i = 0; i < this.selectDayEnd - 1; i++) {
      //       allDays[i].classList.add("range");
      //     }
      //   }
      // } else {
      //   allDays.forEach(e => {
      //     e.classList.remove("range");
      //   });
      // }
      const secondInput = document.querySelectorAll("#inputSecond");
      if (this.dateStart.length > 0) {
        secondInput.forEach(e => {
          e.removeAttribute("disabled");
        });
        return "";
      } else {
        secondInput.forEach(e => {
          e.setAttribute("disabled", "true");
        });
        return "";
      }
    }
  },
  mounted() {
    console.log("Datepicker loaded 👍");
    const datePicker = document.querySelector(".date-picker");
    const nav = document.querySelector("#nav");
    let vm = this;
    document.addEventListener("click", function(item) {
      if (vm.isShowCalendar) {
        if (item.target === datePicker || item.target === nav) {
          vm.isShowCalendar = false;
        }
      }
      if (vm.isShowCalendarSecond) {
        if (item.target === datePicker || item.target === nav) {
          vm.isShowCalendarSecond = false;
        }
      }
    });
    const secondInput = document.querySelectorAll("#inputSecond");
    secondInput.forEach(e => {
      e.setAttribute("disabled", "true");
    });
  },
  updated() {
    let self = this;
    if (this.isShowCalendar) {
      if (this.selectDay.length != 0) {
        if (
          this.selectMonth - 1 == this.month &&
          this.selectYear == this.year
        ) {
          const allDays = document.querySelectorAll(
            ".date-picker-dates__column_today"
          );
          allDays.forEach(e => {
            e.classList.remove("active");
          });
          allDays[self.selectDay - 1].classList.add("active");
        } else {
          const allDays = document.querySelectorAll(
            ".date-picker-dates__column_today"
          );
          allDays.forEach(e => {
            e.classList.remove("active");
          });
        }
      }
    }
    if (this.isShowCalendarSecond) {
      if (this.selectDayEnd.length != 0) {
        if (
          this.selectMonthEnd - 1 == this.monthEnd &&
          this.selectYearEnd == this.yearEnd
        ) {
          const allDays = document.querySelectorAll(
            ".date-picker-dates__column_today"
          );
          allDays.forEach(e => {
            e.classList.remove("active");
          });
          allDays[self.selectDayEnd - 1].classList.add("active");
        } else {
          const allDays = document.querySelectorAll(
            ".date-picker-dates__column_today"
          );
          allDays.forEach(e => {
            e.classList.remove("active");
          });
        }
      }
    }
    if (this.isShowCalendarSecond) {
      if (this.selectIndex) {
        const allDays = document.querySelectorAll(
          ".date-picker-dates__column_today"
        );
        if (
          this.selectMonth - 1 == this.monthEnd &&
          this.selectYear == this.yearEnd
        ) {
          allDays[this.selectIndex - 1].classList.add("select");
        } else {
          allDays.forEach(e => {
            e.classList.remove("select");
          });
        }
      }
    }
  },
  methods: {
    resetInput() {
      this.selectDay = "";
      this.selectDayEnd = "";
      this.dateStart = "";
      this.dateEnd = "";
      this.selectIndex = "";
      this.isShowCalendarSecond = false;
      document.getElementById("inputFirst").value = "";
      document.getElementById("inputSecond").value = "";
      const allDaysToday = document.querySelectorAll(
        ".date-picker-dates__column_today"
      );
      allDaysToday.forEach(e => {
        e.classList.remove("active");
        e.classList.remove("select");
      });
      this.isError = false;

      const time = new Date();

      let day = time.getDate();
      let month = time.getMonth();
      let year = time.getFullYear();

      this.day = day;
      this.month = month;
      this.year = year;
      let lastDate = new Date(this.year, this.month, 0).getDate();
      this.allDays = lastDate;

      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.year, this.month, 0).getDay();
      let prevLastDate = new Date(this.year, this.month, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDays = days.split(/(?=(?:..)*$)/);

      //Дни следующего месяца
      let nextMonthDay = new Date(this.year, this.month + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDays = "";
      } else {
        this.nextDays = nextDayIndex;
      }

      this.dayEnd = day;
      this.monthEnd = month;
      this.yearEnd = year;
      let lastDateEnd = new Date(this.yearEnd, this.monthEnd, 0).getDate();
      this.allDaysEnd = lastDateEnd;

      //Дни предыдущего месяца
      let prevDayMonthEnd = new Date(this.yearEnd, this.monthEnd, 0).getDay();
      let prevLastDateEnd = new Date(this.yearEnd, this.monthEnd, 0).getDate();
      let daysEnd = "";
      for (let x = prevDayMonthEnd; x > 0; x--) {
        daysEnd += prevLastDateEnd - x + 1;
      }
      this.prevDaysEnd = daysEnd.split(/(?=(?:..)*$)/);

      //Дни следующего месяца
      let nextMonthDayEnd = new Date(
        this.yearEnd,
        this.monthEnd + 1,
        0
      ).getDay();
      let nextDayIndexEnd = 7 - nextMonthDayEnd;
      if (nextDayIndexEnd == 7) {
        this.nextDaysEnd = "";
      } else {
        this.nextDaysEnd = nextDayIndexEnd;
      }
    },
    showCalendar() {
      this.isShowCalendar = !this.isShowCalendar;
      if (this.isShowCalendar) {
        this.isShowCalendarSecond = false;
      }
      //Дни текущего месяца
      if (this.isFirstOpen) {
        const time = new Date();

        let day = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();

        this.day = day;
        this.month = month;
        this.year = year;
        let lastDate = new Date(this.year, this.month, 0).getDate();
        this.allDays = lastDate;
        this.isFirstOpen = false;
      }
      if (this.selectDay) {
        this.month = this.selectMonth - 1;
        this.year = this.selectYear;
        let lastDate = new Date(this.year, this.month + 1, 0).getDate();
        this.allDays = lastDate;
      }

      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.year, this.month, 0).getDay();
      let prevLastDate = new Date(this.year, this.month, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDays = days.split(/(?=(?:..)*$)/);

      //Дни следующего месяца
      let nextMonthDay = new Date(this.year, this.month + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDays = "";
      } else {
        this.nextDays = nextDayIndex;
      }
    },
    clickPrevMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
      //Дни текущего месяца
      let lastDate = new Date(this.year, this.month + 1, 0).getDate();
      this.allDays = lastDate;
      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.year, this.month, 0).getDay();
      let prevLastDate = new Date(this.year, this.month, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDays = days.split(/(?=(?:..)*$)/);
      //Дни следующего месяца
      let nextMonthDay = new Date(this.year, this.month + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDays = "";
      } else {
        this.nextDays = nextDayIndex;
      }
      //Выбор даты
      if (this.isShowCalendar) {
        if (this.selectDay.length != 0) {
          if (
            this.selectMonth - 1 == this.month &&
            this.selectYear == this.year
          ) {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
            allDays[this.selectDay - 1].classList.add("active");
          } else {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
          }
        }
      }
    },
    clickNextMonth() {
      if (this.month == 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }

      //Дни текущего месяца
      let lastDate = new Date(this.year, this.month + 1, 0).getDate();
      this.allDays = lastDate;
      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.year, this.month, 0).getDay();
      let prevLastDate = new Date(this.year, this.month, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDays = days.split(/(?=(?:..)*$)/);
      //Дни следующего месяца
      let nextMonthDay = new Date(this.year, this.month + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDays = "";
      } else {
        this.nextDays = nextDayIndex;
      }
      //Выбор даты
      if (this.isShowCalendar) {
        if (this.selectDay.length != 0) {
          if (
            this.selectMonth - 1 == this.month &&
            this.selectYear == this.year
          ) {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
            allDays[this.selectDay - 1].classList.add("active");
          } else {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
          }
        }
      }
    },
    selectData(index) {
      const allDays = document.querySelectorAll(
        ".date-picker-dates__column_today"
      );
      allDays.forEach(e => {
        e.classList.remove("active");
      });
      allDays[index - 1].classList.add("active");
      this.selectDay = index;
      this.selectMonth = this.month + 1;
      this.selectYear = this.year;
      if (this.selectDay < 10) {
        if (this.selectMonth < 10) {
          this.dateStart =
            "0" +
            this.selectDay +
            "/0" +
            this.selectMonth +
            "/" +
            this.selectYear;
        } else {
          this.dateStart =
            "0" +
            this.selectDay +
            "/" +
            this.selectMonth +
            "/" +
            this.selectYear;
        }
      } else {
        if (this.selectMonth < 10) {
          this.dateStart =
            this.selectDay + "/0" + this.selectMonth + "/" + this.selectYear;
        } else {
          this.dateStart =
            this.selectDay + "/" + this.selectMonth + "/" + this.selectYear;
        }
      }
      document.getElementById("inputFirst").value = this.dateStart;
    },
    showCalendarSecond() {
      this.isShowCalendarSecond = !this.isShowCalendarSecond;
      if (this.isShowCalendarSecond) {
        this.isShowCalendar = false;
      }
      this.selectIndex = this.selectDay;
      //Дни текущего месяца
      if (this.isFirstOpenSecond) {
        const time = new Date();

        let day = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();

        this.dayEnd = day;
        this.monthEnd = month;
        this.yearEnd = year;
        let lastDate = new Date(this.yearEnd, this.monthEnd, 0).getDate();
        this.allDaysEnd = lastDate;
        this.isFirstOpenSecond = false;
      }
      if (this.selectDayEnd) {
        this.monthEnd = this.selectMonthEnd - 1;
        this.yearEnd = this.selectYearEnd;
        let lastDate = new Date(this.yearEnd, this.monthEnd + 1, 0).getDate();
        this.allDaysEnd = lastDate;
      }
      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.yearEnd, this.monthEnd, 0).getDay();
      let prevLastDate = new Date(this.yearEnd, this.monthEnd, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDaysEnd = days.split(/(?=(?:..)*$)/);

      //Дни следующего месяца
      let nextMonthDay = new Date(this.yearEnd, this.monthEnd + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDaysEnd = "";
      } else {
        this.nextDaysEnd = nextDayIndex;
      }
    },
    clickPrevMonthSecond() {
      if (this.monthEnd === 0) {
        this.monthEnd = 11;
        this.yearEnd--;
      } else {
        this.monthEnd--;
      }
      //Дни текущего месяца
      let lastDate = new Date(this.yearEnd, this.monthEnd + 1, 0).getDate();
      this.allDaysEnd = lastDate;
      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.yearEnd, this.monthEnd, 0).getDay();
      let prevLastDate = new Date(this.yearEnd, this.monthEnd, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDaysEnd = days.split(/(?=(?:..)*$)/);
      //Дни следующего месяца
      let nextMonthDay = new Date(this.yearEnd, this.monthEnd + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDaysEnd = "";
      } else {
        this.nextDaysEnd = nextDayIndex;
      }
      //Выбор даты
      if (this.isShowCalendarSecond) {
        if (this.selectDayEnd.length != 0) {
          if (
            this.selectMonthEnd - 1 == this.monthEnd &&
            this.selectYearEnd == this.yearEnd
          ) {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
            allDays[this.selectDayEnd - 1].classList.add("active");
          } else {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
          }
        }
      }
      if (
        this.selectMonth - 1 == this.monthEnd &&
        this.selectYear == this.yearEnd
      ) {
        this.selectIndex = this.selectDay;
      } else {
        this.selectIndex = "";
      }
      const allDays = document.querySelectorAll(
        ".date-picker-dates__column_today"
      );
      if (this.selectDay) {
        if (
          this.selectMonth - 1 == this.monthEnd &&
          this.selectYear == this.yearEnd
        ) {
          allDays[this.selectIndex - 1].classList.add("select");
        } else {
          allDays.forEach(e => {
            e.classList.remove("select");
          });
        }
      }
    },
    clickNextMonthSecond() {
      if (this.monthEnd == 11) {
        this.monthEnd = 0;
        this.yearEnd++;
      } else {
        this.monthEnd++;
      }

      //Дни текущего месяца
      let lastDate = new Date(this.yearEnd, this.monthEnd + 1, 0).getDate();
      this.allDaysEnd = lastDate;
      //Дни предыдущего месяца
      let prevDayMonth = new Date(this.yearEnd, this.monthEnd, 0).getDay();
      let prevLastDate = new Date(this.yearEnd, this.monthEnd, 0).getDate();
      let days = "";
      for (let x = prevDayMonth; x > 0; x--) {
        days += prevLastDate - x + 1;
      }
      this.prevDaysEnd = days.split(/(?=(?:..)*$)/);
      //Дни следующего месяца
      let nextMonthDay = new Date(this.yearEnd, this.monthEnd + 1, 0).getDay();
      let nextDayIndex = 7 - nextMonthDay;
      if (nextDayIndex == 7) {
        this.nextDaysEnd = "";
      } else {
        this.nextDaysEnd = nextDayIndex;
      }
      //Выбор даты
      if (this.isShowCalendarSecond) {
        if (this.selectDayEnd.length != 0) {
          if (
            this.selectMonthEnd - 1 == this.monthEnd &&
            this.selectYearEnd == this.yearEnd
          ) {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
            allDays[this.selectDayEnd - 1].classList.add("active");
          } else {
            const allDays = document.querySelectorAll(
              ".date-picker-dates__column_today"
            );
            allDays.forEach(e => {
              e.classList.remove("active");
            });
          }
        }
      }
      if (
        this.selectMonth - 1 == this.monthEnd &&
        this.selectYear == this.yearEnd
      ) {
        this.selectIndex = this.selectDay;
      } else {
        this.selectIndex = "";
      }
      const allDays = document.querySelectorAll(
        ".date-picker-dates__column_today"
      );
      if (this.selectDay) {
        if (
          this.selectMonth - 1 == this.monthEnd &&
          this.selectYear == this.yearEnd
        ) {
          allDays[this.selectIndex - 1].classList.add("select");
        } else {
          allDays.forEach(e => {
            e.classList.remove("select");
          });
        }
      }
    },
    selectDataSecond(index) {
      this.selectYearEnd = this.yearEnd;
      if (
        (index >= this.selectIndex + 1 &&
          this.monthEnd + 1 >= this.selectMonth &&
          this.selectYearEnd >= this.selectYear) ||
        this.selectYear < this.selectYearEnd
      ) {
        const allDays = document.querySelectorAll(
          ".date-picker-dates__column_today"
        );
        allDays.forEach(e => {
          e.classList.remove("active");
        });
        allDays[index - 1].classList.add("active");
        this.selectDayEnd = index;
        this.selectMonthEnd = this.monthEnd + 1;
        if (this.selectDayEnd < 10) {
          if (this.selectMonthEnd < 10) {
            this.dateEnd =
              "0" +
              this.selectDayEnd +
              "/0" +
              this.selectMonthEnd +
              "/" +
              this.selectYearEnd;
          } else {
            this.dateEnd =
              "0" +
              this.selectDayEnd +
              "/" +
              this.selectMonthEnd +
              "/" +
              this.selectYearEnd;
          }
        } else {
          if (this.selectMonthEnd < 10) {
            this.dateEnd =
              this.selectDayEnd +
              "/0" +
              this.selectMonthEnd +
              "/" +
              this.selectYearEnd;
          } else {
            this.dateEnd =
              this.selectDayEnd +
              "/" +
              this.selectMonthEnd +
              "/" +
              this.selectYearEnd;
          }
        }
        document.getElementById("inputSecond").value = this.dateEnd;
        this.isError = false;
      } else {
        this.isError = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.date-picker {
  width: 100%;
  height: 100vh;
  &__wrapper {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    max-width: 400px;
    margin: 0 auto;
  }
  &__input-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__input {
    position: relative;
  }
  &__error {
    color: red;
    position: absolute;
    font-size: 12px;
    top: -20px;
    left: -220px;
    font-weight: 700;
    letter-spacing: 0.4px;
  }
  &__span {
    background-color: $def-color;
    height: 2px;
    width: 20px;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
  }
  &__title {
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: $color-text;
    text-transform: uppercase;
    text-align: left;
    padding-bottom: 10px;
  }
}
</style>
