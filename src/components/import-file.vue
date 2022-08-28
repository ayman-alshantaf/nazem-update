<template>
  <label for="inputTag">
    <i :class="icon"></i>
    {{ name }}
    <input id="inputTag" type="file"/>
  </label>
</template>

<script>
export default {
  name: "import-file",
  props: ['name', 'icon']
}
</script>

<style scoped>
input {
  display: none;
}

label {
  cursor: pointer;
  padding: 8px 8px;
  color: #00B5AD;
  font-size: 14px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.15);
}
</style>
