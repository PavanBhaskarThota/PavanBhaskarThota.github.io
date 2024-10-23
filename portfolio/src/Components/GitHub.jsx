import React, { useEffect } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

import Aos from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";

export const GitHub = () => {
  const { theme } = useContext(ThemeContext);
  const selectLastHalfYear = (contributions) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const monthsToShow = 6;

    let startMonth = currentMonth - monthsToShow + 1;
    let startYear = currentYear;

    if (startMonth < 0) {
      startMonth += 12;
      startYear -= 1;
    }

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const activityYear = date.getFullYear();
      const activityMonth = date.getMonth();
      if (
        (activityYear === startYear && activityMonth >= startMonth) ||
        (activityYear === currentYear && activityMonth <= currentMonth)
      ) {
        return true;
      } else {
        return false;
      }
    });
  };

  useEffect(() => {
    Aos.init(); // Initialize AOS
  }, []);

  const calendarStyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "lg",
    margin: "auto",
    padding: "10px",
  };

  return (
    <Box
      width="80%"
      display="flex"
      flexDirection="column"
      margin="auto"
      mt={"20px"}
      color={theme === "dark" ? "white" : "black"}
    >
      <Text
        fontSize={"3xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="700"
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
          border={theme === "dark" ? "1px solid white" : "1px solid #06113C"}
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          // _hover={{
          //   bg: "#0a194e",
          //   color: "#E6E7EB",
          // }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <GitHubCalendar
            style={calendarStyle}
            username="PavanBhaskarThota"
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
          border={theme === "dark" ? "1px solid white" : "1px solid #06113C"}
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          // _hover={{
          //   bg: "#06113C",
          //   color: "#E6E7EB",
          // }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
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
          border={theme === "dark" ? "1px solid white" : "1px solid #06113C"}
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          // _hover={{
          //   bg: "#06113C",
          //   color: "#E6E7EB",
          // }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=PavanBhaskarThota&theme=transparent&hide_border=true"
            width="90%"
          />
        </Box>

        <Box
          maxW={"300px"}
          border={theme === "dark" ? "1px solid white" : "1px solid #06113C"}
          borderRadius="lg"
          h="170px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          // _hover={{
          //   bg: "#06113C",
          //   color: "#E6E7EB",
          // }}
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="700"
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
