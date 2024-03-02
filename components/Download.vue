<template lang="">
  <div>
    <h1 class="md:text-3xl text-center font-semibold text-textPrimary">
      {{ header }}
    </h1>
    <div
      class="relative mt-2 rounded-md shadow-sm md:w-[50%] mx-auto mobile:w-full"
    >
      <input
        type="text"
        name="price"
        id="price"
        class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Vui lòng nhập đường dẫn video..."
      />
      <div class="absolute inset-y-0 right-0 flex items-center cursor-pointer">
        <span class="material-symbols-outlined"> close </span>
      </div>
    </div>
  </div>
  <div
    class="flex md:w-[60%] mx-auto mobile:w-full mt-10 md:flex-row mobile:flex-col"
  >
    <div class="bg-red-100 md:w-[60%] mobile:w-full">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPUa0tplntS6tohBBKYEGNEPTYbQJxXN0y4zZwHpZCOybLzTjfJWHIbQMyguWjbASk0bM&usqp=CAU"
        alt="thumbnail"
        class="h-full w-full"
      />
    </div>
    <div class="bg-primary2 w-full py-4 px-8">
      <h3 class="text-textPrimary text-xl">
        (REACTION) bbno$, Low G & Anh Phan - pho real -
      </h3>
      <span class="text-gray-400">14:55</span>
      <div class="flex border-2 border-primary mt-8">
        <button
          type="button"
          class="md:w-1/3 mobile:w-full bg-primary p-2 text-white font-semibold"
        >
          Tải xuống
        </button>

        <div class="w-full">
          <div class="relative">
            <button
              @click="toggleSelect"
              type="button"
              class="relative w-full p-2 bg-white text-left text-gray-900 shadow-sm sm:text-sm sm:leading-6 cursor-pointer"
            >
              <span class="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="h-5 w-5 flex-shrink-0 rounded-full"
                />
                <span class="ml-3 block truncate">Tom Cook</span>
              </span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </button>

            <ul
              v-if="isShowSelect"
              class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 sm:text-sm"
            >
              <li
                class="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                id="listbox-option-0"
                role="option"
              >
                <div class="flex items-center">
                  <img
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                    class="h-5 w-5 flex-shrink-0 rounded-full"
                  />
                  <span class="font-normal ml-3 block truncate"
                    >Wade Cooper</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DownloadComponent",
  props: {
    header: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isShowSelect: false,
    };
  },
  methods: {
    toggleSelect() {
      this.isShowSelect = !this.isShowSelect;
    },
  },
};
</script>
<style lang=""></style>
