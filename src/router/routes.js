const routes = [
    {
        path: "/",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [
            { path: "", component: () => import("pages/Page1.vue") },
        ],
    },
    {
        path: "/page1",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page1.vue") }],
    },
    {
        path: "/page2",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page2.vue") }],
    },
    {
        path: "/page3",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page3.vue") }],
    },
    {
        path: "/page4",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page4.vue") }],
    },
    {
        path: "/page5",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page5.vue") }],
    },
    {
        path: "/page6",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page6.vue") }],
    },
    {
        path: "/page7",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page7.vue") }],
    },
    {
        path: "/page8",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page8.vue") }],
    },

    {
        path: "/page11",
        component: () => import("layouts/MainLayout.vue"),
        // meta: {
        //     noCache: true
        // },
        children: [{ path: "", component: () => import("pages/Page11.vue") }],
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
