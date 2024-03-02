<template lang="">
  <div class="mt-16">
    <h1 class="text-2xl text-textPrimary text-center font-semibold">
      Làm thế nào để tải video từ youtube về máy tính ?
    </h1>
    <p class="text-xl text-textPrimary2 text-center">
      Để tải video từ Youtube về máy tính, bạn chỉ cần thực hiện theo hướng dẫn
      dưới đây:
    </p>
    <div class="grid md:grid-cols-3 mobile:grid-rows-1 gap-16 mt-8">
      <div class="w-full" v-for="(item, index) in dataGuide" :key="index">
        <img
          src="~/assets/images/Untitled.png"
          alt="step guide"
          class="w-full"
        />
        <div class="mt-4">
          <span class="text-textPrimary2 font-semibold"
            >Bước {{ index + 1 }}:
          </span>
          <span class="text-textPrimary2 text-md text-justify">{{
            item.text
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Guide",
  data() {
    return {
      dataGuide: [
        {
          text: "At this point, the template is getting a bit cluttered. We have to look at it for a second before realizing that it performs a calculation depending on author.books. More importantly, we probably don't want to repeat ourselves if we need to include this calculation in the template more than once",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4tBZVG4cohJzzB_AJgQm2yL2hvkCaxpF1IA&usqp=CAU",
        },
        {
          text: "At this point, the template is getting a bit cluttered. We have to look at it for a second before realizing that it performs a calculation depending on author.books. More importantly, we probably don't want to repeat ourselves if we need to include this calculation in the template more than once",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsXRbLgF72Ez-Lnwdw0UlHEr8axsfArfaTJw&usqp=CAU",
        },
        {
          text: "At this point, the template is getting a bit cluttered. We have to look at it for a second before realizing that it performs a calculation depending on author.books. More importantly, we probably don't want to repeat ourselves if we need to include this calculation in the template more than once",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUa0tplntS6tohBBKYEGNEPTYbQJxXN0y4zZwHpZCOybLzTjfJWHIbQMyguWjbASk0bM&usqp=CAU",
        },
      ],
    };
  },
};
</script>
<style lang=""></style>
