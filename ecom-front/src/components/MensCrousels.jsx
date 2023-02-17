import React, { useEffect, useState } from 'react';
import { Box, Flex, HStack, Image, Stack, Text } from '@chakra-ui/react';
const Crouserl = () => {
  const slides = [
    {
      img: 'https://i.pinimg.com/originals/fd/1e/cc/fd1ecc7f6d8b956809ee7e5c055cdf9b.jpg',
    },
    {
      img: 'https://i.pinimg.com/originals/6f/66/29/6f66290a7db1fb8b61ff90529435d5be.jpg',
    },
    {
      img: 'https://pbs.twimg.com/media/EYrF2KZUEAEHURE.jpg',
    },
    {
      img: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/87495881231087.5cf900ed157f2.jpg',
    },
    {
      img: 'https://d1fv2cu4wmu6en.cloudfront.net/uploads/blog-media/2021-07-05/277/featured-277.jpg',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = 'right';
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === 'left' ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
  return (
    <>
      <Flex
        w="100%"
        bg="#edf3f8"
        _dark={{
          bg: '#3e3e3e',
        }}
        // p={10}
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Flex w="full" overflow="hidden" pt={'130px'}>
          <Flex
            pos="relative"
            h="400px"
            w="full"
            height={'100vh'}
            {...carouselStyle}
          >
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Text
                  color="white"
                  fontSize="xs"
                  p="8px 12px"
                  pos="absolute"
                  top="0"
                  whiteSpace="nowrap"
                >
                  {sid + 1} / {slidesCount}
                </Text>
                <Image
                  src={slide.img}
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </>
    // <Flex
    //   w="full"
    //   bg="#edf3f8"
    //   _dark={{
    //     bg: '#3e3e3e',
    //   }}
    //   // p={10}
    //   height="100vh"
    //   alignItems="center"
    //   justifyContent="center"
    // >
    //   <Flex w="full" overflow="hidden">
    //     <Flex
    //       // pos="relative"
    //       // h="400px"
    //       w="full"
    //       {...carouselStyle}
    //       height="100vh"
    //     >
    //       {slides.map((slide, sid) => (
    //         <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
    //           <Text
    //             color="white"
    //             fontSize="xs"
    //             p="8px 12px"
    //             pos="absolute"
    //             top="0"
    //             whiteSpace="nowrap"
    //           >
    //             {sid + 1} / {slidesCount}
    //           </Text>
    //           <Image
    //             mt="50px"
    //             src={slide.img}
    //             alt="carousel image"
    //             boxSize="full"
    //             backgroundSize="cover"
    //           />
    //         </Box>
    //       ))}
    //     </Flex>
    //   </Flex>
    // </Flex>
  );
};
export default Crouserl;
