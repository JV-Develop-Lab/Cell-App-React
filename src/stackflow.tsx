import "@stackflow/plugin-basic-ui/index.css";

import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";

import Home from "./pages/Home";
import Book from "./pages/Book";
import {historySyncPlugin} from "@stackflow/plugin-history-sync";

export const activities = {
    Home,
    Book
}

//  TODO: 이거는 스택플로에 기여해도 되겠다.
export type activitiesType = keyof typeof activities

export const { Stack, useFlow } = stackflow({
    transitionDuration: 350,
    activities,
    plugins: [
        () => {
            return {
                key: "my-plugin",
                onInit() {
                    console.log("Initialized!");
                },
            };
        },
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
        historySyncPlugin({
            routes: {
                Home: "/home",
                Book: "/book",
            },
            fallbackActivity: () => "Home",
        })
    ],
});
