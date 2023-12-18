"use client";

import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { FetchError } from "@components/components/fetch-error";
import { Mesa } from "@components/components/mesa";
import { NotFound } from "@components/components/not-found";
import { useFetchMesas } from "@components/hooks/useFetchMesas";
import { useMesaObj } from "@components/hooks/useMesaObj";
import { useEffect } from "react";

export default function Home() {
  const { isLoading, data, isError, refetch } = useFetchMesas();

  const { mesas, editaMesa } = useMesaObj();

  useEffect(() => {
    if (data && data.length > 0) editaMesa({ action: "initial", data });
  }, [data]);

  return (
    <Center h={"100vh"} w={"100vw"}>
      {(() => {
        if (isLoading) {
          return <Spinner color="red.500" />;
        }

        if (isError) {
          return <FetchError tryAgain={refetch} />;
        }

        if (mesas && mesas.length === 0) {
          return <NotFound />;
        }

        return (
          <SimpleGrid columns={4} spacing={12}>
            {mesas?.map(({ cor, nome, texto, id_mesa }) => (
              <Mesa key={id_mesa} cor={cor} nome={nome} texto={texto} />
            ))}
          </SimpleGrid>
        );
      })()}
    </Center>
  );
}
