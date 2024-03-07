import React, { useState } from "react";
import { Box, VStack, HStack, Text, IconButton, useColorModeValue, Heading, useToast } from "@chakra-ui/react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const moods = ["happy", "energized", "tired", "anxious", "motivated"];

const MoodCard = ({ mood, onSwipe }) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={8} borderRadius="lg" boxShadow="md" bg={bgColor} textAlign="center" minW="250px">
      <Heading size="xl" mb={4}>
        {mood}
      </Heading>
      <HStack justify="space-around">
        <IconButton icon={<FaThumbsDown />} onClick={() => onSwipe(false)} aria-label="Swipe left" colorScheme="red" />
        <IconButton icon={<FaThumbsUp />} onClick={() => onSwipe(true)} aria-label="Swipe right" colorScheme="green" />
      </HStack>
    </Box>
  );
};

const Index = () => {
  const [currentMoodIndex, setCurrentMoodIndex] = useState(0);
  const toast = useToast();

  const handleSwipe = (isRight) => {
    if (isRight) {
      toast({
        title: `You're feeling ${moods[currentMoodIndex]}!`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
    setCurrentMoodIndex((prevIndex) => (prevIndex + 1) % moods.length);
  };

  return (
    <Box p={8}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Mood Swiper
        </Heading>
        <Text fontSize="xl">Swipe right if the mood matches how you feel!</Text>
        <MoodCard mood={moods[currentMoodIndex]} onSwipe={handleSwipe} />
      </VStack>
    </Box>
  );
};

export default Index;
