<template>
<div>
    <form @submit.prevent="handleSubmit">
        <label>Email:</label>
        <input type="email" required v-model="email">
        <label>Password:</label>
        <input type="password" required v-model="password">
        <div v-if="passwordError" class="error">{{ passwordError }}</div>
        <label>Role:</label>
        <select v-model="role">
            <option value="developer">Web Developer</option>
            <option value="designer">Web Designer</option>
            <option value="cloud">Cloud Engineer</option>
        </select>

        <!-- <div>
            <input type="checkbox" value="Gogineni" v-model="names">
            <label>Gogineni</label>
        </div>
        <div>
            <input type="checkbox" value="Manaswini" v-model="names">
            <label>Manaswini</label>
        </div>
        <div>
            <input type="checkbox" value="Jace" v-model="names">
            <label>Jace</label>
        </div> -->
        <label>Skills:</label>
        <input type="text" v-model="tempSkills" @keyup.alt="addSkill">
        <div v-for="skill in skills" :key="skill" class="pill">
            <span @click="removeSkill(skill)">{{ skill }}</span>
        </div>
        <div class="terms">
            <input type="checkbox" id="terms" required v-model="terms">
            <label for="terms">I agree to the terms and conditions</label>
        </div>

        <div class="submit">
            <button>Create an Account</button>
        </div>
    </form>
</div>
</template>

<script>
export default {
  name: 'FormSignUp',
  data() {
    return {
      email: '',
      password: '',
      role: '',
      terms: false,
    //   names: []
        tempSkills: '',
        skills: [],
        passwordError: '',
    }
  },
  methods: {
    addSkill(event) {
        if (event.key === ',' && this.tempSkills) {
            if (this.skills.includes(this.tempSkills)) {
                this.tempSkills = '';
            }
            this.skills.push(this.tempSkills.trim());
            this.tempSkills = '';
        }
    },
    removeSkill(skill) {
        const index = this.skills.indexOf(skill);
        if (index > -1) {
            this.skills.splice(index, 1);
        }
    },
    handleSubmit() {
        this.passwordError = this.password.length < 6 ? 'Password must be at least 6 characters long' : '';
        if (!this.passwordError) {
            const formData = {
                email: this.email,
                password: this.password,
                role: this.role,
                terms: this.terms,
                skills: this.skills
            };
            console.log('Form submitted:', formData);
        }
    }
  }
}
</script>

<style>
form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
}
label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
}

input, select {
    display: block;
    width: 100%;
    padding: 10px 6px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
}

input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
}
.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    background: #eee;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}
button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
}
.submit {
    text-align: center;
}
.error {
    color: red;
    margin-top: 10px;
    font-size: 0.5em;
    font-weight: bold;
}
</style>