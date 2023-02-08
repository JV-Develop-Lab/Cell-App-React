import {Box, Heading, Text} from "@chakra-ui/react";
import {HTMLAttributes} from "react";

type PageLayoutProps = HTMLAttributes<HTMLDivElement>;

export default function PageLayout({...props}: PageLayoutProps){
    return<Box height="100vh" position="relative">
        <Heading color="blue">안녕하세요</Heading>
        {props.children}
    </Box>
}
