<template>
    <div class="create_script">
        <h3>Создать новый скрипт</h3>
        <form
            @submit.prevent="addScript"
            class="create_script_form"
        >
            <input
                type="text"
                id="name"
                v-model="name"
            />

            <input
                type="submit"
                value="создать"
            />
        </form>
    </div>
</template>


<script>
    //import createScript from './../../api/create_script';
    import BX24Wrapper from './../../libs/bx24-wrapper';

    export default {
        name: 'CreateScript',
        data: () => ({
            name: ''
        }),
        methods: {
            async addScript () {
                let bx24 = new BX24Wrapper();

                let test = await bx24.callMethod('entity.get');

                console.log('test', test);

                //console.log(createScript());

                this.name = '';
            }
        }
    }
</script>

<style>
    .create_script_form {
        padding: 10px;
    }
</style>