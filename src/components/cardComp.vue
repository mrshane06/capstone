<template>
    <div :style="{backgroundImage:`url(${cover})`,backgroundSize:'cover',filter:'blur(4px)'}"></div>
    <div>
        <h1>
            <slot name="id"></slot>
            <slot name="author"></slot>
            <slot name="category"></slot>
            <slot name="amount"></slot>
            <slot name="heading"></slot>
            <slot name="quantity"></slot>
            <slot name="description"></slot>
        </h1>
    </div>
</template>
<script>
export default {
    props:['cover']
}
</script>
<style scoped>
    h1{
        color:white;
        text-shadow:3px 3px black;
    }

    div{
        width: 300px;
        height: 400px;
        position: absolute;
        border-radius: 10%;
    }
</style>