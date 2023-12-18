import { Flex, Stack, Text } from "@chakra-ui/react";

type MesaProps = { nome: string; cor: string; texto: string };

export const Mesa = (props: MesaProps) => {
  const { nome, cor, texto } = props;

  const backgroundColor =
    {
      red: "red.500",
      green: "green.200",
      blue: "blue.200",
      black: "black",
      white: "white",
      pink: "pink.200",
    }[cor] || "white";

  return (
    <Stack
      p={"10px"}
      w={"250px"}
      h={"150px"}
      bg={backgroundColor}
      borderRadius={"10px"}
      borderWidth={"1px"}
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
      borderColor={"gray.200"}
    >
      <Flex w={"100%"} justifyContent={"flex-start"}>
        <Text fontSize={"2xl"}>{nome}</Text>
      </Flex>

      <Text fontSize={"md"}>{texto}</Text>
    </Stack>
  );
};
