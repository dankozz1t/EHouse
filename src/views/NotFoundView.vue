<template>
  <main class="main">
    <section>
      <h1 class="error__title">404 NOT FOUND</h1>
      <img
        class="error__image"
        src="https://www.online-tech-tips.com/wp-content/uploads/2022/03/image-41.jpeg"
        alt="not found image"
        width="600"
        height="600"
      />
    </section>
  </main>
</template>

<script>
export default { name: "NotFoundView" };
</script>

<style lang="scss" scoped>
.main {
  margin: 60px 0;
}

.error__title {
  font-size: 60px;

  text-align: center;
  color: darkred;
}

.error__image {
  display: inline-block;
}
</style>
