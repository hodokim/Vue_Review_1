import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList,  } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        news : [],
        ask : [],
        jobs : []
    },
    getters :{
        fetchedJobs(state){
            return state.jobs;
        }
    },
    actions : {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(response => context.commit('SET_NEWS', response.data))
                .catch(error => console.log(error));
        },
        FETCH_ASK({commit}) {
            fetchAskList()
                .then(response => commit('SET_ASK', response.data))
                .catch(error => console.log(error));
        },
        FETCH_JOBS({commit}){
            fetchJobsList()
                .then(response => commit('SET_JOBS', response.data))
                .catch(error => console.log(error));
            
        }
    },
    mutations : {
        SET_NEWS(state, news){
            state.news = news;
        },
        SET_ASK(state, ask) {
            state.ask = ask;
        },
        SET_JOBS(state, jobs){
            state.jobs = jobs;
        }
    }
    
})