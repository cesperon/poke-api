export interface pokeRegion {
  region_api_data: RegionTypes | null;
  region_name: string | null;
  region_pokemon: PokemonEntry[] | null;
  version: Region[] | null;
}

export interface RegionTypes {
  descriptions: Description[];
  id: number;
  is_main_series: boolean;
  name: string;
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: Region;
  version_groups: Region[];
}

export interface Description {
  description: string;
  language: Region;
}

export interface Region {
  name: string;
  url: string;
}

export interface Name {
  language: Region;
  name: string;
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: Region;
}

export enum RegionId {
  kanto = 2,
  original_johto,
  hoenn,
  original_sinnoh,
  extended_sinnoh,
  updated_johto,
  original_unova,
  updated_unova,
}
