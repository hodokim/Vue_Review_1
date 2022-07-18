import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo} from '../api/index.js';

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => context.commit('SET_NEWS', response.data))
            .catch(error => console.log(error));
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(response => commit('SET_ASK', response.data))
            .catch(error => console.log(error));
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(response => commit('SET_JOBS', response.data))
            .catch(error => console.log(error));

    },
    FETCH_USER({commit}, userName){
        fetchUserInfo(userName)
            .then(response => commit('SET_USER', response.data))
            .catch(error => console.log(error + "에러입니당"));
    }
}