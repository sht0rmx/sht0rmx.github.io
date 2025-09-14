<script setup lang="js">
</script>

<template>
  <div class="dock fixed bottom-0 left-0 w-full flex justify-around bg-base-200 py-1 border-t border-base-content/20 shadow-inner">
    <button class="flex flex-col items-center text-sm transition-colors"
            :class="{ 'text-primary dock-active': $route.path === '/posts', 'text-base-content hover:text-accent': $route.path !== '/posts' }"
            @click="$router.push('/posts')">
      <i class="ri-news-line text-xl"></i>
      <span class="dock-label">{{ $t("components.dock.posts") }}</span>
    </button>

    <button class="flex flex-col items-center text-sm transition-colors"
            :class="{ 'text-primary dock-active': $route.path === '/', 'text-base-content hover:text-accent': $route.path !== '/' }"
            @click="$router.push('/')">
      <i class="ri-home-line text-xl"></i>
      <span class="dock-label">{{ $t("components.dock.home") }}</span>
    </button>

    <button class="flex flex-col items-center text-sm transition-colors"
            :class="{ 'text-primary dock-active': $route.path === '/projects', 'text-base-content hover:text-accent': $route.path !== '/projects' }"
            @click="$router.push('/projects')">
      <i class="ri-archive-stack-line text-xl"></i>
      <span class="dock-label">{{ $t("components.dock.projects") }}</span>
    </button>
  </div>
</template>

<style scoped>
.dock {
  padding-bottom: env(safe-area-inset-bottom, 0);
}
</style>