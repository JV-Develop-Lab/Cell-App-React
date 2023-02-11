import { ActivityComponentType } from "@stackflow/react";
import { useFlow } from "../stackflow";
import PageLayout from "../components/layouts/PageLayout";
import {Heading} from "@chakra-ui/react";

const Home: ActivityComponentType = () => {
    const { replace } = useFlow();
    
    const onClick = () => {
        replace("Article", {
            title: "Hello",
        },{
            animate: false
        });
    };
    
    return (
            <PageLayout>
                <Heading>Howday 👋 갈렙!</Heading>
                <button onClick={onClick}>Go to article page</button>
            </PageLayout>
    );
};

export default Home;
