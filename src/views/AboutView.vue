<template>
  <main class="main">
    <div class="about">
      <h1>
        This is
        <a class="about__author-link" href="https://github.com/dankozz1t">MY</a>
        sandbox "Apartment booking &#8220;<strong>ЄHouse</strong>&#8221; " for
        learning Vue 2
      </h1>

      <div>
        <a href="https://apt-booking-api.herokuapp.com/docs/">
          <strong>Backend</strong>
          https://apt-booking-api.herokuapp.com/docs/
        </a>
      </div>
      <div>
        <a href="https://github.com/dankozz1t/EHouse">
          <strong>Frontend</strong>

          https://github.com/dankozz1t/EHouse
        </a>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.main {
  margin: 60px 0;
}

.about__author-link {
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    border-radius: 7px;
    border: 2px solid blueviolet;
  }
  &:hover {
    &:before {
      border: 2px solid rgb(122, 32, 207);
    }
  }
}
</style>
