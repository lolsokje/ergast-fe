<template>
    <td class="py-4 px-3" :class="{ 'text-center': center, 'text-left': left, 'text-right': right }">
        <slot/>
    </td>
</template>

<script setup lang="ts">
interface Props {
    center?: boolean,
    left?: boolean,
    right?: boolean,
}

withDefaults(defineProps<Props>(), {
    center: false,
    left: false,
    right: false,
});
</script>
