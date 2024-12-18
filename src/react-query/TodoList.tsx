import {Box, Link, List, Spinner} from "@chakra-ui/react";
import useTodos from "./hooks/useTodos.ts";

const TodoList = () => {

    const {data: todos, error, isLoading} = useTodos();

    if(isLoading) return <Spinner />

    if (error) return <p>{error.message}</p>;

    return (
        <List.Root paddingY={2} listStyle="none">
            {todos?.map((todo) => (
                <List.Item borderWidth={"1px"} padding={2} key={todo.id}>
                    <Box >
                        {todo.id} - <Link>{todo.title}</Link>
                    </Box>
                </List.Item>
            ))}
        </List.Root>
    );
};

export default TodoList;