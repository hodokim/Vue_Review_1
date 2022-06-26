import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes : [
        {
            // path : url 주소
            path: '/news',
            // component : url 주소로 갔을 떄 표시될 컴포넌트
            component: NewsView,
        },
        {
            path : '/ask',
            component : JobsView,
        },
        {
            path: '/jobs',
            component: AskView,
        }
    ]
})

export default router;