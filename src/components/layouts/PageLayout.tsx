import {Box, Button, Heading, Text} from "@chakra-ui/react";
import {HTMLAttributes} from "react";
import Navbar from "../Navbar";

type PageLayoutProps = HTMLAttributes<HTMLDivElement>;

export default function PageLayout({...props}: PageLayoutProps){
    return<Box as="main" position="relative" h="100%" width="100%">
        {props.children}
        <Navbar/>
    </Box>
}
