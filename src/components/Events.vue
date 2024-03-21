<script setup>
function mounted() {
    console.log("events")
}
</script>

<template>
    <div class="fade m-auto" style="border-radius: 10px; width: 500px; overflow: hidden;">  
        <iframe src="https://teamup.com/ksxyum8ijv4pwd4m8q?date=2024-04-19&view=md2" 
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
