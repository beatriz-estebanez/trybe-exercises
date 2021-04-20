function encode(stringEncode) {
  stringEncode = stringEncode.replace(/a/g, '1');
  stringEncode = stringEncode.replace(/e/g, '2');
  stringEncode = stringEncode.replace(/i/g, '3');
  stringEncode = stringEncode.replace(/o/g, '4');
  stringEncode = stringEncode.replace(/u/g, '5');

  return stringEncode;
}

function decode(stringDecode) {
  stringDecode = stringDecode.replace(/1/g, 'a');
  stringDecode = stringDecode.replace(/2/g, 'e');
  stringDecode = stringDecode.replace(/3/g, 'i');
  stringDecode = stringDecode.replace(/4/g, 'o');
  stringDecode = stringDecode.replace(/5/g, 'u');

  return stringDecode;
}

module.exports = { encode, decode };