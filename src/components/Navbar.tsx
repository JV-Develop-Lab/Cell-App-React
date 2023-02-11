import {Box, Center, Flex} from "@chakra-ui/react";
import {TypeActivities, useFlow} from "../stackflow";
import {AiOutlineHome, AiFillHome, AiOutlineHeart, AiFillHeart, RiSearch2Line, RiSearch2Fill, BsPeople, BsPeopleFill} from "react-icons/all";
import {HTMLAttributes, ReactNode, useState} from "react";
import {useActivity} from "@stackflow/react";

type LinkItemProps = HTMLAttributes<HTMLButtonElement> & {
    fill: ReactNode;
    outline: ReactNode;
    activityName: TypeActivities;
}

const LinkItem = ({children, fill, outline, activityName, ...props} : LinkItemProps) => {
    const {replace} = useFlow();
    const {name} = useActivity();
    
    const onLinkClick = () => {
        replace(activityName, {
            title: activityName
        }, {
            animate: false
        })
    }
    
    return(
        <button onClick={onLinkClick} {...props}>
            <Center>
                {name === activityName ? fill : outline}
            </Center>
        </button>
    )
}

export default function Navbar(){
    
    return(<Box as="div" position="absolute" bottom={0} display="flex" width="100%" height="60px">
        <Flex align="center" justify="space-around" direction="row" width="100%">
            <LinkItem fill={<AiFillHome size={24}/>} outline={<AiOutlineHome size={24}/>} activityName="Home"/>
            <LinkItem fill={<AiFillHeart size={24}/>} outline={<AiOutlineHeart size={24}/>} activityName="Book"/>
            <LinkItem fill={<RiSearch2Fill size={24}/>} outline={<RiSearch2Line size={24}/>} activityName="Home"/>
            <LinkItem fill={<BsPeopleFill size={24}/>} outline={<BsPeople size={24}/>} activityName="Home"/>
        </Flex>
    </Box>)
}
