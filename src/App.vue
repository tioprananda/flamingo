<template>
  <div id="app">
    <!-- hero -->
    <section id="hero">
      <div class="container-fluid lg:container mx-auto lg:px-28 pt-36">
        <div
          class="w-full mx-auto h-64 md:h-72 lg:h-96 bg-layar bg-cover relative overflow-hidden bg-no-repeat bg-cover"
        >
          <img
            class="shadow-lg hover:scale-110 transition duration-300 ease-in-out bg-cover w-full"
            src="./assets/img/hero.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
    <!-- akhir hero -->

    <!-- promo -->
    <section id="promo">
      <div class="container mx-auto lg:px-28">
        <div
          class="flex mx-auto flex-wrap justify-between w-full bg-layar2 px-9 py-3"
        >
          <!-- konten1 -->
          <div class="w-full mt-9 md:mb-9 flex items-center md:w-1/2 lg:w-1/4">
            <div
              class="w-full text-justify text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div class="w-full order-last md:order-last mx-4 m-auto">
                <h1 class="text-xl text-utama md:text-lg lg:mt-4">
                  Banyak Pilihan Warna
                </h1>
                <p class="text-layar text-base md:text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Placeat, ullam.
                </p>
              </div>
              <div
                class="w-1/3 md:w-1/2 order-1 md:order-1 lg:w-full lg-order-1"
              >
                <img
                  class="rounded-lg shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out"
                  src="./assets/img/bg3.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- akhir konten1 -->

          <!-- konten2 -->
          <div class="w-full mt-9 md:mb-9 flex items-center md:w-1/2 lg:w-1/4">
            <div
              class="w-full text-justify text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div
                class="w-full order-1 md:order-last mx-4 m-auto lg:order-last"
              >
                <h1 class="text-xl text-primary md:text-lg lg:mt-4">
                  Berbagai Ukuran
                </h1>
                <p class="text-layar text-base md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit doloru.
                </p>
              </div>
              <div class="w-1/3 md:w-1/2 order-last md:order-1 lg:w-full">
                <img
                  class="rounded-lg shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out"
                  src="./assets/img/bg6.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- akhir konten2 -->

          <!-- konten3 -->
          <div class="w-full mt-9 md:mb-9 flex items-center md:w-1/2 lg:w-1/4">
            <div
              class="w-full text-justify text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div
                class="w-full order-last md:order-last mx-4 m-auto lg:order-last"
              >
                <h1 class="text-xl text-utama md:text-lg lg:mt-4">
                  Kuat dan Tahan Lama
                </h1>
                <p class="text-layar text-base md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repudiandae ex.
                </p>
              </div>
              <div class="w-1/3 md:w-1/2 lg:w-full order-1 md:order-1">
                <img
                  class="rounded-lg shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out"
                  src="./assets/img/bg5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- akhir konten3 -->

          <!-- konten4 -->
          <div class="w-full mt-9 mb-9 flex items-center md:w-1/2 lg:w-1/4">
            <div
              class="w-full text-justify text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div
                class="w-full order-1 md:order-last mx-4 m-auto lg:order-last"
              >
                <h1 class="text-xl text-primary lg:mt-4 md:text-lg">
                  Garansi 1 Tahun
                </h1>
                <p class="text-layar text-base md:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  velit odit quidem vero quasi?
                </p>
              </div>
              <div
                class="w-1/3 md:w-1/2 lg:w-full order-last md:order-1 lg:order-1"
              >
                <img
                  class="rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
                  src="./assets/img/bg9.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- akhir konten4 -->
        </div>
      </div>
    </section>
    <!-- akhiri promo -->

    <!-- penghargaan -->
    <section id="penghargaan">
      <div class="container mx-auto bg-layar">
        <div
          class="flex flex-wrap w-full mx-auto justify-center items-center px-9 py-9"
        >
          <h1 class="text-4xl font-bold text-kedua mb-9">Penghargaan</h1>

          <div class="items-center mx-auto text-center">
            <div class="w-[150px] h-[150px] relative items-center mx-auto rounded-lg overflow-hidden bg-no-repeat bg-cover max-w-xs">
            <img
              src="./assets/img/bg9.jpeg"
              class="rounded-lg overflow-hidden w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out"
              alt="Louvre"
            />
          </div>
          <p class="text-2xl text-layar2 mt-3 mb-6">
            Top Brand 2016 - 2020
          </p>
          </div>
       
        </div>
      </div>
    </section>
    <!-- akhir penghargaan -->
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  font-family: "Josefin Sans", sans-serif;
  /* background: #42455a; */
  /* font-family: 'Lato', sans-serif; */
}
.bgHero {
  background-image: url(./assets/img/hero.jpg);
}
</style>
