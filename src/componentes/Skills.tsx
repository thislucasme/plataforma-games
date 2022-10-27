import { Heading, HStack, Image, Spacer, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineFacebook } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import MeRicked from "../images/skills.svg";
import "../styles/css.css";

export const Skills = () => {
	const [isLargerThan1016] = useMediaQuery('(max-width: 1016px)')
	return (
		<>
			{isLargerThan1016 ?
				<VStack w="full" pt="40px" >
					<VStack alignItems={"center"} px="6">
						<Heading py="10px">Skills</Heading>
						<Text color="gray.600" size="sm">My Techinical Skills</Text>
						<VStack>
							<Image w="400px" src={MeRicked} />
						</VStack>

						<Text pt="20px" letterSpacing={"1px"} pb={"10px"} color="gray.600" fontSize={"lg"} align={"justify"} lineHeight={6}>ㅤㅤMy name is Lucas Dias and I am 22 years old. I'm a web developer. With extensive experience in making and maintaining web pages, native android and Java. Acting with a focus on compliance with established criteria of excellence.
							Able to develop websites and applications using the best techniques and tools. </Text>

					</VStack>
					<Spacer />
					<HStack spacing={10} py={10}>
						<AiFillGithub cursor={"pointer"} className="github" size={"24px"} />
						<FaLinkedinIn cursor={"pointer"} className="linkedin" size={"24px"} />
						<AiOutlineFacebook cursor={"pointer"} className="facebook" size={"24px"} />
					</HStack>
				</VStack>
				:
				<HStack w="80%" pt="30px">
					<VStack spacing={10}>
						<AiFillGithub cursor={"pointer"} className="github" size={"24px"} />
						<FaLinkedinIn cursor={"pointer"} className="linkedin" size={"24px"} />
						<AiOutlineFacebook cursor={"pointer"} className="facebook" size={"24px"} />
					</VStack>
					<VStack alignItems={"start"} w="500px" px="50">
						<Heading py="10px">Skills</Heading>
						<Text color="gray.600" size="sm">My Techinical Skills</Text>
						<Text pt="20px" letterSpacing={"1px"} pb={"10px"} color="gray.600" fontSize={"lg"} align={"justify"} lineHeight={6}>
							ㅤㅤMy name is Lucas Dias and I am 22 years old.
							I'm a web developer. With extensive experience in making
							and maintaining web pages, native android and Java.
						</Text>
					</VStack>
					<VStack w="full">
						<HStack w="full">	<Text color="gray.600" size="sm">Reactjs</Text><Spacer />	<Text color="gray.600" size="sm">60%</Text></HStack>
						<VStack alignItems={"start"} w="full" h="10px" bg="gray.100">
							<VStack w="80%" h="10px" bg="#22C35E" borderTopRightRadius="5px" borderBottomRightRadius="5px">

							</VStack>
						</VStack>
						<HStack w="full">	<Text color="gray.600" size="sm">NestJs</Text><Spacer />	<Text color="gray.600" size="sm">55%</Text></HStack>
						<VStack alignItems={"start"} w="full" h="10px" bg="gray.100">
							<VStack w="80%" h="10px" bg="#22C35E" borderTopRightRadius="5px" borderBottomRightRadius="5px">

							</VStack>
						</VStack>
						<HStack w="full">	<Text color="gray.600" size="sm">Android Java</Text><Spacer />	<Text color="gray.600" size="sm">80%</Text></HStack>
						<VStack alignItems={"start"} w="full" h="10px" bg="gray.100">
							<VStack w="80%" h="10px" bg="#22C35E" borderTopRightRadius="5px" borderBottomRightRadius="5px">

							</VStack>
						</VStack>
					</VStack>
					<Spacer />

				</HStack>
			}
		</>

	);
}