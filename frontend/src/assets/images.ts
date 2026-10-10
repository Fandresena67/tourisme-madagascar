// ---------------------------------------------------------------------------
// Registre central des images du site.
//
// Chaque entrée associe une clé (utilisée dans `src/data/*.ts` via le champ
// `image`) à un fichier local, un texte alternatif descriptif et le crédit
// photo (auteur + licence + source).
//
// Pour remplacer une image : déposez le nouveau fichier dans
// `src/assets/images/<categorie>/` et mettez à jour uniquement l'import
// et l'entrée correspondante ci-dessous. Aucun composant n'a besoin d'être
// modifié.
//
// Licences :
// - Wikimedia Commons : CC BY / CC BY-SA — attribution obligatoire
//   (affichée en légende discrète sur les pages détail).
// - Unsplash : Unsplash License — utilisation libre, attribution appréciée
//   (conservée ici par courtoisie).
// ---------------------------------------------------------------------------

import andasibe from './images/destinations/andasibe.jpg'
import anakao from './images/destinations/anakao.jpg'
import ankarafantsika from './images/destinations/ankarafantsika.jpg'
import antananarivo from './images/destinations/antananarivo.jpg'
import antsiranana from './images/destinations/antsiranana.jpg'
import antsirabe from './images/destinations/antsirabe.jpg'
import fianarantsoa from './images/destinations/fianarantsoa.jpg'
import foulpointe from './images/destinations/foulpointe.jpg'
import ifaty from './images/destinations/ifaty.jpg'
import isalo from './images/destinations/isalo.jpg'
import montagneAmbre from './images/destinations/montagne-ambre.jpg'
import morondava from './images/destinations/morondava.jpg'
import nosyBe from './images/destinations/nosy-be.jpg'
import nosyIranja from './images/destinations/nosy-iranja.jpg'
import nosyKomba from './images/destinations/nosy-komba.jpg'
import nosyTanikely from './images/destinations/nosy-tanikely.jpg'
import ramena from './images/destinations/ramena.jpg'
import ranomafana from './images/destinations/ranomafana.jpg'
import sainteMarie from './images/destinations/sainte-marie.jpg'
import toamasina from './images/destinations/toamasina.jpg'
import tsingyBemaraha from './images/destinations/tsingy-bemaraha.jpg'
import lagonBleu from './images/hotels/lagon-bleu.jpg'
import pavillonSainteMarie from './images/hotels/pavillon-sainte-marie.jpg'
import relaisBaobabs from './images/hotels/relais-baobabs.jpg'
import villaPlateaux from './images/hotels/villa-plateaux.jpg'
import coucherBaobabs from './images/activities/coucher-de-soleil-baobabs.jpg'
import randonneeAndasibe from './images/activities/randonnee-andasibe.jpg'
import plongeeNosyBe from './images/activities/plongee-nosy-be.jpg'
import baleinesSainteMarie from './images/activities/baleines-sainte-marie.jpg'
import visiteTana from './images/activities/visite-guidee-tana.jpg'
import pirogueIfaty from './images/activities/pirogue-lagon-ifaty.jpg'

export interface ImageEntry {
  src: string
  alt: string
  /** Attribution courte, ex. "Diego Delso, CC BY-SA 4.0, via Wikimedia Commons". */
  credit: string
  /** Page source du fichier (traçabilité de la licence). */
  sourceUrl: string
}

const images: Record<string, ImageEntry> = {
  'destination-nosy-be': {
    src: nosyBe,
    alt: "Plage d'Ampasipohy à Nosy Be : cocotier penché, sable et pirogues",
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Ampasipohy,_Nosy_Be,_Madagascar,_2025-09-21,_DD_17.jpg',
  },
  'destination-morondava': {
    src: morondava,
    alt: "Allée des Baobabs à Morondava au coucher du soleil",
    credit: 'Noah Grossenbacher, Unsplash License, via Unsplash',
    sourceUrl: 'https://unsplash.com/photos/MIwNopNvIGM',
  },
  'destination-antananarivo': {
    src: antananarivo,
    alt: "Lac Anosy et panorama d'Antananarivo, capitale des Hauts-Plateaux",
    credit: 'Sascha Grabow, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lake_Anosy,_Central_Antananarivo,_Capital_of_Madagascar,_Photo_by_Sascha_Grabow.jpg',
  },
  'destination-andasibe': {
    src: andasibe,
    alt: "Indri dans les arbres de la réserve d'Analamazaotra, près d'Andasibe",
    credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Indri_(Indri_indri).jpg',
  },
  'destination-sainte-marie': {
    src: sainteMarie,
    alt: "Plage de sable blanc de l'île aux Nattes, Sainte-Marie",
    credit: 'Anai171, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Plage_de_l%27ile_aux_Nattes,_Sainte-Marie,_Madagascar.jpg",
  },
  'destination-ifaty': {
    src: ifaty,
    alt: 'Coucher de soleil sur la plage et les pirogues à Ifaty',
    credit: 'Rod Waddington, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Sunset,_Ifaty,_Madagascar_(21796862822).jpg',
  },
  'destination-isalo': {
    src: isalo,
    alt: "Canyons et massif ruiniforme du parc national de l'Isalo",
    credit: 'Moongateclimber, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Isalo_canyons.jpg',
  },
  'destination-tsingy-bemaraha': {
    src: tsingyBemaraha,
    alt: 'Pics calcaires acérés des Tsingy de Bemaraha',
    credit: 'Cactus0625, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Relief_karstique,_Tsingy_de_Bemaraha,_Madagascar.jpg',
  },
  'destination-ranomafana': {
    src: ranomafana,
    alt: 'Rivière Namorona au cœur de la forêt humide de Ranomafana',
    credit: 'Smiley.toerist, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Namorona_River_in_Ranomafana_National_Park_2013_1.jpg',
  },
  'destination-antsirabe': {
    src: antsirabe,
    alt: 'Rue principale d’Antsirabe avec pousse-pousse colorés',
    credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Antsirabe_-_rue_principale02.JPG',
  },
  'destination-anakao': {
    src: anakao,
    alt: 'Lagon turquoise, pirogue et paillotes sur la plage d’Anakao',
    credit: 'Marie Salichon, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Anakao_South_of_Madagascar.jpg',
  },
  'destination-nosy-komba': {
    src: nosyKomba,
    alt: 'Village de pêcheurs, pirogue et cocotiers sur la plage de Nosy Komba',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Nosy_Komba,_Madagascar,_2025-09-12,_DD_48.jpg',
  },
  'destination-ramena': {
    src: ramena,
    alt: 'Plage de Ramena : ponton, sable et baigneurs face à la mer',
    credit: 'Chirocca77, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Plage_de_Ramena_Antsiranana_Madagascar_01.jpg',
  },
  'destination-foulpointe': {
    src: foulpointe,
    alt: 'Plage de Foulpointe : eau turquoise, pirogues et cocotiers',
    credit: 'Souvaroff, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Foulpointe.jpg',
  },
  'destination-fianarantsoa': {
    src: fianarantsoa,
    alt: 'Vieille ville de Fianarantsoa sur sa colline, églises et maisons anciennes',
    credit: 'HoneyGaLe, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Vue_globale_de_la_ville_Fianarantsoa_2.jpg',
  },
  'destination-antsiranana': {
    src: antsiranana,
    alt: "L'îlot du Pain de Sucre dans la baie de Diego-Suarez, près d'Antsiranana",
    credit: 'AngeN, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Le_pain_de_sucre_dans_la_baie_de_Diego_Suarez,_Madagascar.JPG',
  },
  'destination-toamasina': {
    src: toamasina,
    alt: 'Boulevard Labourdonnais à Toamasina, bordé de flamboyants en fleurs',
    credit: 'Privatemajory, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Boulevard_Labourdonnais_Toamasina.jpg',
  },
  'destination-montagne-ambre': {
    src: montagneAmbre,
    alt: "Cascade entourée de forêt humide dans le parc national de la Montagne d'Ambre",
    credit: 'LETCHY06, CC0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Cascade_%C3%A0_Montagne_d%E2%80%99ambre_Antsiranana.jpg',
  },
  'destination-ankarafantsika': {
    src: ankarafantsika,
    alt: "Lac Ravelobe bordé de forêt dans le parc national d'Ankarafantsika",
    credit: 'Botaurus, CC BY 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lake_Ravelobe,_Ankarafantsika_National_Park,_Madagascar.jpg',
  },
  'destination-nosy-iranja': {
    src: nosyIranja,
    alt: 'Plage de sable blanc, pirogues et eau turquoise à Nosy Iranja',
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Nosy_Iranja,_Madagascar,_2025-09-17,_DD_19.jpg',
  },
  'destination-nosy-tanikely': {
    src: nosyTanikely,
    alt: 'Phare historique de Nosy Tanikely au milieu de la végétation',
    credit: 'Hiroki Ogawa, CC BY 3.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Lighthouse_Nosy_Tanikely_Madagascar_-_panoramio.jpg',
  },
  'hotel-lagon-bleu': {
    src: lagonBleu,
    alt: "Vue aérienne d'un lodge de plage entre forêt et lagon turquoise, dans le nord-ouest de Madagascar",
    credit: 'Charles J. Sharp, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Anjajavy_Le_Lodge,_Madagascar.jpg',
  },
  'hotel-relais-baobabs': {
    src: relaisBaobabs,
    alt: "Lodge aux toits de chaume au bord de l'eau, sur la côte de Morondava",
    credit: 'Rudolphfurtado, CC BY 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Luxury_resort_along_Morondava_Fishing_village_coastline.jpg',
  },
  'hotel-villa-plateaux': {
    src: villaPlateaux,
    alt: "Bungalows d'une maison d'hôtes au pied des collines, à Miandrivazo sur les Hauts-Plateaux",
    credit: 'Bernard Gagnon, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lakana_Hotel_02.jpg',
  },
  'hotel-pavillon-sainte-marie': {
    src: pavillonSainteMarie,
    alt: "Piscine à débordement face à l'océan, palmiers et paillotes à Sainte-Marie",
    credit: 'Antony Stanley, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Princess_Bora_Lodge,_%C3%8Ele_Sainte-Marie_(3958615912).jpg',
  },
  'activity-coucher-baobabs': {
    src: coucherBaobabs,
    alt: "Silhouettes des baobabs de l'Allée des Baobabs au coucher du soleil, près de Morondava",
    credit: 'Zigomar, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Baobabs_Avenue_Sunset_1.jpg',
  },
  'activity-randonnee-andasibe': {
    src: randonneeAndasibe,
    alt: "Forêt humide et plan d'eau dans le parc national d'Andasibe-Mantadia",
    credit: 'Lodewicus de Honsvels, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Ansicht_Nationalpark_Andasibe-Mantadia_in_Madagaskar.jpg',
  },
  'activity-plongee-nosy-be': {
    src: plongeeNosyBe,
    alt: "Poisson-clown endémique dans son anémone, eaux de l'archipel de Nosy Be",
    credit: 'Diego Delso, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Pez_payaso_de_Madagascar_(Amphiprion_latifasciatus),_Nosy_Sakatia,_Madagascar,_2025-09-18,_DD_34.jpg',
  },
  'activity-baleines-sainte-marie': {
    src: baleinesSainteMarie,
    alt: 'Baleine à bosse en saut hors de l’eau au large de Sainte-Marie',
    credit: 'Sturm, CC BY-SA 2.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Baleine_%C3%A0_bosse,_Sainte_Marie,_Madagascar_(25980295042).jpg',
  },
  'activity-visite-tana': {
    src: visiteTana,
    alt: "Palais de la Reine (Rova de Manjakamiadana) sur les hauteurs d'Antananarivo",
    credit: 'Peacekeeper44, CC BY-SA 4.0, via Wikimedia Commons',
    sourceUrl:
      'https://commons.wikimedia.org/wiki/File:Rova_Manjakamiadana_Palais_de_la_Reine.jpg',
  },
  'activity-pirogue-ifaty': {
    src: pirogueIfaty,
    alt: 'Plage de Mangily près d’Ifaty : cocotiers, paillotes et embarcation face au lagon',
    credit: 'Bgag, CC BY-SA 3.0, via Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Ifaty_beach_Madagascar.jpg',
  },
}

export function resolveImage(key?: string): string | undefined {
  if (!key) return undefined
  return images[key]?.src
}

export function resolveImageAlt(key?: string): string | undefined {
  if (!key) return undefined
  return images[key]?.alt
}

export function resolveImageCredit(key?: string): string | undefined {
  if (!key) return undefined
  return images[key]?.credit
}

export interface ImageCreditEntry extends ImageEntry {
  key: string
}

// Liste de toutes les images référencées, pour la page des crédits photos.
// Ne modifie ni les crédits ni les sources : simple lecture du registre.
export function listImages(): ImageCreditEntry[] {
  return Object.entries(images).map(([key, entry]) => ({ key, ...entry }))
}
