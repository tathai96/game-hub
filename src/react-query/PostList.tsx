import usePosts from "./hooks/usePosts.ts";
// import {Box, createListCollection, Link, List, Spinner} from "@chakra-ui/react";
import {Box, Button, Link, List, Spinner} from "@chakra-ui/react";
import {useState} from "react";
// import {
//     SelectContent,
//     SelectItem,
//     SelectLabel,
//     SelectRoot,
//     SelectTrigger,
//     SelectValueText,
// } from "../components/ui/select";
// import {useState} from "react";

// const frameworks = createListCollection({
//     items: [
//         {label: "User 1", value: "1"},
//         {label: "User 2", value: "2"},
//         {label: "User 3", value: "3"},
//         {label: "User 4", value: "4"},
//     ],
// })

const PostList = () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    // const [userId, setUserId] = useState<string[]>()
    // const {data: posts, error, isLoading} = usePosts(userId);
    const {data: posts, error, isLoading} = usePosts({ page, pageSize });
    if (isLoading) return <Spinner/>

    if (error) return <p>{error.message}</p>;

    return (
        <>
            {/*<SelectRoot value={userId} collection={frameworks} marginY={3} onValueChange={(e) => {*/}
            {/*    setUserId(e.value);*/}
            {/*}}>*/}
            {/*    <SelectLabel>Select users</SelectLabel>*/}
            {/*    <SelectTrigger>*/}
            {/*        <SelectValueText placeholder="Select users"/>*/}
            {/*    </SelectTrigger>*/}
            {/*    <SelectContent>*/}
            {/*        {frameworks.items.map((user) => (*/}
            {/*            <SelectItem item={user} key={user.value}>*/}
            {/*                {user.label}*/}
            {/*            </SelectItem>*/}
            {/*        ))}*/}
            {/*    </SelectContent>*/}
            {/*</SelectRoot>*/}
            {/*Select a post to see its description*/}
            <List.Root paddingY={2} listStyle="none">
                {posts?.map((post) => (
                    <List.Item borderWidth={"1px"} padding={2} key={post.id}>
                        <Box >
                            {post.id} - <Link>{post.title}</Link>
                        </Box>
                    </List.Item>
                ))}
            </List.Root>
            <Button disabled={page===1} variant={"surface"} onClick={() => setPage(page-1)}>Previous</Button>
            <Button variant={"surface"} onClick={() => setPage(page+1)}>Next</Button>
        </>
    );
}

export default PostList;