import axios from "axios";
import { RegionTypes } from "@/types/pokeRegion.interface";

export async function getRegionPokemon(
  context: unknown,
  payload: string
): Promise<RegionTypes> {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokedex/${payload}`
  );
  return response.data;
}
