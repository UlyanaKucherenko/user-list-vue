<template>
  <ul class="birthday-list custom-scroll">
    <div
        class="" v-for="([month,users]) in Object.entries(_usersBirthday)"
        :key="month"
    >
      <div class="birthday-list__month">{{ month }}</div>
      <div
          v-if="!users.length"
          class="birthday-list__content"
      >
        <div>No Employees</div>
      </div>
      <ul
          v-for="(item) in users"
          :key="item.id"
          class="birthday-list__content"
      >
        <li class="birthday-list__item-name">
          {{ item.firstName }} {{ item.lastName }} - {{ formattedDate(item.dob) }}
        </li>
      </ul>
    </div>
  </ul>
</template>

<script>
import {months} from "@/utils/constants";

export default {
  name: "BirthdayList",
  computed: {
    _usersBirthday() {
      return this.$store.getters["users/usersBirthday"]
    },
  },
  methods: {
    formattedDate(date) {
      return `${new Date(date).getDate()} ${months[new Date(date).getMonth()]}, ${new Date(date).getFullYear()} year`
    },
  }
}
</script>

<style lang="scss" scoped>
.birthday-list {

  padding: 0 16px;
  overflow-y: scroll;
  height: calc(100vh - var(--header-height) - 16px);

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 8px;
  }

  &__month {
    width: 100%;
    font-weight: 700;
    color: var(--blue-darken);
    background-color: var(--yellow-light);
    text-align: center;
  }

  &__item-name {
    color: var(--blue-darken);
    font-weight: 700;
    list-style: initial;
  }

  &__item-name-active {
    color: blue;
  }

  &__item-btns {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>