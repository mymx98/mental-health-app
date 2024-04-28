<template>
  <div class="Intro">
    <div class='Intro__app-logo-wrapper'>
      Sonder
    </div>
    <div class='Intro__app-tagline-1-wrapper'>
      The human narrative.
    </div>
    <div class='Intro__app-tagline-2-wrapper'>
      Not the social echo.
    </div>
    <div class='Intro__app-tagline-3-wrapper'>
      A Social Media For Humans.
    </div>
  </div>
</template>

<style lang='scss' scoped>
@font-face {
  font-family: 'Barlow';
  src: url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap') format('truetype');
}
.Intro {
  // height: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;

  &__app-logo-wrapper {
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 48px;
    color: #6C9286;
    font-weight: bold;
    font-family: 'Barlow', sans-serif;
  }

  &__app-tagline-1-wrapper {
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 13px;
    color: #6C9286;
    font-weight: bold;
    font-family:'Montserrat Classic', sans-serif;
  }

  &__app-tagline-2-wrapper {
    text-align: center;
    font-size: 10px;
    color: #6C9286;
    font-family: 'Marta', sans-serif;
  }

  &__app-tagline-3-wrapper {
    text-align: center;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 20px;
    color: color-grey;
    font-weight: bold;
    font-family: 'Barlow', sans-serif;
  }

  &__app-logo {
    width: 200px;
    // margin-bottom: 16px;
  }

  &__content {
    overflow-y: auto;
  }
}
</style>
