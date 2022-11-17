<template>
  <section class="apartments-owner">
    <h2 class="apartments-owner__title">Owner Information :</h2>
    <p class="apartments-owner__info">
      <span class="apartments-owner__info--bold">Name:</span> {{ owner.name }}
    </p>
    <p class="apartments-owner__info">
      <span class="apartments-owner__info--bold">Phone:</span> {{ owner.phone }}
    </p>
    <p class="apartments-owner__info">
      <span class="apartments-owner__info--bold">Email:</span> {{ owner.email }}
    </p>
  </section>
</template>

<script>
export default {
  name: "ApartmentsOwner",
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartments-owner {
  padding: 20px;
  font-weight: 400;
  text-align: start;

  background-color: var(--secondary-accent-cl);
}

.apartments-owner__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.apartments-owner__info {
  margin-top: 6px;

  &--bold {
    font-weight: 800;
  }
}
</style>
