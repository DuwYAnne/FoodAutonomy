<script setup>
    import Accordion from './Accordion.vue';
</script>

<template>
    <div class="container fade">
      <h1 class="font-bold">Frequently Asked Questions</h1>
      <main>
        <Accordion
        aria-title="location"
        title="Where is the festival located?">
            <p class="text text-center"> The festival location is now out! The location is at the intersection of Lincoln Avenue and Windsor Road. <br>
            The coordinates are (40.086,-88.215), and it is on the North South gravel road where the U of I Pollinitarium is. <br>
            Image provided below for clarity! </br>
            </p>
            <img class="m-auto w-full md:w-1/2" src="../assets/SAWmap_v1.png" />
        </Accordion>
        <Accordion
        aria-title="travel"
        title="How do I get to the location?">
            <p class="text text-center"> You can use the university bus lines!</p>
            <img class="m-auto w-full md:w-1/2" src="../assets/bus-routes.png" />

        </Accordion>
        

        <Accordion
        aria-title="food"
        title="Will there be food?">
            <p class="text text-center"> Yes! We are planning on having enough food to serve over 100 people. If you want to donate food, please email us! <br>
            The food will be all vegan, gf, with nut free options as well. We encourage you to contact us about any other restrictions.
            </p>
        </Accordion>
        <Accordion
        aria-title="self-event"
        title="I want to host my own event!">
            <p class="text text-center"> In the events tab, we have a teamup calendar that anyone is able to add to. <br>
            Please add your event and a short description as well as what time you'd prefer.<br>
            If you add an event, we recommended contacting us about the details of the space and to find a good location. 
            </p>
        </Accordion>
        <Accordion
        aria-title="groupchat"
        title="Is there a newsletter?">
            <p class="text text-center"> We have a signal group chat where you can talk about food autonomy and we will give updates.
            </p>
        </Accordion>
      </main>
    </div>
    <p class="info text fade text-base text-center text-violet-700 text-bold">
        Contact us for any further questions at <a class="underline" href="mailto:ucfoodautonomy@protonmail.com">ucfoodautonomy@protonmail.com</a> 
    </p>
</template>

<style scoped>
.text {

  font-family: "Georgia", serif;
}

h1 {
    font-size: 32px;
}
</style>