<template>
  <nav class="sticky top-0 z-50 left-0 bg-white">
    <div
      class="max-w-7xl mx-auto py-6 px-4 lg:px-4 flex justify-between items-center"
    >
      <NuxtLink to="/" class="">
        <img src="/assets/images/Logo.png" alt="" class="lg:w-80 w-40 h-auto" />
      </NuxtLink>
      <div class="lg:flex hidden gap-6 items-center w-full justify-center">
        <NuxtLink
          to="/"
          class="font-lato text-[#030D1D] text-[16px] leading-[19px] font-semibold"
          >De oplossing</NuxtLink
        >
        <NuxtLink
          to="/"
          class="font-lato text-[#030D1D] text-[16px] leading-[19px] font-semibold"
          >Aan de slag</NuxtLink
        >
        <NuxtLink
          to="/"
          class="font-lato text-[#030D1D] text-[16px] leading-[19px] font-semibold"
          >Over ons</NuxtLink
        >
      </div>
      <div class="flex md:gap-6 gap-3 items-center">
        <div class="sm:flex hidden md:gap-6 gap-3 items-center">
          <NuxtLink
            to="/contact"
            class="text-[#D95A00] md:px-[20px] px-[10] whitespace-nowrap py-[14px] md:py-[16px] font-semibold w-full text-[16px] leading-[16px] font-lato"
          >
            Neem contact op
          </NuxtLink>
          <NuxtLink to="/" class="">
            <button
              class="text-[16px] md:px-[20px] px-[10px] hover:bg-[#D96A00] whitespace-nowrap rounded-[2px] py-[14px] md:py-[16px] font-semibold leading-[16px] font-lato bg-[#D95A00] text-white"
            >
              Vraag je demo aan
            </button>
          </NuxtLink>
        </div>
        <div class="flex lg:hidden text-[#D95A00]">
          <svg
            @click="toggleMenu"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 17h18M3 12h18M3 7h18"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="isMenuActive"
      class="w-full px-3 py-4 h-screen fixed top-0 left-0 bg-white"
    >
      <div class="flex items-center justify-between">
        <a href="#" class="">
          <img src="/assets/images/Logo.png" alt="" class="w-32 h-auto" />
        </a>
        <div class="flex text-[#D95A00]">
          <svg
            @click="toggleMenu"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>

      <!-- Links -->
      <div class="">
        <div class="flex flex-col gap-6 py-12 w-full justify-center">
          <NuxtLink
            to="#"
            class="font-lato text-[#030D1D] text-[16px] leading-[19px] font-semibold"
            >De oplossing</NuxtLink
          >
          <NuxtLink
            to="#"
            class="font-lato text-[#030D1D] text-[16px] leading-[19px] font-semibold"
            >Aan de slag</NuxtLink
          >
          <NuxtLink
            to="#"
            class="font-lato text-[#030D1D] text-[16px] leading-[19px] font-semibold"
            >Over ons</NuxtLink
          >
        </div>

        <div class="flex w-full flex-col md:gap-6 gap-3">
          <NuxtLink
            to="/contact"
            class="text-[#D95A00] md:px-[20px] px-[10] whitespace-nowrap py-[14px] md:py-[16px] font-semibold w-full text-[16px] leading-[16px] font-lato"
          >
            Neem contact op
          </NuxtLink>
          <NuxtLink to="#" class="block">
            <button
              class="text-[16px] md:px-[20px] px-[10px] hover:bg-[#D96A00] whitespace-nowrap rounded-[2px] py-[14px] md:py-[16px] font-semibold leading-[16px] font-lato bg-[#D95A00] text-white"
            >
              Vraag je demo aan
            </button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

const closeMenu = () => {
  isMenuActive.value = false;
};

const navigateAndCloseMenu = (route) => {
  router.push(route);
  closeMenu();
};
</script>

<style>
.navbar {
  background-color: #ffff;
  width: 90vw;
  margin: 0 auto;
}
a .navbar-item {
  color: #0000;
}
.Log_brand {
  width: 116px;
  height: 50px;
  margin-left: 1em;
  transform: scale(1.5);
}

@media (min-width: 60em) {
  .Mobile_header {
    width: 90vw;
    margin: 0 auto;
    background-color: red;
  }

  .navbar-item {
    color: var(--text-color);
  }
}
</style>
