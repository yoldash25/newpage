<template>
  <div class="flex">
    <div
      class="flex flex-col justify-center bg-black p-5 px-[50px] xl:col-span-2 text-white"
    >
      <div class="mx-auto max-w-[400px] select-none lg:mx-0">
        <div class="hide mb-10 lg:block">
          <img src="../../public/images/swiper1.png" alt="drop title" />
        </div>
        <p class="mb-5 text-center text-lg lg:text-left">
          <span
            ><strong
              >Enter now for a chance to win a collection of limited-edition retro
              merchandise!*</strong
            ></span
          >
        </p>
        <div class="flex justify-center lg:justify-start">
          <button
            type="button"
            class="group relative flex items-stretch justify-center p-0.5 text-center font-medium focus:outline-none border border-transparent bg-blue text-white focus:ring-4 hover:text-blue-600 enabled:hover:bg-white enabled:hover:text-blue dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-[#777777] rounded-full"
          >
            <span
              class="flex items-stretch transition-all duration-200 rounded-md px-8 py-3.5 text-xl font-bold"
              >SIGN IN TO ENTER</span
            >
          </button>
        </div>
        <a
          class="mb-5 mt-5 block text-center text-xs italic lg:text-left"
          >U.S. res, 18+ (19+ in AL/NE). Ends 6/10/25. Limit one entry per person/email
          address per day. Subject to Official Rules. *Actual prize may vary from what’s
          shown.</a
        >
      </div>
    </div>
    <div style="background-image: url(../../public/images/screen.png)">
      <Swiper
        :slides-per-view="3"
        :direction="'horizontal'"
        :modules="[Mousewheel]"
        :loop="true"
        :space-between="30"
        :mousewheel="{
          releaseOnEdges: true,
          sensitivity: 0.5,
          thresholdDelta: 30,
          thresholdTime: 400,
        }"
        class="h-[100vh] w-[160vh]"
      >
        <SwiperSlide
          v-for="(slide, index) in slides"
          :key="index"
          class="relative flex items-center justify-center text-white my-36"
        >
          <div class="absolute inset-0 z-0"></div>
          <div class="relative z-10 px-4 max-w-4x">
            <h2
              class="text-center mx-auto left-0 text-3xl md:text-6xl font-bold my-10 relative"
            >
              <img
                :src="slide.link"
                class="mx-auto center w-[350px] h-[550px] rounded-3xl"
              />
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
const slides = [
  {
    link: "../../public/images/pep1.png",
  },
  {
    link: "../../public/images/pep2.png",
  },
  {
    link: "../../public/images/pep3.png",
  },
  {
    link: "../../public/images/pep1.png",
  },
  {
    link: "../../public/images/pep2.png",
  },
  {
    link: "../../public/images/pep3.png",
  },
];
</script>
