import { ActivityComponentType } from "@stackflow/react";
import PageLayout from "../components/layouts/PageLayout";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Center,
    Container,
    Flex,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

import word from '../assets/word.jpg';

const Home: ActivityComponentType = () => {
    
    return (
            <PageLayout>
                <Box as="header" p={6} bgColor="orange.50" display={"flex"}>
                    <Flex align={"center"} justify="space-between" width="100%">
                        <Box display="flex">
                            <Flex align={"start"} justify="center" direction="column">
                                <Heading size={"xl"}>빛이있으라 👐</Heading>
                                <Text size={"2xl"}>오늘의 말씀은 로마서 8장 28절입니다</Text>
                            </Flex>
                        </Box>
                        <Avatar name="Lofo" colorScheme={"cyan"}/>
                    </Flex>
                </Box>
                <Container as="section" py={6}>
                    <Card justify={"end"} direction={"column"}>
                        <CardBody >
                            <Image fit="fill" src={word} alt="2023년 2월 12일 말씀 이미지" borderRadius='lg'/>
                        </CardBody>
                        <CardFooter>
                            <Button>
                                <Text>말씀 들으러 가기</Text>
                            </Button>
                        </CardFooter>
                    </Card>
                </Container>
            </PageLayout>
    );
};

export default Home;
