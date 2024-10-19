<template>
  <div class="text-center md:text-left" >
    <span class="prairie-info-text text-[0.75em] md:text-xl lg:text-2xl fade inline-block mt-24" v-html="formatText(text)"></span>
  </div>
</template>

<script>
import { db } from "../firebase";
import { ref, get, child } from "firebase/database";


export default {
  data() {
    return {
      text: ""
    };
  },
  created() {
    this.loadComments();
  },
  methods: {
    // Load existing comments once when the component is created
    async loadComments() {
      const dbRef = ref(db);
      get(child(dbRef, `info`)).then((snapshot) => {
        console.log(snapshot.val());
        const data = snapshot.val() || {};
        // Convert the object to an array and sort by timestamp
        this.text = data.text;
        console.log(this.text);
        // MAYBE USE THIS COMMENT THING LATER
        //Object.entries(data).map(([key, value]) => ({
        //  id: key,
        //  ...value,
        //})).sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
      }).catch((error) => {
        console.error(error);
      });
    },
    formatText(text) {
        return text.replace(/\n/g, "<br>");
    }
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 10px;
}

.prairie-info-text {
  font-family: "ballot", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: white;
  background: url('/src/assets/rainbow.jpg') 0 0 / cover;
  background-size: 100%; 
  color: #de466c;
  padding-right: 1em;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>