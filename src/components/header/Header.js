
import { Box } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

export default function Header(){
    return(
        <Box as="header" >
            <SearchBar/>
        </Box>
    )
}