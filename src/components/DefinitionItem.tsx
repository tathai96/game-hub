import {ReactNode} from "react";
import {Box, Heading} from "@chakra-ui/react";

interface DefinationItemProps {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: DefinationItemProps) => {

    return (
        <Box marginY={5}>
            <Heading as={'dt'} fontSize={'md'} color={'gray.600'}>
                {term}
            </Heading>
            <dd>
                {children}
            </dd>
        </Box>
    )
}

export default DefinitionItem