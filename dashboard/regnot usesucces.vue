<script setup lang="ts">
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/toast/use-toast';
//import { ToastAction } from '@/components/ui/toast'; // Import ToastAction if needed


const { toast } = useToast();

const registerData = {
    name: '',
    email: '',
    phoneNumber: '',
};

function registerUser() {
    fetch('http://localhost:3000/register', { // Use full URL for the backend
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(registerData),
    })
        .then(response => {
            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                return response.json().then(errData => {
                    throw new Error(errData.message || 'Registration failed');
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                showToast('success', data.message);
            } else {
                showToast('error', data.message);
            }
        })
        .catch(error => {
            showToast('error', error.message);
        });
}


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
            //action: < altText="Try again"> Try again</ ToastAction >,
        });
    }
}
</script>

<template>
    <div class="container">
        <div class="flex justify-center py-10 mb-20 ">
            <Card class="w-[370px]">
                <CardHeader>
                    <CardTitle>Register an account</CardTitle>
                    <CardDescription>Please fill up all the details</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div class="grid items-center w-full gap-4">
                            <div class="flex flex-col space-y-1.5">
                                <Label for="name">Name</Label>
                                <Input id="name" v-model="registerData.name" placeholder="Full name" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="email">Email</Label>
                                <Input id="email" v-model="registerData.email" placeholder="Email address" />
                            </div>
                            <div class="flex flex-col space-y-1.5">
                                <Label for="phoneNumber">Phone Number</Label>
                                <Input id="phoneNumber" v-model="registerData.phoneNumber" placeholder="+60" />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter class="flex justify-between px-6 pb-6">
                    <Button variant="secondary" @click.prevent>
                        Cancel
                    </Button>
                    <Button @click.prevent="registerUser">Register</Button>
                </CardFooter>
                <CardFooter class="flex justify-between px-6 pb-6">
                    <div>
                        Already have an account?
                    </div>
                    <div>
                        <router-link to="/signIn">
                            <p class="text-blue-500 hover:text-black">
                                Sign In
                            </p>
                        </router-link>
                    </div>
                </CardFooter>
            </Card>
        </div>

    </div>

</template>
