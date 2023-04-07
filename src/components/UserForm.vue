<script setup lang="ts">
import type User from '@/types/User';
import { ref } from 'vue';


const emit = defineEmits<{
  (event: 'save'): void
}>();

const userModel = ref<User>({
  firstname: '',
  lastname: '',
  nickname: '',
  dob: '',
  email: '',
});

function onSave() {
  emit('save');
}
</script>

<template>
  <v-form>
    <v-row>
      <v-col cols="6">
        <v-text-field v-test="'firstname'" label="Vorname" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-test="'lastname'" label="Nachname" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-test="'nickname'" label="Nickname" />
      </v-col>
      <v-col cols="6">
        <v-text-field v-test="'dob'" type="date" label="Geburtsdatum" />
      </v-col>

      <v-col cols="12">
        <v-text-field v-test="'email'" label="E-Mail" />
      </v-col>
    </v-row>
    
    <v-btn color="primary" v-test="'user-save-btn'" @click="onSave">Speichern</v-btn>
  </v-form>
</template>


<style scoped>

</style>