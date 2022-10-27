import { Box, Center, HStack, SimpleGrid, Spacer, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import { Typewriter } from 'react-simple-typewriter';
import bg from "../images/bg-image.jpg";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Image } from '@chakra-ui/react'
import { AiFillInstagram } from "react-icons/ai";
import arrow from "../images/arrow.gif";
import print from "../images/print.png";
import creepyteller from "../images/back-creepy.png";
import atualizacao from "../images/atualizacao.png";
import gerador from "../images/gerador.png"
import "../styles/css.css";

export const AboutMe = () => {
	const [isLargerThan1016] = useMediaQuery('(max-width: 1016px)')
	return (
		<VStack w={"full"} bg={"black"}>
			<VStack w={"full"}>
				<VStack alignItems={"start"} w={"full"} h={"100vh"} backgroundImage={"https://wallpaper.dog/large/10957790.jpg"} className={"img-bg"}>
					<VStack mt={10} ml={10} w={"100px"} h={"60px"} >
						{/* <Text fontFamily={"Kaushan Script"} fontSize={"36px"} color={"white"}>Thislucasme</Text> */}
					</VStack>

					<Center w={"full"} h={"70vh"}>
						<VStack>
							<VStack h={"70px"}>
								<Center w={"full"}>
									{!isLargerThan1016 ?
										<Text className={"escrevendo"} style={{ fontSize: "100px", fontFamily: "Poppins", lineHeight: "46px", fontWeight: "600px", letterSpacing: "0.02em" }} fontWeight={"semibold"} color={"white"}>
											<Typewriter
												words={['Entreterimento', 'Downloads', 'Algo']}
												loop={true}
												cursor
												cursorStyle='_'
												typeSpeed={70}
												deleteSpeed={50}
												delaySpeed={1000}

											/>
										</Text>
										:
										<Text className={"escrevendo"} style={{ fontSize: "40px", fontFamily: "Poppins", lineHeight: "46px", fontWeight: "600px", letterSpacing: "0.02em" }} fontWeight={"semibold"} color={"white"}>
											<Typewriter
												words={['Developer', 'Studant', 'FullStack']}
												loop={5}
												cursor
												cursorStyle='_'
												typeSpeed={70}
												deleteSpeed={50}
												delaySpeed={1000}

											/>
										</Text>
									}
								</Center>
							</VStack>
							<VStack w={"400px"} pt={10}>
								<HStack color={"white"} spacing={5}>
									<VStack cursor={"pointer"}>
										<AiFillGithub size={"20px"} />
									</VStack>
									<VStack cursor={"pointer"}>
										<AiFillLinkedin size={"20px"} />
									</VStack>
									<VStack cursor={"pointer"}>
										<AiFillInstagram size={"20px"} />
									</VStack>

								</HStack>

							</VStack>
						</VStack>
					</Center>
					<Spacer />
					<Center w={"full"} pb={10}>
						<VStack cursor={"pointer"}>
							<Image src={arrow} boxSize={"24px"} />
						</VStack>
					</Center>
				</VStack>
				<VStack w={"full"} bg={"black"}>
					<VStack mt={10}>
						<Text fontFamily={"Kaushan Script"} fontSize={"36px"} letterSpacing={4} color={"white"}>Jogos</Text>
					</VStack>
					<SimpleGrid w={"90%"} py={10} columns={[1, null, 3]} spacing='40px'>
						<Box bg='gray.900' borderRadius={4} p={4}>
							<Image borderRadius={4} src={"https://cdn1.epicgames.com/offer/a0b8d4482f3d4f939f35f87a3f367865/FC_FC2_Store_Landscape_2560x1440_2560x1440-e94a6a2fa597ea3fe74932be67d62519"} />
							<br />
							<VStack spacing={5}>
								<Text className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "14px", letterSpacing: "0.02em" }} color={"white"}>Far cry 2</Text>
								<Text className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "12px", letterSpacing: "0.02em" }} color={"gray.300"}>Leitura de histórias de terror</Text>
								<Text bg={"whatsapp.700"} borderRadius={"3px"} p={2} className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "12px", letterSpacing: "0.02em" }} color={"gray.300"}>Google Plau</Text>
							</VStack>

						</Box>
						<Box bg='gray.900' borderRadius={4} p={4}>
							<Image borderRadius={4} src={atualizacao} />
							<br />
							<VStack spacing={5}>
								<Text className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "14px", letterSpacing: "0.02em" }} color={"white"}>Creepyteller</Text>
								<Text className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "12px", letterSpacing: "0.02em" }} color={"gray.300"}>Leitura de histórias de terror</Text>
								<Text textAlign={"center"} w={"100px"} bg={"yellow.700"} borderRadius={"3px"} p={2} className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "12px", letterSpacing: "0.02em" }} color={"gray.300"}>Privado</Text>
							</VStack>

						</Box>
						<Box bg='gray.900' borderRadius={4} p={4}>
							<Image borderRadius={4} src={gerador} />
							<br />
							<VStack spacing={5}>
								<Text className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "14px", letterSpacing: "0.02em" }} color={"white"}>Gerador imagem Clima tempo</Text>
								<Text className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "12px", letterSpacing: "0.02em" }} color={"gray.300"}>Api retorna um PNG estilizado.</Text>
								<Text textAlign={"center"} w={"100px"} bg={"whatsapp.700"} borderRadius={"3px"} p={2} className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "12px", letterSpacing: "0.02em" }} color={"gray.300"}>Github</Text>
							</VStack>
						</Box>
					</SimpleGrid>
					<VStack py={10} >
						<HStack color={"white"} spacing={5}>
							<VStack cursor={"pointer"}>
								<AiFillGithub size={"20px"} />
							</VStack>
							<VStack cursor={"pointer"}>
								<AiFillLinkedin size={"20px"} />
							</VStack>
							<VStack cursor={"pointer"}>
								<AiFillInstagram size={"20px"} />
							</VStack>
						</HStack>
						<Center pt={5} alignItems={"center"}>
							<Text textAlign={"center"} className={"escrevendo"} style={{ fontSize: "18px", fontFamily: "Poppins", lineHeight: "20px", letterSpacing: "0.02em" }} color={"white"}>© 2022 Lucas | Todos os direitos reservados</Text>
						</Center>
					</VStack>
				</VStack>
			</VStack >
		</VStack >

	);
}