<script setup>
  import { ref } from "vue";

  const bool = ref(false);

  const addPlus = (e) => {
    if (e.target.value) {
      bool.value = true;
    } else {
      bool.value = false;
    }
  };
</script>

<template>
  <div class="container">
    <div class="row p-3">
      <!-- code -->
      <header class="col-12 mb-3">
        <div class="row align-self-center">
          <!-- code -->
          <div class="col-auto">
            <div class="row align-self-center gap-2">
              <!-- code -->
              <div class="col-auto">
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-list-todo-icon lucide-list-todo size-4 text-primary"
                >
                  <path d="M13 5h8"></path>
                  <path d="M13 12h8"></path>
                  <path d="M13 19h8"></path>
                  <path d="m3 17 2 2 4-4"></path>
                  <rect x="3" y="4" width="6" height="6" rx="1"></rect>
                </svg>
              </div>

              <div class="col-auto">
                <h1 class="fs-5 fw-semibold">برنامه غذایی</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <form class="col-12 mb-3">
        <div class="row justify-content-between bg-light rounded-3">
          <!-- code -->
          <div class="col">
            <input
              placeholder="یه غذا جدید بنویس…"
              class="border-0 ps-3 pe-3"
              autofocus
              @keyup="addPlus"
            />
          </div>

          <div class="col-auto">
            <button
              :style="{
                width: bool ? '44px' : '0px',
                opacity: bool ? 1 : 0,
              }"
              type="submit"
              class="rounded-3 border-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss"></style>
