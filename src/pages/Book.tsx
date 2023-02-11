import { ActivityComponentType } from "@stackflow/react";
import { useStepFlow } from "../stackflow";
import {Box} from "@chakra-ui/react";
import PageLayout from "../components/layouts/PageLayout";

type ArticleParams = {
    title: string;
};
const Book: ActivityComponentType<ArticleParams> = ({ params }) => {
    // 타입 안정성을 위해 현재 액티비티의 이름을 넣어줘요
    const { stepPush } = useStepFlow("Article");
    
    const onNextClick = () => {
        // `stepPush()`을 호출하면 params.title이 변경돼요.
        stepPush({
            title: "Next Title",
        });
    };
    
    return (
        <PageLayout>
            <Box height="100%">
                <h1>{params.title}</h1>
                <button onClick={onNextClick}>next</button>
            </Box>
            </PageLayout>
    );
};

export default Book;
