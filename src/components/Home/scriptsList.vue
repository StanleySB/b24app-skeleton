<template>
    <div class="scripts_list">
        <h3>Список скриптов</h3>
        <ul>
            <li
                class="li_item"
                v-for="(script) in scriptsList"
                :key="script.id"
            >
                <router-link :to="{ path: '/scripts/edit/' + script.id }">
                    {{ script.name }} (редактирование)
                </router-link> |
                <router-link :to="{ path: '/scripts/run/' + script.id }">
                    {{ script.name }} (запустить)
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "scriptsList"
    }
</script>
