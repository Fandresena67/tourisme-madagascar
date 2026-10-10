// ---------------------------------------------------------------------------
// Logique de recherche centralisée (normalisation + correspondance slug/nom).
//
// Regroupe les variantes historiquement dupliquées dans Destinations,
// Activities et Reservation SANS changer leur comportement :
// - `normalizeText` : base commune (minuscules, sans accents, sans espaces
//   superflus) — comportement de Activities / Reservation ;
// - `normalizeSearchText` : base + apostrophes typographiques ramenées à
//   l'apostrophe droite — comportement de Destinations ;
// - `normalizeKey` : comparaison stricte insensible aux espaces,
//   apostrophes et tirets (slugs, noms, alias).
// ---------------------------------------------------------------------------

export function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export function normalizeSearchText(value: string): string {
  return normalizeText(value).replace(/[‘’‚‛]/g, "'")
}

export function normalizeKey(value: string): string {
  return normalizeText(value).replace(/[\s'’‘-]/g, '')
}

export interface SearchableItem {
  slug: string
  name: string
  aliases?: string[]
}

export function findBySlugOrName<T extends SearchableItem>(
  items: T[],
  param: string | null,
): T | undefined {
  if (!param || param.trim() === '') return undefined
  const query = normalizeKey(param)
  return items.find(
    (item) =>
      normalizeKey(item.slug) === query ||
      normalizeKey(item.name) === query ||
      (item.aliases ?? []).some((alias) => normalizeKey(alias) === query),
  )
}
