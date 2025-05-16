<template>
  <div>
    <div class="bg-black w-screen h-[5vh] fixed py-2 z-10">
      <nav class="text-white gap-10 flex justify-center items-center font-bold text-3xl">
        <div class="w-[5vh] h-[5vh] bg-red-500 left-5 absolute rounded-full">
          <img src="../../public/images/logo-0.png" alt="" />
        </div>
        <router-link v-for="mock in mocks" :key="mock.path" :to="mock.path">
          {{ mock.text }}
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const mocks = [
  {
    name: "home",
    path: "/",
    text: "Home",
  },
  {
    name: "login",
    path: "/login",
    text: "Login",
  },
  {
    name: "products",
    path: "/products",
    text: "View Products",
  },
  {
    name: "conatct",
    path: "/contact",
    text: "Contact Us",
  },
];
</script>
