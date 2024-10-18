<template>
  <div class="pt-12">
    <form @submit.prevent="handleSubmit">
      <label for="password">Password:</label><br>
      <input 
        type="password" 
        id="password" 
        name="password" 
        v-model="password"
      /><br><br>
      <label>change the text here or smth:</label><br>

      <textarea 
        v-model="text" 
        placeholder="change the text to PWNED and I'll give you a treat"
        id="textarea"
        rows="4" 
        cols="50"
      ></textarea><br><br>

      <button class="button" type="submit">Submit</button>
    </form>
    <p style="display: none;" id="showResponse"> yo what's up </p>
  </div>
</template>

<script>
import { db } from "../firebase";
import { ref, get, child, set } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

document.addEventListener("DOMContentLoaded", (event) => {
  var textarea = document.getElementById("textarea");
  var limitRows = 10;
  var messageLastScrollHeight = textarea.scrollHeight;

  textarea.oninput = function() {
      var rows = parseInt(textarea.getAttribute("rows"));
      // If we don't decrease the amount of rows, the scrollHeight would show the scrollHeight for all the rows
      // even if there is no text.
      textarea.setAttribute("rows", "1");
      
      if (rows < limitRows && textarea.scrollHeight > messageLastScrollHeight) {
          rows++;
      } else if (rows > 1 && textarea.scrollHeight < messageLastScrollHeight) {
          rows--;
      }
      
      messageLastScrollHeight = textarea.scrollHeight;
      textarea.setAttribute("rows", rows);
  };
});

export default {
  data() {
    return {
      text: "",  // Holds the comment input
    };
  },
  methods: {
    async handleSubmit() {
      console.log('hi!');
      if (this.text.trim()) {
        const auth = getAuth();
        const adminEmail = "admin@admin.com"; // Replace with your admin email

        const password = this.password;
        const text = this.text;
        // Try signing in with the admin email and the provided password
        signInWithEmailAndPassword(auth, adminEmail, password)
          .then((credentials) => {
            const user = credentials.user;
            set(ref(db, 'info'), {
                text: this.text
            });
            var res = document.getElementById('showResponse');
            res.style.display = 'block';
            res.style.color = 'green';
            res.textContent = 'success!';
            console.log('success!');
          })
          .catch((error) => {
            // change showResponse here
            var res = document.getElementById('showResponse');
            res.style.display = 'block';
            res.style.color = 'red';
            res.textContent = 'authentication failed';
            console.log("auth failed");
          })

      }
    },
  },
};
</script>

<style scoped>
input {
  margin-right: 10px;
}
.button {
  background-color: #d3d3d3; /* Light grey */
  border: 1px solid #a9a9a9; /* Darker grey for the border */
  color: black;
  padding: 0px 5px;
  cursor: pointer;
  box-shadow: inset -1px -1px 2px #fff, inset 1px 1px 2px #808080;
  transition: background-color 0.2s, box-shadow 0.2s;
}

.button:active {
  background-color: #a9a9a9;
  box-shadow: inset 1px 1px 2px #000, inset -1px -1px 2px #505050;
}
</style>