import {Box, Button, Flex, Stack} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {useFlow} from "../stackflow";
import {AiOutlineHome, AiFillHome, AiOutlineHeart, AiFillHeart, RiSearch2Line, RiSearch2Fill, BsPeople, BsPeopleFill} from "react-icons/all";

export default function Navbar(){
    const { push } = useFlow();
    
    const onClick = () => {
        push("Article", {
            title: "Hello",
        },{
            animate: false
        });
    };
    
    return(<Box as="div" position="absolute" bottom={0}>
        <Stack direction={"row"} spacing={4} align={"center"} width={"100%"} height="60px">
            <Button onClick={onClick} variant={"ghost"}>
                <AiOutlineHome size={24}/>
            </Button>
            <Button onClick={onClick} variant={"ghost"}>
                <AiOutlineHeart size={24}/>
            </Button>
            <Button onClick={onClick} variant={"ghost"}>
                <RiSearch2Line size={24}/>
            </Button>
            <Button onClick={onClick} variant={"ghost"}>
                <BsPeople size={24}/>
            </Button>
        </Stack>
    </Box>)
}
