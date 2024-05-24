<template>
  <div>
    <form @submit.prevent="submitForm" class="Contact_Form">
      <section class="Input_ContactForm">
        <label for="email">Email:</label>
        <input
          class="input is-rounded"
          id="email"
          v-model="form.email"
          type="email"
          placeholder="Email"
        />
      </section>
      <section class="Input_ContactForm">
        <label for="company">BedrijfNaam</label>
        <input
          class="input is-rounded"
          id="company"
          v-model="form.company"
          type="text"
          placeholder="Company"
        />
      </section>

      <section class="Naam_telfoon">
        <div>
          <label for="name">Naam</label>
          <input
            class="input is-rounded"
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="telfoon_fild">
          <label for="telephone">Telefoonnummer</label>
          <input
            class="input is-rounded"
            id="telephone"
            v-model="form.telephone"
            type="text"
            placeholder="Telephone"
          />
        </div>
      </section>

      <section class="Input_ContactForm">
        <label for="message">Jouw bericht</label>
        <textarea
          class="textarea is-warning is-large "
          id="message"
          v-model="form.message"
          placeholder="Message"
        ></textarea>
      </section>

      <button
        class="button is-normal is-responsive btn_ContactForm"
        type="submit"
      >
        VerStuur
      </button>
      <!-- checkbox -->
      <label class="checkbox">
        <input type="checkbox" id="checkboxdemo" v-model="form.checkboxdemo" />
        Ik wil graag een demo
      </label>
    </form>

    <div class="successMessage " v-if="successMessage">
      {{ successMessage }}
    </div>
    <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<style>
.Contact_Form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: unset;
  gap: 2em;
  width: 100%;
  padding: 1em;
  overflow: hidden;
}
.Input_ContactForm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.Naam_telfoon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.Naam_telfoon div {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 50%;
}
.Naam_telfoon label {
  color: #ffff;
  font-size: normal;
  margin-left: 1em;
}
label {
  color: #ffff;
  font-size: normal;
  margin-left: 1em;
}
.button {
  color: #ffff !important;
  font-size: large;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #d95a00 !important;
  width: 30%;
}
.successMessage,
.errorMessage {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: normal;
  color: #000;
  background-color: rgb(216, 212, 212);
  padding: 2em;
  border-radius: 1em;
  z-index: 1;
}

/* PC versie */
@media (min-width: 60em) {
  .Contact_Form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: unset;
    gap: 2em;
    width: 100%;
    /* padding: ; */
  }
  .Input_ContactForm {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.5em;
  }
  .Naam_telfoon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1em;
  }
  .Naam_telfoon div {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 50%;
  }
  .Naam_telfoon label {
    color: #ffff;
    font-size: normal;
    margin-left: 1em;
  }
  label {
    color: #ffff;
    font-size: normal;
    margin-left: 1em;
  }
  .btn_ContactForm {
    color: #ffff;
    font-size: large;
    font-weight: bold;
    letter-spacing: 1px;
    background-color: #d95a00;
    width: 30%;
  }
}
</style>

<script setup>
import { ref } from "vue";

const form = ref({
  email: "",
  company: "",
  name: "",
  telephone: "",
  message: "",
  checkboxdemo: false, // Set initial value to null
  // checkboxdemo: "",
});

const successMessage = ref("");
const errorMessage = ref("");

const submitForm = async (event) => {
  const token = useRuntimeConfig().public.apiToken;
  event.preventDefault();
  try {
    const response = await fetch(
      "https://prd-website-mp-strapi.synflows.net/api/contact-forms",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: {
            email: form.value.email,
            company: form.value.company,
            name: form.value.name,
            telephone: form.value.telephone,
            message: form.value.message,
            checkboxdemo: form.value.checkboxdemo,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const resData = await response.json();

    successMessage.value = "Form submitted successfully!";
    clearForm(); // Clear form fields after successful submission
  } catch (error) {
    errorMessage.value = "Error submitting form: " + error.message;
  }
};

const clearForm = () => {
  form.value.email = "";
  form.value.company = "";
  form.value.name = "";
  form.value.telephone = "";
  form.value.message = "";
  form.value.checkboxdemo = false; // Reset checkboxdemo to null
  // form.value.checkboxdemo = "";
};
</script>
