<template>
    <div class="container">
        <div class="flex justify-center py-10 mb-20">
            <Card class="w-[370px]">
                <CardHeader>
                    <CardTitle>Order Form</CardTitle>
                    <CardDescription>Please fill up all the details</CardDescription>
                </CardHeader>
                <CardContent>
                    <form @submit.prevent="submitOrder">
                        <div class="grid items-center w-full gap-4">
                            <div class="flex flex-col space-y-1.5">
                                <Label for="name">Name</Label>
                                <Input id="name" v-model="orderData.name" placeholder="Full name" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="email">Email</Label>
                                <Input id="email" v-model="orderData.email" placeholder="Email address" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input id="phoneNumber" v-model="orderData.phoneNumber" placeholder="+60" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="productType">Product Type</Label>
                                <Input id="productType" v-model="orderData.productType"
                                    placeholder="e.g. T-shirt, mug" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="quantity">Quantity</Label>
                                <Input id="quantity" v-model="orderData.quantity" placeholder="Number of items" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="designFile">Upload Design</Label>
                                <Input id="designFile" type="file" @change="onFileChange" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter class="flex justify-between px-6 pb-6">
                    <Button variant="secondary">Cancel</Button>
                    <Button @click.prevent="submitOrder">Submit Order</Button>
                </CardFooter>
            </Card>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast/use-toast';
import axios from 'axios';

const { toast } = useToast();

// Use reactive to store order data and the file
const orderData = reactive({
    name: '',
    email: '',
    phoneNumber: '',
    productType: '',
    quantity: '',
});

const selectedFile = ref<File | null>(null); // Store the selected file

// Handle file input change
function onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
        selectedFile.value = target.files[0];
    }
}

async function submitOrder() {
    const formData = new FormData();
    formData.append('name', orderData.name);
    formData.append('email', orderData.email);
    formData.append('phoneNumber', orderData.phoneNumber);
    formData.append('productType', orderData.productType);
    formData.append('quantity', orderData.quantity);

    // Append file if selected
    if (selectedFile.value) {
        formData.append('image', selectedFile.value);
    }

    try {
        const response = await axios.post('http://localhost:3000/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        // Check if the response status is 200 (OK) or in the success range
        if (response.status === 200) {
            showToast('success', 'Order submitted successfully');
        } else {
            showToast('error', 'Something went wrong while submitting the order');
        }
    } catch (error) {
        showToast('error', error.response?.data?.message || 'Error submitting order');
    }
}


// Toast notification for success and error handling
function showToast(type: 'success' | 'error', message: string) {
    if (type === 'success') {
        toast({
            title: 'Success',
            description: message,
        });
    } else {
        toast({
            variant: 'destructive',
            title: 'Uh oh! Something went wrong.',
            description: message,
        });
    }
}
</script>
