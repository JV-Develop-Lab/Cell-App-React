import { ActivityComponentType } from "@stackflow/react";
import PageLayout from "../components/layouts/PageLayout";
import {Heading} from "@chakra-ui/react";

const Home: ActivityComponentType = () => {
    
    return (
            <PageLayout>
                <Heading>Howday 👋 갈렙!</Heading>
            </PageLayout>
    );
};

export default Home;
