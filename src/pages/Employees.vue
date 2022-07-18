<template>
  <div class="employees">
    <VOverlay v-if="_fetchingStatus === requestStatus.PENDING">
      <VLoader/>
    </VOverlay>
    <div class="employees__container">
      <div class="employees__col">
        <h2 class="employees__title">Employees:</h2>
        <ListUsers />
      </div>
      <div class="employees__col">
        <h2 class="employees__title">Employees birthday:</h2>
        <BirthdayList />
      </div>
    </div>
  </div>
</template>

<script>
import ListUsers from "@/components/UsersList";
import BirthdayList from "@/components/BirthdayList";
import {requestStatus} from '@/utils/constants';

export default {
  name: 'Employees',
  components: {BirthdayList, ListUsers},
  data() {
    return {
      requestStatus,
    }
  },
  computed: {
    _fetchingStatus() {
      return this.$store.state.users.fetchingStatus;
    },
  },
  mounted() {
    this.getUsers()
  },
  methods: {
    async getUsers() {
      await this.$store.dispatch('users/setUsers')
    }}
}
</script>

<style lang="scss" scoped>

.employees {

  &__container {
    display: flex;
  }

  &__col {
    width: 65%;

    &:last-child {
      width: 35%;
    }
  }

  &__title{
    height: var(--header-height);
    padding: 10px;
  }
}

</style>
