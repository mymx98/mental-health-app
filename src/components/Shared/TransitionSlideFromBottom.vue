<template>
  <Transition name='slide-from-bottom'>
    <slot />
  </Transition>
</template>

<style lang='scss'>
@import "@/styles/variables.scss";

.slide-from-bottom-enter-active,
.slide-from-bottom-leave-active {
  transition: $swift-slide;
  transition-property: opacity, transform;
  transform: translateY(0%);
}
.slide-from-bottom-enter,
.slide-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(110%);
}
</style>
