<script setup>
const props = defineProps({
    videoKey: String
})

</script>

<template>
    <iframe id="ytplayer" type="text/html" width="720" height="405"
    :src="`https://www.youtube.com/embed/${props.videoKey}?enablejsapi=1&color=white&iv_load_policy=3&modestbranding=1`"
    frameborder="0" allowfullscreen ></iframe>
</template>