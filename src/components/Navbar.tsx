import {Box, Button, Flex} from "@chakra-ui/react";
import {StarIcon} from "@chakra-ui/icons";
import {useFlow} from "../stackflow";


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
        <Flex >
                <Button onClick={onClick}>
                    <StarIcon boxSize={6}></StarIcon>
                </Button>
        </Flex>
    </Box>)
}
