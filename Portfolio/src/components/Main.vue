<script>
    import Presentation from './Presentation.vue'
    import Creation from './Creation.vue'
    import Form from './Form.vue'

    export default {
        components: {
            Presentation,
            Creation,
            Form}
    };
</script>

<template>
    
    <Presentation />
    <Creation />
    <Form />
</template>

<style scoped>

    main{
        margin-top: 70px;
        margin-left: 30px;
        margin-right: 30px;
    }

    @media screen and (max-width: 390px) {
        main{
        #creations{
            display: flex;
            flex-direction: column;
        }

        .form-row{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .form-group{
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
    }
  }


</style>