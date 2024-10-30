<template>
    <div class="container mx-auto py-10">
        <div class="container mx-auto py-10">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 ">
                <Card v-for="product in products" :key="product.id" class="shadow-lg p-5">
                    <CardContent>
                        <!-- Main Product Image -->
                        <img :src="product.activeImage" alt="Main Product Image"
                            class="w-full h-64 object-cover mb-5 rounded-lg">

                        <!-- Small Images -->
                        <div class="flex justify-between mb-4">
                            <img v-for="smallImage in product.smallImages" :key="smallImage" :src="smallImage"
                                alt="Small Product Image"
                                class="w-16 h-16 object-cover rounded-lg border cursor-pointer"
                                @mouseover="changeMainImage(product, smallImage)" @mouseleave="resetMainImage(product)">
                        </div>

                        <!-- Product Description -->
                        <h2 class="font-bold text-xl mb-2">{{ product.title }}</h2>
                        <p class="text-gray-600">{{ product.description }}</p>
                    </CardContent>
                </Card>
            </div>
        </div>

    </div>

</template>

<script>
import { Card,CardContent } from '@/components/ui/card';

export default {
    components: {
        Card,
        CardContent,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    mainImage: '/images/main.webp',
                    activeImage: '/images/main.webp',
                    smallImages: [
                        '/images/ds_1_1.svg',
                        '/images/ds_1_2.svg',
                        '/images/ds_1_3.webp',
                    ],
                    title: 'Product 1',
                    description: 'This is the description of product 1.',
                },
                {
                    id: 2,
                    mainImage: 'https://via.placeholder.com/400x300',
                    activeImage: 'https://via.placeholder.com/400x300',
                    smallImages: [
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                    ],
                    title: 'Product 2',
                    description: 'This is the description of product 2.',
                },
                {
                    id: 3,
                    mainImage: 'https://via.placeholder.com/400x300',
                    activeImage: 'https://via.placeholder.com/400x300',
                    smallImages: [
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                        'https://via.placeholder.com/100x100',
                    ],
                    title: 'Product 3',
                    description: 'This is the description of product 3.',
                },
            ],
        };
    },
    methods: {
        changeMainImage(product,smallImage) {
            product.activeImage = smallImage;
        },
        resetMainImage(product) {
            product.activeImage = product.mainImage;
        },
    },
};
</script>

<style scoped>
/* Additional custom styling can be added here */
</style>
