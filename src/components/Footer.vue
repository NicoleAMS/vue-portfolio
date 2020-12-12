<template>
<div class="footer">
  <p>Designed & built by <a href="https://www.linkedin.com/in/nicolesentis/">Nicole Sentis</a></p>
</div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
$dark: #081626;
$white: #f1f7f3;
$aqua: #3c95a8;

.footer {
  height: 50px;
  width: 100%;
  background-color: $white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    color: $dark;
    text-align: right;
    margin-right: 15px;
    font-size: 14px;

    a {
      color: $aqua;
      text-decoration: none;
    }
  }
}

</style>