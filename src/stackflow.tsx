import "@stackflow/plugin-basic-ui/index.css";

import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import Home from "./pages/Home";
import Article from "./Article";


export const { Stack, useFlow, useStepFlow } = stackflow({
    transitionDuration: 350,
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    activities: {
        Home,
        Article
    },
    initialActivity: () => "Home",
});
