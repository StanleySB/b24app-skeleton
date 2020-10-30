import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        scripts: []
    },
    getters: {
        scriptsList (state) {
            return state.scripts;
        }
    },
    mutations: {
        setScriptsList (state, scripts) {
            state.scripts = scripts;
        },
        addItemScripts (state, script) {
            state.scripts.push(script);
        }
    },
    actions: {
        /* creators */
        async createScript (context, name) {
            try {
                const scriptData = {name: name, questions: []};
                let script = await axios.post('http://localhost:3000/scripts', scriptData);
                context.commit('addItemScripts', script.data);
            } catch (error) {
                console.error(error);
                return error;
            }
        },

        /* getters */
        async getScripts (context) {
            try {
                const scripts = await axios.get('http://localhost:3000/scripts');
                context.commit('setScriptsList', scripts.data);
            } catch (error) {
                console.error(error);
                return error;
            }
        },
        async getScriptById (context, id) {
            return axios.get('http://localhost:3000/scripts/?id=' + id);
        }
    }
});
