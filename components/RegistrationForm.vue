<template>
  <section class="Registrationforms">
    <form @submit.prevent="handleSubmit" class="Registerform-group">
      <section class="Company_ContactPerson">
        <div class="company">
          <label for="company">Bedrijfs Naam</label>
          <input
            class="input is-warning is-small"
            id="company"
            name="company"
            v-model="company"
            type="text"
            placeholder="Company"
          />
        </div>

        <div class="ContactPerson">
          <label for="contactperson">Contactpersoon</label>
          <input
            class="input is-warning is-small"
            id="contactperson"
            name="contactperson"
            v-model="contactperson"
            type="text"
            placeholder="Contactperson"
          />
        </div>
      </section>
      <section class="Adrese_PostCode Company_ContactPerson">
        <div>
          <label for="adres">Adres</label>
          <input
            class="input is-warning is-small"
            id="adres"
            name="adres"
            v-model="adres"
            type="text"
            placeholder="adres"
          />
        </div>

        <div class="PostCode">
          <label for="postcode">Postcode </label>
          <input
            class="input is-warning is-small"
            id="postcode"
            name="postcode"
            v-model="postcode"
            type="text"
            placeholder="postcode"
          />
        </div>
      </section>

      <section class="Input_RegisterForm">
        <label for="city">Plaats</label>
        <input
          class="input is-warning is-small"
          id="city"
          name="city"
          v-model="city"
          type="text"
          placeholder="city"
        />
      </section>

      <section class="Input_RegisterForm">
        <label for="country">Land</label>
        <input
          class="input is-warning is-small"
          id="country"
          name="country"
          v-model="country"
          type="text"
          placeholder="Country"
        />
      </section>
      <section class="Input_RegisterForm">
        <label for="email">Email</label>
        <input
          class="input is-warning is-small"
          id="email"
          name="email"
          type="email"
          v-model="email"
          placeholder="Email"
        />
      </section>
      <section class="Input_RegisterForm">
        <label for="telephone">Telefoonnummer</label>
        <input
          class="input is-warning is-small"
          id="telephone"
          name="telephone"
          v-model="telephone"
          type="text"
          placeholder="Telephone"
        />
      </section>

      <section class="Input_RegisterForm">
        <label for="website">Website</label>
        <input
          class="input is-warning is-small"
          id="website"
          name="website"
          v-model="website"
          type="text"
          placeholder="Website"
        />
      </section>

      <!-- uploads pdf files -->
      <section class="Input_RegisterForm">
        <label for="multi-file">Uploads Documenten</label>
        <input
          class="input is-warning is-small"
          id="multi-file"
          name="multi-file"
          multiple
          type="file"
          @change="onMultiFileChange"
        />
      </section>
      <section class="Input_RegisterForm">
        <label for="accountnumber">IBAN Rekening Nummber</label>
        <input
          class="input is-warning is-small"
          id="accountnumber"
          name="accountnumber"
          v-model="accountnumber"
          type="text"
          placeholder="Account number"
        />
      </section>

      <section class="Input_RegisterForm">
        <!-- checkbox machtiging -->
        <label class="checkbox" for="authority">
          <input
            type="checkbox"
            id="authority"
            v-model="authority"
            name="authority"
          />
          Akkoord machtiging bank
        </label>
        <!-- checkbox privacy -->
        <label class="checkbox" for="checkboxprivacy">
          <input
            id="checkboxprivacy"
            name="checkboxprivacy"
            v-model="checkboxprivacy"
            type="checkbox"
          />
          Akkoord Privacybeleid<a href="/privacy" class="checkbox-link"
            >privacy statement</a
          >
        </label>
        <!-- checkboxconditions -->
        <label class="checkbox" for="checkboxcondition">
          <input
            type="checkbox"
            id="checkboxcondition"
            v-model="checkboxcondition"
            name="checkboxcondition"
          />
          Akkoord Algemene voorwaarden<a
            href="/conditions"
            class="checkbox-link"
            >algemene voorwaarden</a
          >
        </label>
        <button
          class="button is-normal is-responsive btn_RigesterForm"
          type="submit"
        >
          VerStuur
        </button>
      </section>
    </form>

    <!-- Success message -->
    <div class="successMessage" v-if="successMessage">{{ successMessage }}</div>

    <!-- Error message -->
    <div class="errorMessage" v-if="errorMessage">{{ errorMessage }}</div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const email = ref("");
    const company = ref("");
    const contactperson = ref("");
    const adres = ref("");
    const postcode = ref("");
    const city = ref("");
    const country = ref("");
    const telephone = ref("");
    const website = ref("");
    const multiFile = ref([]);
    const accountnumber = ref("");
    const authority = ref("");
    const checkboxprivacy = ref("");
    const checkboxcondition = ref("");
    const successMessage = ref(""); // Define success message variable
    const errorMessage = ref(""); // Define error message variable

    const handleSubmit = async () => {
      const token = useRuntimeConfig().public.apiToken;
      try {
        const formData = new FormData();
        const data = {
          email: email.value,
          company: company.value,
          contactperson: contactperson.value,
          adres: adres.value,
          postcode: postcode.value,
          city: city.value,
          country: country.value,
          telephone: telephone.value,
          website: website.value,
          accountnumber: accountnumber.value,
          authority: authority.value,
          checkboxprivacy: checkboxprivacy.value,
          checkboxcondition: checkboxcondition.value,
        };

        formData.append("data", JSON.stringify(data));

        for (let i = 0; i < multiFile.value.length; i++) {
          formData.append("files.uploadsfile", multiFile.value[i]);
        }

        const createArticle = await fetch(
          "https://prd-website-mp-strapi.synflows.net/api/registrationforms",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const createRes = await createArticle.json();
        console.log("createArticleRes", createRes);

        if (createArticle.ok) {
          successMessage.value = "Form submitted successfully!";
          // Clear form fields after successful submission
          email.value = "";
          company.value = "";
          contactperson.value = "";
          adres.value = "";
          postcode.value = "";
          city.value = "";
          country.value = "";
          telephone.value = "";
          website.value = "";
          multiFile.value = [];
          accountnumber.value = "";
          authority.value = "";
          checkboxprivacy.value = "";
          checkboxcondition.value = "";
        } else {
          errorMessage.value =
            "Fout bij verzenden formulier: Om door te gaan, moeten de vakjes voor Akkoord machtiging bank, Akkoord Privacybeleid en Akkoord Algemene voorwaarden aangevinkt zijn, samen met het vakje voor het e-mailoptie. Gelieve de pagina te herladen. ";
        }
      } catch (error) {
        errorMessage.value =
          "Fout bij verzenden formulier: Om door te gaan, moeten de vakjes voor Akkoord machtiging bank, Akkoord Privacybeleid en Akkoord Algemene voorwaarden aangevinkt zijn, samen met het vakje voor het e-mailoptie. Gelieve de pagina te herladen. " +
          error.message;
        console.error("Error occurred:", error.message);
      }
    };

    const onMultiFileChange = (e) => {
      multiFile.value = Array.from(e.target.files);
    };

    return {
      email,
      company,
      contactperson,
      adres,
      postcode,
      city,
      country,
      telephone,
      website,
      multiFile,
      accountnumber,
      authority,
      checkboxprivacy,
      checkboxcondition,
      handleSubmit,
      onMultiFileChange,
      successMessage,
      errorMessage,
    };
  },
};
</script>

<style>
.Registrationforms {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: unset;
  gap: 2em;
  width: 100%;
  padding: 1em;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
}
.Input_RegisterForm {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5em;
}
.Company_ContactPerson {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1em;
}
.Company_ContactPerson div {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: 50%;
}
.Company_ContactPerson label {
  color: #ffff;
  font-size: normal;
  margin: 0.5em 0 0.3em 0em;
}
label {
  color: #fff;
  font-size: normal;
  margin: 0.5em 0 0.3em 0em;
}
.btn_RigesterForm {
  color: #ffff !important;
  font-size: large;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #d95a00 !important;
  margin: 0 auto;
  margin-top: 1em;
  width: 30%;
}

.checkbox-link {
  position: relative;
  cursor: pointer;
  color: #1a06f9;
  margin-left: 0.3em;
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
  .Registrationforms {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: unset;
    gap: 2em;
    width: 50%;
    margin-top: 1em;
  }
}
</style>
