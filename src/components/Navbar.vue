<template>
  <div class="navbar">
     <!-- navbar -->
     <header class="bg-transparent top-0 left-0 absolute w-full flex items-center z-10 scroll-smooth" :class="{navbarFixed : showNavbar}">
      <div class="container">
        <div class="flex justify-between items-center relative">
          <div class="px-4">
            <a href="#home" class="py-6 font-bold block text-primary text-lg">TioPrananda</a>
          </div>
          <div class="px-4 flex items-center">
            <button type="button" id="burger" class="block absolute right-4 lg:hidden lg:absolute lg:right-4" :class="{active : isActive}" @click="buttonToggle" name="burger">
              <span class="burger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span class="burger-line transition duration-300 ease-in-out"></span>
              <span class="burger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>

            <nav id="nav-menu" 
            class="absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:flex lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none" :class="{hidden : isNonActive}" @click="buttonToggle">
              <ul class="block lg:flex">
                <li class="group"><a href="#home" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >Home</a></li>
              </ul>
              <ul class="block">
                <li class="group"><a href="#about" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >About</a></li>
              </ul>
              <ul class="block">
                <li class="group"><a href="#projects" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >Projects</a></li>
              </ul>
              <ul class="block">
                <li class="group"><a href="#contact" class="text-base text-dark mx-8 py-2 hover:text-primary flex" >Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
