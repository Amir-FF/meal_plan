<script setup>
  import { computed, ref, watch } from "vue";

  const daysOfWeek = [
    "شنبه",
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنجشنبه",
    "جمعه",
  ];

  const inputValue = ref("");
  const items = ref(JSON.parse(localStorage.getItem("items") || "[]"));
  const randomItems = ref(
    JSON.parse(localStorage.getItem("randomItems") || "[]"),
  );

  const isAddPlus = computed(() => inputValue.value.trim().length > 0);

  const addItem = () => {
    const newItem = inputValue.value.trim();

    if (!newItem) return;

    items.value.push(newItem);
    inputValue.value = "";
  };

  const removeItem = (index) => {
    items.value.splice(index, 1);
  };

  const shuffleItems = () => {
    const shuffled = [...items.value];

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    randomItems.value = shuffled;
  };

  watch(
    items,
    (newItems) => {
      localStorage.setItem("items", JSON.stringify(newItems));
    },
    { deep: true },
  );

  watch(
    randomItems,
    (newItems) => {
      localStorage.setItem("randomItems", JSON.stringify(newItems));
    },
    { deep: true },
  );
</script>

<template>
  <!-- code -->
  <div class="container">
    <div class="row p-3">
      <!-- code -->
      <header class="col-12 mb-3">
        <div class="row align-items-center">
          <div class="col-auto">
            <div class="row align-items-center gap-2">
              <!-- code -->
              <div class="col-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-list-todo-icon lucide-list-todo size-4 text-primary"
                >
                  <path d="M13 5h8" />
                  <path d="M13 12h8" />
                  <path d="M13 19h8" />
                  <path d="m3 17 2 2 4-4" />
                  <rect x="3" y="4" width="6" height="6" rx="1" />
                </svg>
              </div>

              <div class="col-auto">
                <h1 class="fs-5 fw-semibold">برنامه غذایی</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <form class="col-12 mb-3" @submit.prevent="addItem">
        <div
          class="row justify-content-between rounded-3 bg-light"
          :class="{ boxShadow: isAddPlus }"
        >
          <!-- code -->
          <div class="col">
            <input
              v-model="inputValue"
              class="w-100 border-0 ps-3 pe-3"
              placeholder="یه غذای جدید بنویس…"
              autofocus
            />
          </div>

          <div class="col-auto">
            <button
              class="rounded-3 border-0 btn-add-plus"
              :class="{ addPlus: isAddPlus }"
              :disabled="!isAddPlus"
              type="submit"
              aria-label="افزودن غذا"
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
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </button>
          </div>
        </div>
      </form>

      <ul class="list-group mb-3">
        <li
          v-for="(item, index) in items"
          :key="`${item}-${index}`"
          class="list-group-item mb-3 rounded-3 border-0 bg-light p-2 ps-3"
        >
          <div class="row justify-content-between">
            <!-- code -->
            <div class="col overflow-x-auto overflow-y-hidden">
              {{ item }}
            </div>

            <div class="col-auto ms-3">
              <button
                class="delete"
                type="button"
                aria-label="حذف غذا"
                @click="removeItem(index)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
                  />
                  <path
                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </li>
      </ul>

      <div class="col-12 mb-3">
        <div class="row">
          <div class="col text-center">
            <button
              class="btn btn-primary w-h"
              type="button"
              @click="shuffleItems"
            >
              رندم
            </button>
          </div>
        </div>
      </div>

      <div class="table-responsive col-12">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th class="p-2" scope="col">#</th>
              <th class="p-2" scope="col">روزهای هفته</th>
              <th class="p-2" scope="col">ناهار</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(day, index) in daysOfWeek" :key="day">
              <th class="p-2" scope="row">{{ index + 1 }}</th>
              <td class="p-2">{{ day }}</td>
              <td class="p-2">{{ randomItems[index] ?? "" }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
