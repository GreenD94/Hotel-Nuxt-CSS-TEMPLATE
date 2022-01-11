export default [
    {
        name: 'user',
        path: '/user',
        component:'index.vue',
        routeCan:['read']
    },
    {
        name: 'usercreate',
        path: '/user/create',
        component: 'create.vue',
        routeCan:['create']
    },
    {
        name: 'userTest',
        path: '/user/test',
        component: 'create.vue',
        //routeCan:['create']
    }
]