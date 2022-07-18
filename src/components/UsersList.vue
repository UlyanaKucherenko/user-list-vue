<template>
  <div class="users-list custom-scroll">
    <div
        class="users-list__item"
        v-for="([letter,users]) in Object.entries(_alphabetUsersList)"
        :key="letter"
    >
      <div class="users-list__item-letter">{{ letter }}:</div>
      <div v-if="!users.length" class="users-list__item-content">
        <div>No Employees</div>
      </div>
      <div
          class="users-list__item-content"
          v-else
          v-for="(item) in users"
          :key="item.id">
        <div class="users-list__item-name"
             :class="{'users-list__item-name-active': item.isActive}"
        >
          {{ item.firstName }} {{ item.lastName }}
        </div>
        <div class="users-list__item-btns">
          <label>
            <input type="radio" value="true" v-model="item.isActive" @click="isActiveToggle(item.id)">
            <span>active</span>
          </label>
          <label>
            <input type="radio" value="false" v-model="item.isActive" @click="isActiveToggle(item.id)">
            <span>not active</span>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UsersList",
  computed: {
    _alphabetUsersList() {
      return this.$store.getters["users/alphabetUsersList"]
    },
  },
  methods: {
    isActiveToggle(id) {
      this.$store.commit('users/SET_IS_ACTIVE_TOGGLE', id)
    },
  }
}
</script>

<style lang="scss" scoped>
.users-list {

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  overflow-y: scroll;
  height: calc(100vh - var(--header-height) - 16px);
  padding-right: 16px;


  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px;
  }

  &__item-content {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__item-letter {
    width: 100%;
    color: var(--blue-darken);
    font-weight: 700;
    margin-bottom: 16px;
    background-color: var(--yellow-light);
    text-align: center;
  }

  &__item-name {
    color: var(--blue-darken);
    font-weight: 700;
  }

  &__item-name-active {
    color: var(--blue-darken-1);
  }

  &__item-btns {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
}

</style>