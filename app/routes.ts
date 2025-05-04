import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/index.tsx"),
    route("about-us", "routes/about-us.tsx")
] satisfies RouteConfig;
