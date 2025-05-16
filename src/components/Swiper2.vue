<template>
  <div class="flex flex-col items-center pt-5 bg-black">
    <div
      class="bg-center bg-no-repeat bg-cover flex items-center justify-center rounded-full"
      style="
        background-image: url('');
        transition: background-image 0.3s ease-in-out;
        width: 300px;
        height: 300px;
      "
    >
      <img
        width="150"
        height="150"
        src="../../public/images/logo-0.png"
        alt="Pepsi.com-Logo"
      />
    </div>
    <div class="mt-[-60px]">
      <p class="text-center text-white font-bold leading-none text-[50px]">STAY ON THE</p>
      <p
        class="text-center text-blue-600 font-bold leading-none text-primary text-[113px]"
      >
        PULSE
      </p>
    </div>
  </div>
  <div class="bg-black">
    <Swiper
      :direction="'horizontal'"
      :modules="[Mousewheel]"
      :slides-per-view="3"
      :loop="true"
      :space-between="30"
      :mousewheel="{
        releaseOnEdges: true,
        sensitivity: 0.5,
        thresholdDelta: 30,
        thresholdTime: 400,
      }"
      class="h-full w-full"
    >
      <SwiperSlide
        v-for="(slide, index) in slides"
        :key="index"
        class="relative flex items-center justify-center text-white"
      >
        <div class="absolute inset-0 z-0"></div>
        <div class="relative z-10 px-4 max-w-4xl">
          <router-link :to="slide.path">
            <h2
              class="text-center mx-auto left-0 text-3xl md:text-6xl font-bold my-4 relative"
            >
              <img
                :src="slide.link"
                class="mx-auto center w-[450px] h-[450px] rounded-3xl"
              />
            </h2>
          </router-link>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper/modules";
import "swiper/css";
const slides = [
  {
    link: "../../public/images/sw2.jpg",
  },
  {
    link: "../../public/images/sw2.jpg",
  },
  {
    link: "../../public/images/sw2.jpg",
  },
  {
    link: "../../public/images/sw2.jpg",
  },
];
</script>
