import React from "react";

const Carousel = () => {
  return (
    <section class="bg-powderBlue relative flex">
      <img
        class="relative sm:w-3/5"
        src="https://res.cloudinary.com/dyc3koszi/image/upload/v1670339880/banner_images/wxuhztnso576jynojsft.webp"
        alt=""
      />
      <div class="flex items-end sm:hidden absolute top-0 bottom-0 right-0 left-0 from-transparent to-black bg-gradient-to-b md:from-transparent md:to-transparent md:bg-gradient-to-t">
        <div class="mb-10 ml-5 mr-10">
          <h1 class="text-white mb-5 animate-slide-down font-bold text-2xl uppercase">
            STICKERS FOR EVERYONE
          </h1>
          <a
            href="/shop"
            class="py-3 px-5 font-semibold bg-white hover:bg-black hover:text-white transition-all uppercase "
          >
            SHOP NOW
          </a>
        </div>
      </div>
      <div class="hidden sm:flex flex-col justify-center mx-10">
        <h1 class="text-black mb-5 animate-slide-down font-bold text-2xl uppercase lg:text-4xl">
          STICKERS FOR EVERYONE
        </h1>
        <a
          href="/shop"
          class="py-3 px-5 font-semibold bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all uppercase block w-fit"
        >
          SHOP NOW
        </a>
      </div>
    </section>
  );
};

export default Carousel;
