<script>
  export let height = "auto";
  export let width = "auto";
  export let padding = "0 50px";
  export let bgcolor = "auto";
</script>
<style lang="scss">
  @import "./Layout.scss";
</style>
<div class="smx-layout-header" style="height: {height};width: {width};background: {bgcolor};padding: {padding}">
  <slot />
</div>
