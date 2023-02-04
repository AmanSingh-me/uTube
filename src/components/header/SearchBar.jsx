import { Box, Flex, Input, Tooltip, IconButton } from "@chakra-ui/react";
import { FaSistrix, FaMicrophone } from "react-icons/fa"


export default function SearchBar(){
    return(
        <Box>
            <Flex>
                <Input variant='outline' _hover={{borderColor: ""}} borderColor='black.500' textColor='white.900' bg='black.700' placeholder='Search...' roundedLeft='full' _focus={{background: "black.600"}} />

                <Tooltip label='Search' bg='black.500' fontSize='md'>
                    <IconButton aria-label='Search database' rounded='none' roundedRight='full' colorScheme='black' icon={<FaSistrix />} px={[3, 5]} fontSize='xl' bg='black.500'
                     _hover={{bg: 'black.500'}} />
                </Tooltip>
            </Flex>
        </Box>
    )
}