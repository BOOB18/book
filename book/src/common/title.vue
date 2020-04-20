<template>
    <div class="title">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        props:['name']
    }

</script>

<style lang="less" scoped>
    .title{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        height: 1rem;
        width: 100%;
        text-align: center;
        line-height: 1rem;
        background: salmon;
        font-size: 0.4rem;
        color: #fff;
    }
</style>