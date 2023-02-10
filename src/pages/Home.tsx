import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "../stackflow";
import PageLayout from "../components/layouts/PageLayout";
import {Heading} from "@chakra-ui/react";

const Home: ActivityComponentType = () => {
    const { push } = useFlow();
    
    const onClick = () => {
        push("Article", {
            title: "Hello",
        },{
            animate: false
        });
    };
    
    return (
        <AppScreen>
            <PageLayout>
                <Heading>Howday 👋 갈렙!</Heading>
                <button onClick={onClick}>Go to article page</button>
            </PageLayout>
        </AppScreen>
    );
};

export default Home;
