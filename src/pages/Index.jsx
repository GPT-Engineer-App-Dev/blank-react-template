import { Container, Text, VStack, Box, Flex, Spacer, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bg} color={color} minHeight="100vh">
      <Flex as="nav" bg="teal.500" color="white" padding="1.5rem">
        <Box fontWeight="bold" fontSize="xl">
          MyApp
        </Box>
        <Spacer />
        <Box>
          <Button as={Link} to="/" variant="ghost" color="white" mr={4}>
            Home
          </Button>
          <Button as={Link} to="/about" variant="ghost" color="white" mr={4}>
            About
          </Button>
          <Button onClick={toggleColorMode} variant="ghost" color="white">
            {colorMode === "light" ? <FaMoon /> : <FaSun />}
          </Button>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" py={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is a basic structure of a React app with Chakra UI.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;