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

    // Always leave this as last one,
    // but you can also remove it
    {
        path: "/:catchAll(.*)*",
        component: () => import("pages/ErrorNotFound.vue"),
    },
];

export default routes;
