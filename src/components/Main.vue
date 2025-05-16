<template>
  <div>
    <div class="pt-20 lg:pt-0 pb-28 bg-black">
      <div
        class="container mx-auto lg:min-h-[calc(100vh-83px)] grid gap-y-5 lg:gap-y-0 grid-flow-row lg:grid-flow-col lg:grid-cols-3 items-center relative"
      >
        <div
          class="lg:absolute lg:top-1/2 lg:left-1/2 will-change-transform 2xl:-mt-5"
          style="
            translate: none;
            rotate: none;
            scale: none;
            opacity: 1;
            transform: translate(0%, -50%);
            left: 0px;
          "
        >
          <div class="relative flex items-center justify-center px-10">
            <img
              src="../../public/images/can-2.webp"
              alt="Pepsi-ZeroSugar-Can-Pulsating-Logo"
              class="w-[200px] md:w-[280px]"
            />
            <img
              src="../../public/images/pepsi-pulse-logo.webp"
              alt="Pepsi-ZeroSugar-Can-Pulsating-Logo"
              class="absolute animate-scale-animation top-[120px] md:top-[155px] w-[200px] md:w-[280px]"
            />
          </div>
        </div>
        <div
          class="font-sans lg:opacity-0 lg:col-span-2 lg:col-start-2 text-white"
          style="opacity: 1"
        >
          <h1
            class="text-blue text-blue-600 text-center text-[50px] md:text-[80px] lg:text-[60px] xl:text-[90px] 2xl:text-[120px] mt-10 md:mt-10"
          >
            WELCOME
          </h1>
          <h2
            class="text-center text-[20px] md:text-[40px] lg:text-[30px] xl:text-[45px] 2xl:text-[60px] mb-5 xl:mb-10"
          >
            LET’S GET STARTED
          </h2>
          <div class="flex flex-col items-center">
            <p class="font-pepsi-owner font-bold text-center mb-2 text-xl">
              CHECK OUT THE LATEST DROP
            </p>
            <svg
              width="17"
              height="10"
              viewBox="0 0 17 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.90686 9.79028L0.953377 0.953074L8.90686 0.953076L16.8604 0.953075L8.90686 9.79028Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
