<template>

    <div class="pt-20 px-20">
        <!--// 50% on small screens and 33% on larger screens.-->
        <Carousel class="pt-20">
            <CarouselContent>
                <CarouselItem class="md:basis-1/2 lg:basis-1/3 px-7
                ">
                    <div class="p-4 bg-gray-100 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="Boost Your Sales"
                            class="w-full h-auto mb-2 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">Boost Your Sales</h3>
                        <p class="text-gray-700">Increase your online sales with our proven strategies. Learn how to
                            optimize your website and convert more visitors into customers.</p>
                    </div>
                </CarouselItem>
                <CarouselItem class="md:basis-1/2 lg:basis-1/3 px-7">
                    <div class="p-4 bg-gray-100 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="E-Commerce Solutions"
                            class="w-full h-auto mb-2 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">E-Commerce Solutions</h3>
                        <p class="text-gray-700">Our tailored e-commerce solutions are designed to meet your business
                            needs, helping you streamline operations and increase revenue.</p>
                    </div>
                </CarouselItem>
                <CarouselItem class="md:basis-1/2 lg:basis-1/3 px-7">
                    <div class="p-4 bg-gray-100 rounded-lg shadow-md">
                        <img src="https://via.placeholder.com/300x200" alt="Advanced Analytics"
                            class="w-full h-auto mb-2 rounded-lg">
                        <h3 class="text-lg font-bold mb-2">Advanced Analytics</h3>
                        <p class="text-gray-700">Utilize advanced analytics to gain insights into your customers'
                            behavior, optimize marketing strategies, and drive more sales.</p>
                    </div>
                </CarouselItem>
            </CarouselContent>
        </Carousel>


    </div>
</template>


<script setup lang="ts">
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
</script>
