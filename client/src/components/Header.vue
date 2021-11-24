<template>
    <header class='header'>
        <h1>{{title}}</h1>
        <!-- <button @click='onClick()'>
            {{showAddOrder ? 'Close' : 'Add Order'}}
        </button> -->
    </header>
</template>

<script>

export default {
    name: "Header",
    props: {
        title: {
        type: String,
        default: 'Hello World',
        showAddOrder: Boolean,
        },
    },
    methods:{
        onClick(){
            this.$emit('toggle-add-order', )
        }
    }
}
</script>
