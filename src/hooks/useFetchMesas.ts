import { useQuery } from "@tanstack/react-query";
import httpApi from "../server";

export type MesasResp = Array<{
  id_mesa: number;
  nome: string;
  criadaEm: Date;
}>;

export const useFetchMesas = () => {
  const result = useQuery({
    queryKey: ["mesas"],
    queryFn: async () => {
      const { data } = await httpApi.get<MesasResp>("mesa");

      return data;
    },
  });

  return result;
};
