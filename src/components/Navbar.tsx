import {Box, Center, Flex} from "@chakra-ui/react";
import {activitiesType, useFlow} from "../stackflow";
import {AiOutlineHome, AiFillHome, AiOutlineHeart, AiFillHeart, RiSearch2Line, RiSearch2Fill, BsPeople, BsPeopleFill} from "react-icons/all";
import {HTMLAttributes, ReactNode, useState} from "react";
import {useActivity} from "@stackflow/react";

type LinkItemProps = HTMLAttributes<HTMLButtonElement> & {
    fill: ReactNode;
    outline: ReactNode;
    activityName: activitiesType;
}

const LinkItem = ({children, fill, outline, activityName, ...props} : LinkItemProps) => {
    const [clicked, setClicked] = useState(false);
    const {replace} = useFlow();
    const activity = useActivity();
    
    console.log(activity);
    
    const onLinkClick = () => {
        replace(activityName, {
            title: activityName
        }, {
            animate: false
        })
        setClicked(prev => !prev)
    }
    return(
        <button onClick={onLinkClick} {...props}>
            <Center>
                {clicked ? fill : outline}
            </Center>
        </button>
    )
}

export default function Navbar(){
    
    return(<Box as="div" position="absolute" bottom={0} display="flex" width="100%" height="60px">
        <Flex align="center" justify="space-around" direction="row" width="100%">
            <LinkItem fill={<AiFillHome/>} outline={<AiOutlineHome size={24}/>} activityName="Home"/>
            <LinkItem fill={<AiFillHome/>} outline={<AiOutlineHeart size={24}/>} activityName="Book"/>
            <LinkItem fill={<AiFillHome/>} outline={<RiSearch2Line size={24}/>} activityName="Home"/>
            <LinkItem fill={<AiFillHome/>} outline={<BsPeople size={24}/>} activityName="Home"/>
        </Flex>
    </Box>)
}
