import {Box, Button, Center, Flex, Stack} from "@chakra-ui/react";
import {activitiesType, useFlow} from "../stackflow";
import {AiOutlineHome, AiFillHome, AiOutlineHeart, AiFillHeart, RiSearch2Line, RiSearch2Fill, BsPeople, BsPeopleFill} from "react-icons/all";
import {HTMLAttributes, ReactNode, useState} from "react";

type LinkItemProps = HTMLAttributes<HTMLButtonElement> & {
    fill: ReactNode;
    outline: ReactNode;
    activity: activitiesType;
}

const LinkItem = ({children, fill, outline, activity, ...props} : LinkItemProps) => {
    const [clicked, setClicked] = useState(false);
    const {replace} = useFlow();
    const onLinkClick = () => {
        replace(activity, {
            title: activity
        })
        setClicked(prev => !prev)
    }
    return(
        <Button onClick={onLinkClick} variant={"ghost"} {...props}>
            <Center>
                {clicked ? fill : outline}
            </Center>
        </Button>
    )
}

export default function Navbar(){
    
    return(<Box as="div" position="absolute" bottom={0} display="flex" width="100%" height="60px">
        <Flex align="center" justify="space-around" direction="row" width="100%">
            <LinkItem fill={<AiFillHome/>} outline={<AiOutlineHome size={24}/>} activity="Home"/>
            <LinkItem fill={<AiFillHome/>} outline={<AiOutlineHeart size={24}/>} activity="Home"/>
            <LinkItem fill={<AiFillHome/>} outline={<RiSearch2Line size={24}/>} activity="Home"/>
            <LinkItem fill={<AiFillHome/>} outline={<BsPeople size={24}/>} activity="Home"/>
        </Flex>
    </Box>)
}
