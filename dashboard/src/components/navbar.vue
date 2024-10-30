<template>
    <nav class="flex items-center justify-between p-6 lg:px-8 bg-white text-secondary-foreground dark:bg-background"
        aria-label="Global">
        <div class="flex lg:flex-1">
            <router-link to="/" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
                <img class="h-10 w-auto dark:filter dark:drop-shadow-lg dark:drop-shadow-white"
                    src="@/assets/favicon_io/android-chrome-192x192.png" alt="">
            </router-link>
        </div>
        <div class="flex lg:hidden">
            <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span class="sr-only">Open main menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </div>

        <NavigationMenu class="hidden lg:flex lg:gap-x-12 leading-6">
            <NavigationMenuList>
                <!-- Home -->
                <NavigationMenuItem>
                    <NavigationMenuLink href="/" :class="navigationMenuTriggerStyle()">
                        Home
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <!-- Order flow  -->
                <NavigationMenuItem>
                    <NavigationMenuLink href="/orderProcess" :class="navigationMenuTriggerStyle()">
                        Order Process
                    </NavigationMenuLink>
                </NavigationMenuItem>
                <!-- Order form -->
                <NavigationMenuItem>
                    <NavigationMenuLink href="/register" :class="navigationMenuTriggerStyle()">
                        Order Form
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <!-- Design Catalog -->
                <NavigationMenuItem>
                    <NavigationMenuLink href="/products" :class="navigationMenuTriggerStyle()">
                        Design Catalog
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <!-- Customer Feedback -->
                <NavigationMenuItem>
                    <NavigationMenuLink href="/testimonials" :class="navigationMenuTriggerStyle()">
                        Customer Feedback
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <!-- Contact Us -->
                <NavigationMenuItem>
                    <NavigationMenuLink href="/contact" :class="navigationMenuTriggerStyle()">
                        Contact Us
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <!-- Theme Toggle -->
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline">
                            <Icon icon="radix-icons:moon"
                                class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Icon icon="radix-icons:sun"
                                class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span class="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem @click="mode = 'light'">
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="mode = 'dark'">
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="mode = 'auto'">
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </NavigationMenuList>
        </NavigationMenu>
    </nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { Button } from '@/components/ui/button';
import { useColorMode } from '@vueuse/core';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

const mode = useColorMode();
</script>
