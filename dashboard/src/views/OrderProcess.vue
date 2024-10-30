<template>
    <div class="container mx-auto">
        <h1 class="text-2xl mx-auto font-bold pb-10 text-s
        ">Order process</h1>
        <ol class="relative  text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 xl:ml-2 ">
            <li v-for="(step, index) in steps" :key="index"
                class="mx-auto mb-10 flex flex-col md:flex-row md:justify-between ">
                <!-- Step details on the left -->
                <div class="flex-shrink-0 md:mr">
                    <span class="flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 relative"
                        :class="[step.bgColor, step.ringColor]">
                        <!-- Dynamically binding the icon using v-bind :icon -->
                        <Icon :icon="step.icon" :class="step.iconColor" />
                    </span>
                    <h3 class="font-medium leading-tight px-5 text-black">{{ step.title }}</h3>
                    <p class="text-sm px-5">{{ step.description }}</p>
                </div>

                <!-- Card with dynamic content on the right -->
                <div class="xl:w-4/6 py-10  md:relative right-40 md:pr-20 md:mt-10 md:pl-2">
                    <Card>
                        <CardContent class="px-5">
                            <div class="p-4">
                                <!-- Dynamic image, title, and description -->
                                <img :src="step.image" alt="Card Image" class="w-full h-auto mb-2 rounded-lg">
                                <h3 class="text-lg font-bold mb-2">{{ step.cardContentTitle }}</h3>
                                <p class="text-gray-700">{{ step.cardContentDescription }}</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </li>

        </ol>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { Card,CardContent,CardHeader,CardTitle } from '@/components/ui/card';

export default {
    components: {
        Icon,
        Card,
        CardContent,
        CardHeader,
        CardTitle,
    },
    data() {
        return {
            steps: [
                {
                    title: "Submit Your Design Request",
                    description: "Provide details about your product and design idea.",
                    icon: "mdi:file-document-edit-outline",
                    bgColor: "bg-blue-200",
                    iconColor: "text-blue-500",
                    ringColor: "ring-white",
                    cardTitle: "Submit Order",
                    image: "https://via.placeholder.com/300x200",
                    cardContentTitle: "Upload Your Design or Describe Your Idea",
                    cardContentDescription: "Upload your artwork or describe your concept for our team to create a custom design for you."
                },
                {
                    title: "Review and Approve Mockup",
                    description: "Review the mockup created by our design team.",
                    icon: "mdi:image-search-outline",
                    bgColor: "bg-yellow-200",
                    iconColor: "text-yellow-500",
                    ringColor: "ring-white",
                    cardTitle: "Design Review",
                    image: "https://via.placeholder.com/300x200",
                    cardContentTitle: "Review the Digital Mockup",
                    cardContentDescription: "Our team will provide a digital proof. You can request changes or approve it for production."
                },
                {
                    title: "Confirm Your Order",
                    description: "Make a secure payment to confirm your order.",
                    icon: "mdi:credit-card-outline",
                    bgColor: "bg-green-200",
                    iconColor: "text-green-500",
                    ringColor: "ring-white",
                    cardTitle: "Order Confirmation",
                    image: "https://via.placeholder.com/300x200",
                    cardContentTitle: "Secure Payment",
                    cardContentDescription: "Once you approve the design, proceed to payment to confirm your order and begin production."
                },
                {
                    title: "Production Begins",
                    description: "We will start printing and processing your order.",
                    icon: "mdi:printer-3d-nozzle-outline",
                    bgColor: "bg-indigo-200",
                    iconColor: "text-indigo-500",
                    ringColor: "ring-white",
                    cardTitle: "Production",
                    image: "https://via.placeholder.com/300x200",
                    cardContentTitle: "Sublimation Printing Process",
                    cardContentDescription: "We will print your design and transfer it onto the product with high-quality sublimation printing."
                },
                {
                    title: "Quality Check and Shipping",
                    description: "We ensure top quality and ship your order to your address.",
                    icon: "mdi:truck-outline",
                    bgColor: "bg-purple-200",
                    iconColor: "text-purple-500",
                    ringColor: "ring-white",
                    cardTitle: "Shipping",
                    image: "https://via.placeholder.com/300x200",
                    cardContentTitle: "Quality Check and Shipping",
                    cardContentDescription: "Your items will undergo a quality check, and we'll ship them to your specified address with tracking."
                },
                {
                    title: "Receive Your Custom Product",
                    description: "Enjoy your custom-made product and leave feedback.",
                    icon: "mdi:gift-outline",
                    bgColor: "bg-pink-200",
                    iconColor: "text-pink-500",
                    ringColor: "ring-white",
                    cardTitle: "Order Complete",
                    image: "https://via.placeholder.com/300x200",
                    cardContentTitle: "Receive Your Order",
                    cardContentDescription: "Your custom product will arrive soon. Enjoy, and let us know your feedback for future orders!"
                }
            ]

        };
    }
};
</script>
