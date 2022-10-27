import { Button, Heading, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, useColorModeValue, useDisclosure, useMediaQuery, VStack } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";
import "../src/styles/css.css";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => {
  const corMaisEscura = useColorModeValue("gray.100", "#2A313D")
  const bgColor2 = useColorModeValue("white", "#1A202C")
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLargerThan1016] = useMediaQuery('(max-width: 1016px)')

  return (
    <>
      {
        isLargerThan1016 ?
          <VStack w="full" h="100vh" bg={corMaisEscura} overflowY={"scroll"}>
            <VStack bg={bgColor2} w="90%" my={5} pt={3} borderRadius="10px" >
              <HStack h={"100px"} w="80%" >
                <Heading id="ju" color="gray.600" size={"md"}>Lucas Silva</Heading>
                <Spacer />
                <ColorModeSwitcher justifySelf="flex-end" />
                < Button onClick={onOpen}><FaHamburger /></Button>
              </HStack>
              <Outlet />
            </VStack >
          </VStack >
          :
          <VStack w="full" h="100vh" bg={corMaisEscura}>
            <VStack bg={bgColor2} w="90%" h="100vh" m={10} borderRadius="10px" >
              <HStack h={"100px"} w="80%" >
                <Heading color="gray.600" size={"md"}>Lucas Silva</Heading>
                <Spacer />
                <Heading onClick={() => { navigate("home") }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"md"}>Home</Heading>
                <Heading onClick={() => { navigate("about") }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"md"}>About</Heading>
                <Heading onClick={() => { navigate("skills") }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"md"}>Skills</Heading>
                <Heading onClick={() => { navigate("services") }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"md"}>Services</Heading>
                <Heading onClick={() => { navigate("portifolio") }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"md"}>Portifólio</Heading>
                <ColorModeSwitcher justifySelf="flex-end" />
              </HStack>
              <Outlet />
            </VStack >
          </VStack >
      }

      <Modal onClose={onClose} size={"full"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack alignItems={"start"} h={"100px"} w="80%" spacing={10}>

              <Spacer />
              <Heading onClick={() => { navigate("home"); onClose(); }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"lg"}>Home</Heading>
              <Heading onClick={() => { navigate("about"); onClose(); }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"lg"}>About</Heading>
              <Heading onClick={() => { navigate("skills"); onClose(); }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"lg"}>Skills</Heading>
              <Heading onClick={() => { navigate("services"); onClose(); }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"lg"}>Services</Heading>
              <Heading onClick={() => { navigate("po  rtifolio"); onClose(); }} className="menu" color="gray.600" px={5} cursor={"pointer"} size={"lg"}>Portifólio</Heading>
              <ColorModeSwitcher justifySelf="flex-end" />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
