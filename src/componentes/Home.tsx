import { Button, Heading, HStack, Image, Spacer, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { AiFillGithub, AiOutlineFacebook } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import MeRicked from "../images/mericked.png";
import "../styles/css.css";

export const Home = () => {
	const [isLargerThan1016] = useMediaQuery('(max-width: 1016px)')
	return (
		<>
			{isLargerThan1016 ?
				<VStack w="full" pt="40px">
					<VStack alignItems={"center"} px="6">
						<Heading py="10px">Hi, I am Lucas</Heading>
						<Text color="gray.600" size="sm">Fullstack developer</Text>
						<VStack>
							<Image bg="green.600" w="400px" style={{ borderRadius: "60% 30% 90% 90%" }} src={MeRicked} />
						</VStack>
						<Heading py="10px">About me</Heading>
						<Text pt="20px" letterSpacing={"1px"} pb={"10px"} color="gray.600" fontSize={"lg"} align={"justify"} lineHeight={6}>
							ㅤㅤMy name is Lucas Dias and I am 22 years old.
							I'm a web developer. With extensive experience in making
							and maintaining web pages, native android and Java.
						</Text>

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
						<Heading py="10px">Hi, I am Lucas</Heading>
						<Text color="gray.600" size="sm">Fullstack developer</Text>
						<Text as={"p"} py="30px" color="gray.600" fontSize={"lg"} align={"justify"} lineHeight={6}>
							ㅤㅤMy name is Lucas Dias and I am 22 years old.
							I'm a web developer. With extensive experience in making
							and maintaining web pages, native android and Java.
						</Text>
						<Button rightIcon={<BiMailSend size={"24px"} />} colorScheme={"whatsapp"}>Contact Me</Button>
					</VStack>
					<Spacer />
					<VStack>
						<Image w="300px" style={{ borderRadius: "60% 30% 90% 90%" }} src={MeRicked} />
					</VStack>
				</HStack>
			}
		</>

	);
}