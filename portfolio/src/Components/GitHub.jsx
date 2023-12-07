import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

export const GitHub = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const calendarStyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "lg",
    margin: "auto",
    padding: "10px",
  };

  return (
    <Box width="80%" display="flex" flexDirection="column" margin="auto">
      <Text
        fontSize={"3xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
      >
        GitHub Stats
      </Text>

      <Flex
        justifyContent="center"
        alignItems="center"
        margin="auto"
        gap={10}
        direction={{ base: "column", lg: "row" }}
      >
        <Box
          maxW={"300px"}
          border="1px solid #06113C"
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#0a194e",
            color: "#E6E7EB",
          }}
        >
          <GitHubCalendar
            style={calendarStyle}
            username="Leeladhar206"
            blockSize={9}
            hideColorLegend
            transformData={selectLastHalfYear}
            labels={{
              totalCount: "{{count}} contributions in the last half year",
            }}
            className="react-activity-calendar"
          />
        </Box>
        <Box
          maxW={"300px"}
          border="1px solid #06113C"
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
          }}
        >
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=PavanBhaskarThota&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
            width="90%"
          />
        </Box>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        margin="auto"
        gap={10}
        direction={{ base: "column", lg: "row" }}
        mt={10}
      >
        <Box
          maxW={"300px"}
          border="1px solid #06113C"
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
          }}
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=PavanBhaskarThota&theme=transparent&hide_border=true"
            width="90%"
          />
        </Box>

        <Box
          maxW={"300px"}
          border="1px solid #06113C"
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
          }}
        >
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=PavanBhaskarThota&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
          />
        </Box>
      </Flex>
    </Box>
  );
};
