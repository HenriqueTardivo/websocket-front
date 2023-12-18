import { Link, Stack, Text } from "@chakra-ui/react";

type Props = {
  tryAgain: () => void;
};

export const FetchError = ({ tryAgain }: Props) => (
  <Stack spacing={4}>
    <Text fontWeight={"bold"} fontSize={"large"}>
      Houve algum problema ao buscar os dados
    </Text>

    <Link onClick={tryAgain}>
      <Text fontSize={"medium"}>Tentar novamente </Text>
    </Link>
  </Stack>
);
