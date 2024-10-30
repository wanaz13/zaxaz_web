import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    registrations: [] as Array<{ name: string; email: string; phoneNumber: string }>,
  }),
  actions: {
    async addRegistration(name: string, email: string, phoneNumber: string) {
      const newRegistration = { name, email, phoneNumber };

      try {
        // Send POST request to save registration to register.json
        await axios.post('http://localhost:3000/db/register', newRegistration);

        // Add to the local state as well
        this.registrations.push(newRegistration);
      } catch (error) {
        console.error('Failed to save registration:', error);
      }
    },
  },
});
