import { useRef } from 'react';
import {HStack, Input} from "@chakra-ui/react";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {Todo} from "./useTodos.ts";
import axios from "axios";
import {Button} from "../../components/ui/button.tsx";

const TodoForm = () => {
    const queryClient = useQueryClient();
    const addTodo = useMutation({
        mutationFn: (todo: Todo) =>
            axios
                .post<Todo>('https://jsonplaceholder.typicode.com/todos', todo)
                .then(res => res.data),
        onSuccess: (savedTodo, newTodo) => {
            queryClient.setQueryData<Todo[]>(['todos'], todos => [savedTodo, ...(todos || [])])
            // queryClient.invalidateQueries({
            //     queryKey: ['todos']
            // })
        }
    });
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(ref.current && ref.current.value)
                addTodo.mutate({
                    id: 0,
                    title: ref.current?.value,
                    completed: false,
                    userId: 1
                })
        }}>
            <HStack paddingY={2}>
                <Input ref={ref} type="text" className="form-control"/>
                <Button disabled={addTodo.isPending} loading={addTodo.isPending} loadingText={'Adding'} type={"submit"}>
                    Add
                </Button>
            </HStack>
        </form>
    );
};

export default TodoForm;