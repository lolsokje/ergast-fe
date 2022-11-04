<template>
    <ul class="flex justify-center">
        <li v-for="(link, index) in links"
            :key="index"
            :class="{ 'text-light-muted dark:text-dark-muted hover:border-b-none' : link.disabled || !link.url || disabled, 'border-b-4 border-b-primary' : link.active  }"
            class="hover:border-b-4 hover:border-b-primary-hover"
        >
            <button :disabled="disabled || !link.url || link.disabled"
                    class="px-4 py-2"
                    v-html="link.label"
                    @click.stop="emit('fetch', link.url)"
            />
        </li>
    </ul>
</template>

<script lang="ts" setup>
import MetaLink from "@/interfaces/MetaLink";

interface Props {
    disabled: Boolean,
    links?: Array<MetaLink>,
}

defineProps<Props>();

const emit = defineEmits([ 'fetch' ]);
</script>

<script lang="ts">
export default { name: "Pagination" };
</script>
