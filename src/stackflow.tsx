import "@stackflow/plugin-basic-ui/index.css";

import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import Home from "./pages/Home";
import Book from "./pages/Book";

const activities = {
    Home,
    Book
}

//  TODO: 이거는 스택플로에 기여해도 되겠다.
export type activitiesType = keyof typeof activities

export const { Stack, useFlow, useStepFlow } = stackflow({
    transitionDuration: 350,
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    activities,
    initialActivity: () => "Home",
});
