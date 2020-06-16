function checkStringAgainstNumber(string, num) {
   if (string.length > num) {
      return true;
   } else {
      return false;
   }
}

const MAX_CARD_CHARACTERS = 240;

export { checkStringAgainstNumber, MAX_CARD_CHARACTERS };
