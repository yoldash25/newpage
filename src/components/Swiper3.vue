<template>
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
          <h2
            class="text-center mx-auto left-0 text-3xl md:text-6xl font-bold my-4 relative"
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
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Mousewheel } from "swiper/modules";
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
];
</script>
