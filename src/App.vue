<template>
    <nav class="px-2 px-4 py-2.5">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <button aria-controls="navbar-default"
                    aria-expanded="false"
                    class="inline-flex items-center p-2 text-sm md:hidden text-light-muted dark:text-dark-muted rounded-lg hover:bg-light-darker hover:dark:bg-dark-accent focus:outline-none focus:ring-1 focus:ring-dark-accent dark:focus:ring-light-accent"
                    data-collapse-toggle="navbar-default"
                    type="button"
            >
                <span class="sr-only">Open main menu</span>
                <svg aria-hidden="true"
                     class="w-6 h-6"
                     fill="currentColor"
                     viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"
                >
                    <path clip-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          fill-rule="evenodd"
                    ></path>
                </svg>
            </button>
            <div id="navbar-default" class="hidden w-full md:block md:w-auto">
                <ul class="flex flex-col p-4 mt-4 bg-light md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-light dark:bg-dark">
                    <NavLink link="/" text="Home"/>
                    <NavLink link="/drivers" text="Drivers"/>
                </ul>
            </div>
            <ThemeToggle/>
        </div>
    </nav>
    <main class="container mx-auto mt-8 px-4">
        <RouterView/>
    </main>
</template>

<script lang="ts" setup>
import ThemeToggle from '@/components/ThemeToggle.vue';
import NavLink from '@/components/NavLink.vue';</script>
