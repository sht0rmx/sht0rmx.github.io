<script setup lang="js">
import BottomDock from '@/components/BottomDock.vue'
</script>

<template>
  <div
      :class="['flex flex-col min-h-screen bg-base-200', { 'pb-14': $route.name !== 'NotFound' && $route.name !== 'NotFound' }]">

    <main :class="['flex-1 text-sm text-base-content flex justify-center', { 'p-4': $route.name !== 'NotFound' }]">
      <div :class="[
        'w-full',
        $route.path === '/need_auth' ? 'max-w-sm' : 'max-w-2xl'
      ]">
          <router-view/>
      </div>
    </main>
    <keep-alive>
    <BottomDock v-if="$route.name !== 'NotFound'"/>
    </keep-alive>
  </div>
</template>
