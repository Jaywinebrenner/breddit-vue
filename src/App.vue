<template>
  <div id="app">
    <nav class="navbar is-black" role="navigation" aria-label="main navigation">
     <div class="navbar-brand">
    <a class="navbar-item" href="/">
      BREDDIT
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</nav>


    <router-view class="app container"/>
  </div>
</template>

<style lang="scss">
.app {
  margin-top: 2rem,
}

</style>
