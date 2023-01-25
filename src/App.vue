<template>
  <div id="app">
    <!-- navbar -->
    <header
      class="rainbow top-0 left-0 w-full flex items-center z-10 scroll-smooth shadow-lg fixed"
    >
      <div class="container mx-auto lg:px-28">
        <div class="flex justify-between">
         <!-- logo -->
         <a href="/">
          <img src="./assets/logo2.png" alt="logo" class="w-32 items-center" />
         </a>
         <!-- akhir logo -->
          <div class="flex items-center">
            <!-- burger button -->
            <button
              type="button"
              id="burger"
              class="block py-4 px-9 md:hidden"
              name="burger"
            >
              <span
                class="burger-line transition duration-300 ease-in-out origin-top-left"
              ></span>
              <span
                class="burger-line transition duration-300 ease-in-out"
              ></span>
              <span
                class="burger-line transition duration-300 ease-in-out origin-bottom-left"
              ></span>
            </button>
            <!-- akhir burger button -->

            <!-- isi nav -->
            <nav>
              <ul class="hidden md:flex">
                <li
                  class="navEffect"
                >
                  <router-link to="" class="">Produk</router-link>
                </li>
                <li
                  class="navEffect"
                >
                  <router-link to="">Galeri</router-link>
                </li>
                <li
                  class="navEffect"
                >
                  <router-link to="">Blog</router-link>
                </li>
                <li
                  class="navEffect md:hidden lg:block"
                >
                  <router-link to="">Tentang Kami</router-link>
                </li>
                <li
                  class="navEffect md:hidden lg:block"
                >
                  <router-link to="">Hubungi Kami</router-link>
                </li>
                <li
                  class="navEffect"
                >
                  <router-link to="">Masuk</router-link>
                </li>
              </ul>
            </nav>
            <!-- akhir isi nav -->
          </div>
        </div>
      </div>
    </header>
    <!-- akhir navbar -->

    <!-- hero -->
    <section id="hero">
      <div class="container-fluid lg:container mx-auto lg:px-28 pt-[55px]">
        <div
          class="w-full mx-auto h-64 md:h-72 lg:h-96 bg-layar text-kedua bg-cover relative overflow-hidden bg-no-repeat bg-cover"
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
              class="w-full text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div class="w-full order-last md:order-last mx-4 m-auto">
                <h1 class="text-xl text-center text-utama md:text-lg lg:mt-4">
                  Banyak Pilihan Warna
                </h1>
                <p class="text-layar text-base md:text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Placeat, ullam.
                </p>
              </div>
              <div
                class="w-1/3 md:w-1/2 order-1 md:order-1 lg:w-full lg-order-1"
              >
                <img
                  class="rounded-lg shadow-lg overflow-hidden hover:scale-110 transition duration-300 ease-in-out"
                  src="./assets/img/12.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <!-- akhir konten1 -->

          <!-- konten2 -->
          <div class="w-full mt-9 md:mb-9 flex items-center md:w-1/2 lg:w-1/4">
            <div
              class="w-full text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div
                class="w-full order-1 md:order-last mx-4 m-auto lg:order-last"
              >
                <h1 class="text-xl text-center text-primary md:text-lg lg:mt-4">
                  Berbagai Ukuran
                </h1>
                <p class="text-layar text-justify text-base md:text-sm">
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
              class="w-full text-layar mx-auto text-layar px-2.5 flex lg:flex-wrap"
            >
              <div
                class="w-full order-last md:order-last mx-4 m-auto lg:order-last"
              >
                <h1 class="text-xl text-center text-utama md:text-lg lg:mt-4">
                  Kuat dan Tahan Lama
                </h1>
                <p class="text-layar text-justify text-base md:text-sm">
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
                <h1 class="text-xl text-center text-primary lg:mt-4 md:text-lg">
                  Garansi 1 Tahun
                </h1>
                <p class="text-layar text-base md:text-sm text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  velit.
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
      <div class="container mx-auto lg:px-28">
        <div class="bg-layar">
          <h1
            class="text-4xl font-bold text-kedua py-4 pt-9 w-full text-center items-center mx-auto"
          >
            Penghargaan
          </h1>
          <div
            class="flex flex-wrap w-full mx-auto justify-center items-center px-9 py-9 md:justify-between"
          >
            <div class="items-center mx-auto text-center w-full md:w-1/3">
              <div
                class="w-[150px] h-[150px] relative items-center mx-auto rounded-lg overflow-hidden bg-no-repeat bg-cover max-w-xs"
              >
                <img
                  src="./assets/img/bg3.jpg"
                  class="rounded-lg overflow-hidden w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                  alt="Louvre"
                />
              </div>
              <p class="text-lg text-layar2 mt-3 mb-6 h-9">Top Brand 2016 - 2020</p>
            </div>

            <div class="items-center mx-auto text-center w-full md:w-1/3">
              <div
                class="w-[150px] h-[150px] relative items-center mx-auto rounded-lg overflow-hidden bg-no-repeat bg-cover max-w-xs"
              >
                <img
                  src="./assets/img/13.jpg"
                  class="rounded-lg overflow-hidden w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                  alt="Louvre"
                />
              </div>
              <p class="text-lg text-layar2 mt-3 mb-6 h-9">
                Popular Brand Award 2016 - 2020
              </p>
            </div>

            <div class="items-center mx-auto text-center w-full md:w-1/3">
              <div
                class="w-[150px] h-[150px] relative items-center mx-auto rounded-lg overflow-hidden bg-no-repeat bg-cover max-w-xs"
              >
                <img
                  src="./assets/img/11.webp"
                  class="rounded-lg overflow-hidden w-full max-w-xs hover:scale-110 transition duration-300 ease-in-out"
                  alt="Louvre"
                />
              </div>
              <p class="text-lg text-layar2 mt-3 mb-6 h-9">
                Top Inovation 2016 - 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- akhir penghargaan -->

    <!-- tesedia -->
    <section id="tersedia">
      <div class="container mx-auto lg:px-28">
        <div class="bg-layar2 pb-16 pt-4 px-9 mx-auto">
          <h1
            class="text-4xl font-bold text-utama py-4 pt-9 w-full text-center mb-4 items-center mx-auto"
          >
            Tersedia Di
          </h1>
          <div class="w-full flex flex-wrap gap-6 px-24 justify-center">
            <button type="button" class="btn bg-utama w-32 hover:bg-primary transition ease-in-out duration-300">Tokopedia</button>
            <button type="button" class="btn bg-utama w-32 hover:bg-primary transition ease-in-out duration-300">Bukalapak</button>
            <button type="button" class="btn bg-utama w-32 hover:bg-primary transition ease-in-out duration-300">Shopee</button>
            <button type="button" class="btn bg-utama w-32 hover:bg-primary transition ease-in-out duration-300">Blibli</button>
            <button type="button" class="btn bg-utama w-32 hover:bg-primary transition ease-in-out duration-300">Lazada</button>
          </div>
        </div>
      </div>
    </section>
    <!-- akhir tersedia -->

    <!-- footer -->
    <footer>
      <div class="container mx-auto lg:px-28">
        <div class="bg-layar px-9 mx-auto">
          <div class="block md:flex w-full py-3">
            <!-- awal logo + alamat -->
            <div class="w-full md:w-1/3 lg:w-full">
              <img src="./assets/logo2.png" alt="logo" class="w-44 py-3 rainbow" />
              <ul class="py-3 text-left max-w-md">
                <li class="text-slate-400 text-base">Jl. Jati No.1</li>
                <li class="text-slate-400 text-base">
                  Pekanbaru, Riau, Indonesia
                </li>
                <li class="text-slate-400 text-base">Kode Pos : 28000</li>
                <li class="text-slate-400 text-base">
                  Telp. (+62) 887 4250 5356
                </li>
                <li class="text-slate-400 text-base">prananda.tio@gmail.com</li>
              </ul>
            </div>
            <!-- akhir logo + alamat -->

            <!-- produk -->
            <div class="w-full md:w-1/3">
              <ul class="py-3">
                <li class="text-lg text-utama py-1 font-bold">Produk</li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Promo</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Baru</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Kategori 1</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Kategori 2</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Kategori 3</router-link>
                </li>
              </ul>
            </div>
            <!-- akhir produk -->

            <!-- perusahaan -->
            <div class="w-full md:w-1/3">
              <ul class="py-3">
                <li class="text-lg text-utama py-1 font-bold">Perusahaan</li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">About</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Contact Us</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Lowongan Kerja</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Gallery</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Blog</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Kebijakan Privasi</router-link>
                </li>
                <li
                  class="text-base text-layar2 hover:text-kedua transition duration-300 ease-in-out mb-0.5"
                >
                  <router-link to="">Syarat dan Kententuan</router-link>
                </li>
              </ul>
            </div>
            <!-- akhir perusahaan -->
          </div>
        </div>

        <!-- nav footer -->
        <div
          class="w-full rainbow text-layar2 py-2 text-center text-xs px-3.5"
        >
          <h1>
            &copy; 2019 - 2023 Tio Prananda All Right Reserved. Please Send Bug
            Report and Feedback to : Tio Prananda
          </h1>
        </div>
        <!-- akhir nav footear -->
      </div>
    </footer>
    <!-- akhir footer -->

    <!-- button fixed -->
    <section id="buttonFixed">
      <div class="fixed bottom-16 right-5">
        <!-- aroow -->

        <router-link
          to="/"
          class="w-11 shadow lg block p-3 rainbow rounded-lg mb-3"
        >
        <svg fill="#ffffff" class="w-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="247.5,0 34.2,213.3 34.2,341.3 204.8,170.7 204.8,512 290.2,512 290.2,170.7 460.8,341.3 460.8,213.3 "></polygon> </g></svg>
        </router-link>
        <!-- akhir arrow -->
        <!-- chat -->
        <router-link
          to=""
          class="w-11 shadow lg block p-3 rainbow rounded-lg"
        >
        <svg fill="#ffffff" class="w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21,12a8.937,8.937,0,0,1-1.4,4.8L21,21l-4.2-1.4A8.994,8.994,0,1,1,21,12Z"></path></g></svg>
        </router-link>
      </div>
      <!-- akhir chat -->
    </section>
    <!-- akhir button fixed -->
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

.rainbow {
  background: linear-gradient(to right, #fd00da, #19f7d8);
}
</style>
