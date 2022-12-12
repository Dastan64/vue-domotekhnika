<script setup></script>

<template>
  <span class="main__loader"></span>
</template>

<style scoped>
.main__loader {
  display: block;
  margin: 100px auto 16px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid #fc6b3f;
  border-right-color: transparent;
  border-top-color: transparent;
  transition: transform 0.2s linear;
  animation-name: spin;
  animation-timing-function: linear;
  animation-duration: 1s;
  animation-delay: 0s;
  animation-iteration-count: infinite;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
