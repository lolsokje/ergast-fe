<template>
    <th class="p-3" :class="{ 'text-center': center }">
        <slot/>
    </th>
</template>

<script setup lang="ts">
interface Props {
    center?: boolean,
}

withDefaults(defineProps<Props>(), {
    center: false,
});
</script>
