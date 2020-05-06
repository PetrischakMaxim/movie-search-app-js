export default function getRandomCard() {
  const words =
    'tribe, adoption, corpse, biology, authorise, store, soft, continuous, month, deny, color-blind, voucher, forget, bracket, tear, flexible, family, percent, vat, chocolate, presence, stretch, pen, patient, open, miner, forge, mushroom, real, finance, country, snow, correction, ring, drop, abundant, definition, timetable, assessment, invite, popular, software, foreigner, road, glimpse, elephant, friendly, aloof, make, volcano';
  const wordsList = words.split(' ');
  const randomWord = Math.floor(Math.random() * wordsList.length);
  return wordsList[randomWord];
}
