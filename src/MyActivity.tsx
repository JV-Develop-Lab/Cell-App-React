import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useFlow } from "./stackflow";
import PageLayout from "./layouts/PageLayout";

const MyActivity: ActivityComponentType = () => {
    const { push } = useFlow();
    
    const onClick = () => {
        push("Article", {
            title: "Hello",
        },{
            animate: false
        });
    };
    
    return (
        <AppScreen
            appBar={{
                title: "My Activity",
            }}
        >
            <div style={{height: "100vh"}}></div>
            <PageLayout>
                My Activity
                <button onClick={onClick}>Go to article page</button>
            </PageLayout>
        </AppScreen>
    );
};

export default MyActivity;
