<template>
  <main class="flex h-screen flex-col bg-yellow-200 pb-20 pt-10">
    <div class="grid grid-cols-12">
      <div class="col-span-1 col-start-1 border border-blue-700">col-1</div>
      <div class="col-span-5 col-start-2 border border-blue-700">col-2</div>
      <div class="col-span-5 col-start-7 border border-blue-700">col-3</div>
      <div class="col-span-1 col-start-12 border border-blue-700">col-4</div>
    </div>
  </main>
</template>

<script>
export default {
  name: "TheHero",
};
</script>

<style></style>
