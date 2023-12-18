import { useEffect, useReducer } from "react";
import { MesasResp } from "./useFetchMesas";
import { io } from "socket.io-client";

type Mesa = {
  id_mesa: number;
  nome: string;
  cor: string;
  texto: string;
};

type EditaMesaReducer = {
  action: "initial" | "edit";
  data: EditaMesa | MesasResp;
};

type EditaMesa = Omit<Mesa, "nome">;

export const useMesaObj = () => {
  const reducer = (state: Mesa[], { action, data }: EditaMesaReducer) => {
    if (action === "initial") {
      return (data as MesasResp).map((m) => ({
        cor: "white",
        texto: "",
        ...m,
      }));
    }

    return state.map((m) => {
      if (m.id_mesa === (data as EditaMesa).id_mesa) {
        return {
          ...m,
          ...data,
        };
      }

      return m;
    });
  };

  const [mesas, editaMesa] = useReducer(reducer, []);

  useEffect(() => {
    const socket = io("http://localhost:3340");

    socket.on("message", (message: string) => {
      console.log(message);
      const data = JSON.parse(message) as EditaMesa;

      editaMesa({ action: "edit", data });
    });
  }, []);

  return { mesas, editaMesa };
};
