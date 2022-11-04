<template>
    <table class="table border-separate space-y-6 text-left w-full" v-if="show">
        <slot/>
    </table>
</template>

<script setup lang="ts">
interface Props {
    show?: boolean,
}

withDefaults(defineProps<Props>(), {
    show: true,
});
</script>
