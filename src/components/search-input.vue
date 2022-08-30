<template>
  <div class="search-input" :style="styleParent">
    <div class="form">
      <i class="fa fa-search"></i>
      <input type="search" :placeholder="placeholder" :style="styleInput">
    </div>
  </div>
</template>

<script>
export default {
  name: "search-input",
  props: {
    placeholder: {
      type: String,
      default: "بحث"
    },
    styleInput: {
      type: String
    },
    styleParent: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.search-input {
  background-color: #F6F7FB;
  padding: 0 20px;
  width: 100%;

  .form {
    display: flex;
    align-items: center;

    input {
      width: 100%;
      height: 100%;
      padding: 8px 0 9px 0;
      outline: none;
      font-size: 15px;
    }

    input:focus {
      outline: none;
    }

    input::placeholder {
      color: #737373;
      font-size: 14px;

    }

    i {
      color: #737373;
      font-size: 17px;
      margin-left: 10px;
      transform: rotate(90deg);
      margin-top: 5px;
    }
  }
}

</style>
