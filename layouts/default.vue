<template lang="">
  <div class="bg-gray-100 min-h-screen py-4 mt-[3.5rem]">
    <nav
      class="bg-primary fixed w-full z-20 top-0 start-0 border-b border-gray-200 flex align-middle"
    >
      <div class="items-center justify-between w-full p-4" id="navbar-sticky">
        <ul class="flex flex-row md:gap-8 sm:gap-4 justify-center w-full">
          <NuxtLink
            v-for="item in dataRouter"
            :to="item.link"
            class="cursor-pointer block py-2 px-3 text-white rounded md:bg-transparent md:p-0"
            >{{ item.label }}</NuxtLink
          >
        </ul>
      </div>
    </nav>

    <div
      class="container mx-auto p-4 bg-white min-h-screen mobile:min-w-[100vw] md:min-w-[0px]"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataRouter: [
        {
          label: "Youtube",
          link: "/youtube",
        },
        {
          label: "Tiktok",
          link: "/tiktok",
        },
        {
          label: "Facebook",
          link: "/facebook",
        },
        {
          label: "Twitter",
          link: "/twitter",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
