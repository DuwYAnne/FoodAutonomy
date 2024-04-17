<script setup>
function mounted() {
    console.log("events")
}
</script>

<template>
    <p class="info text-base text-center">
        Below is the (still tentative event calendar). We will finalize it in the welcome handout during the event.  <br>
        We still encourage the use of the teamup calendar (below the schedule) to add any event you want! <br>
        Just click on the white spcae to add an event. 
    </p>
    <img class="m-auto w-full md:w-1/2" src="../assets/schedule.png" />
    <div class="fade m-auto" style="border-radius: 10px; width: 500px; overflow: hidden;">  
        <iframe src="https://teamup.com/ks6rbpnuabr7yrhwwk?date=2024-04-17&view=md5" 
            title="Schedule">
        </iframe>
    </div>
</template>

<style scoped>
iframe {
    height: 800px;
    width: 500px;
    resize: both;
    overflow: auto;
}
</style>
