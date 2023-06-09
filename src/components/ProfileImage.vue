inni:
<template>
  <img
    class="round-3xl h-8 w-8 object-contain"
    :src="imageLink"
    alt="User profile image"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      imageLink:
        "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png",
    };
  },
};
</script>

<style></style>
