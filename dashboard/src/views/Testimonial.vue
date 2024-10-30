<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
    {
        name: 'Alice Johnson',
        feedback: 'I love my custom jersey! Great quality and fit!',
        image: 'path/to/alice.jpg', // Add the image path here
    },
    {
        name: 'Michael Smith',
        feedback: 'Fast delivery and great service. Highly recommend!',
        image: 'path/to/michael.jpg', // Add the image path here
    },
    {
        name: 'Sarah Lee',
        feedback: 'Amazing design options! I made the perfect jersey.',
        image: 'path/to/sarah.jpg', // Add the image path here
    },
    {
        name: 'David Brown',
        feedback: 'Comfortable and stylish jersey. Fantastic!',
        image: 'path/to/david.jpg', // Add the image path here
    },
    {
        name: 'Emily Davis',
        feedback: 'Quick delivery, excellent quality. Will order again!',
        image: 'path/to/emily.jpg', // Add the image path here
    },
];
</script>

<template>
    <div class="py-16">
        <h1 class="text-4xl font-bold text-center mb-6">What Our Customers Say</h1>
        <Carousel class="relative w-full max-w-7xl mx-auto">
            <CarouselContent>
                <!-- Carousel Items -->
                <CarouselItem v-for="(testimonial, index) in testimonials" :key="index"
                    class="md:basis-1/3 lg:basis-1/3 px-4">
                    <Card class="h-full">
                        <CardContent class="p-6 text-center ">
                            <img :src="testimonial.image" alt="Customer Image"
                                class="rounded-full w-24 h-24 mx-auto mb-4" />
                            <p class="text-xl font-semibold mb-4">{{ testimonial.name }}</p>
                            <p class="text-muted-foreground mb-7">{{ testimonial.feedback }}</p>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>

            <!-- Previous and Next buttons -->
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
</template>

<style scoped>
/* Optional: Set a minimum height for the cards */
.card-content {
    min-height: 200px;
    /* Adjust as needed */
}

/* Additional styles for the circular images */
img {
    border-radius: 50%;
    /* Ensures the image is circular */
    object-fit: cover;
    /* Ensures the image fits well within the circle */
}
</style>
