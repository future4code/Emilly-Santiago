import axios from "axios";
import { type } from "os";

type Address = {
  logradouro: string;
  bairro: string;
  cidade: string;
  estado: string;
};

export const getAddressInfo = async (cep: string): Promise<Address> => {
  const response = await axios.get(`ttps://viacep.com.br/ws/${cep}/json/`);
  // o axios deixa a resposta dentro de Data
  return {
    logradouro: response.data.logradouro,
    bairro: response.data.bairro,
    cidade: response.data.localidade,
    estado: response.data.uf,
  };
};
