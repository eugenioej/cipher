import CryptoJS from "crypto-js";

export const descifrar = (texto) => {
  var bytes = CryptoJS.AES.decrypt(texto, "Eugenio");
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

export const cifrar = (texto) => {
  var textoCifrado = CryptoJS.AES.encrypt(texto, "Eugenio").toString();
  return textoCifrado;
};
