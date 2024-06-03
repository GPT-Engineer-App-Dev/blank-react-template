import { Container, Text, VStack } from "@chakra-ui/react";

const About = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">About This App</Text>
        <Text>This is a simple React application with a responsive layout.</Text>
      </VStack>
    </Container>
  );
};

export default About;