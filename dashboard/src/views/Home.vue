<template>
    <div class="flex justify-center items-center bg-white dark:bg-black">
        <div class="flex flex-col lg:flex-row items-center max-w-screen-lg mx-auto">
            <div class="relative isolate px-3  lg:px-8 w-full lg:w-1/2">
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-40">
                    <div class="text-center">
                        <h1 class="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">Customize
                            yours now
                        </h1>
                        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                            Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                        </p>
                        <div class="mt-10 flex items-center justify-center gap-x-6">
                            <Button>
                                Order Now
                            </Button>
                            <Button variant="secondary">
                                Learn more
                            </Button>

                            <!--<a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span
                                    aria-hidden="true">→</span></a>-->
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2 hidden lg:block">
                <img src="..\assets\shirt-main.png" alt="Illustration" class="w-full h-auto" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

//import baju from '..\assets\undraw_undraw_like_post_dn6g_(1)_ltvj.png';
</script>
