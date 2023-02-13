import { ActivityComponentType } from "@stackflow/react";
import PageLayout from "../components/layouts/PageLayout";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter, CardHeader,
    Container,
    Flex,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";

import word from '../assets/word.jpg';
import logo from '../assets/jesusvaillage__logo.png';
import lamp from'../assets/lamp.png';
import vector from'../assets/vector.png';

const Home: ActivityComponentType = () => {
    
    return (
            <PageLayout>
                <Box as="header" p={4} display={"flex"}>
                    <Flex align={"center"} justify="space-between" width="100%">
                        <Image src={logo} borderRadius={2}/>
                        <Box display="flex" width={"100%"} ml={4}>
                            <Flex align={"start"} justify="space-between" direction="row" width={"100%"}>
                                <Heading size={"xl"}>JesusVillage</Heading>
                                <Button outline={"ghost"} colorScheme={"whiteAlpha"}>
                                    <Image src={lamp}/>
                                </Button>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Container as="section" py={4}>
                    <Card justify={"end"} direction={"column"}>
                        <CardBody p={0}>
                            <Image fit="fill" src={word} alt="2023년 2월 12일 말씀 이미지" borderRadius='lg'/>
                        </CardBody>
                        <CardFooter p={2}>
                            <Button outline={"ghost"} backgroundColor={"whiteAlpha.50"} width={"100%"}>
                                <Box display={"flex"} width={"100%"} p={0}>
                                    <Flex direction={"row"} align={"center"} justify={"space-between"} width={"100%"}>
                                        <Text>새로운 소식을 만나보세요</Text>
                                        <Image src={vector}/>
                                    </Flex>
                                </Box>
                            </Button>
                        </CardFooter>
                    </Card>
                </Container>
                <Container as="section" py={4}>
                    <Card justify={"end"} direction={"column"} backgroundColor={"orange.400"} color={"white"}>
                        <CardHeader p={2}>
                            <Box display={"flex"}>
                                <Flex direction={"row"} align={"center"} gap={2}>
                                    <Heading as="h2" size={"lg"}>QT</Heading>
                                    <Text>2월 13일</Text>
                                </Flex>
                            </Box>
                        </CardHeader>
                        <CardBody p={2}>
                            <Box>
                                <Flex align={"center"} justify={"space-between"}>
                                    <Box>
                                        <Flex direction={"column"} align={"start"}>
                                            <Heading as={"h3"} size={"lg"}>제목: 느헤미야의 기도</Heading>
                                            <Text>에스더 4장 23절</Text>
                                        </Flex>
                                    </Box>
                                    <Heading as={"h3"} size={"md"}>남건영 부목사</Heading>
                                </Flex>
                            </Box>
                        </CardBody>
                        <CardFooter p={2}>
                            <Button outline={"ghost"} backgroundColor={"white"} width={"100%"} color="black">
                                <Box display={"flex"} width={"100%"} p={0}>
                                    <Flex direction={"row"} align={"center"} justify={"space-between"} width={"100%"}>
                                        <Text>QT 하러가기</Text>
                                        <Image src={vector}/>
                                    </Flex>
                                </Box>
                            </Button>
                        </CardFooter>
                    </Card>
                </Container>
            </PageLayout>
    );
};

export default Home;
