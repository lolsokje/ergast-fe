<template>
    <li>
        <RouterLink :to="link"
                    aria-current="page"
                    class="block py-2 space-2 hover:text-primary-hover md:p-0"
        >{{ text }}
        </RouterLink>
    </li>
</template>

<script lang="ts" setup>

interface Props {
    link: string,
    text: string,
}

defineProps<Props>();
</script>
