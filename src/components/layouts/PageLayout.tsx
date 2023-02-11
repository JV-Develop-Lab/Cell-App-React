import {Box} from "@chakra-ui/react";
import {HTMLAttributes} from "react";
import Navbar from "../Navbar";
import {AppScreen} from "@stackflow/plugin-basic-ui";

type PageLayoutProps = HTMLAttributes<HTMLDivElement>;

export default function PageLayout({...props}: PageLayoutProps){
    return <AppScreen>
        <Box as="main" position="relative" h="100%" width="100%">
            {props.children}
            <Navbar/>
        </Box>
    </AppScreen>
}
