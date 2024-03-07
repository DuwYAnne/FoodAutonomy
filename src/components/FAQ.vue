<script setup>
    import Accordion from './Accordion.vue';
</script>

<template>
    <div class="container fade">
      <h1>Frequently Asked Questions</h1>
      <main>
        <Accordion
        aria-title="location"
        title="Where is the festival located?">
            <p class="text"> The festival location will be announced later, about a week before the event. <br>
            The location is within a 20 minute bus ride from the University of Illinois campus, and a 12 minute bike ride. The distance is also walkable in 30-45 minutes! <br>
            </p>
        </Accordion>
        <Accordion
        aria-title="food"
        title="Will there be food? What about dietary restrictions?">
            <p class="text"> Yes! We are planning on having enough food to serve over 100 people. If you want to donate food, please email us! <br>
            The food will be all vegan, gf, with nut free options as well. We encourage you to contact us about any other restrictions.
            </p>
        </Accordion>
        <Accordion
        aria-title="self-event"
        title="I want to host my own event!">
            <p class="text"> In the events tab, we have a teamup calendar that anyone is able to add to. <br>
            Please add your event and a short description as well as what time you'd prefer.<br>
            If you add an event, we recommended contacting us about the details of the space and to find a good location. 
            </p>
        </Accordion>
      </main>
    </div>
    <p class="info text fade text-base text-center text-red-600 text-bold">
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