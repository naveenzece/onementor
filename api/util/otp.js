const crypto = require('crypto');

function generateOtpDigits(length = 6) {
  // generate random integer and zero-pad
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += Math.floor(Math.random() * 10).toString();
  }
  return otp;
}

// more secure option using crypto.randomInt (Node >= 14)
function generateOtpSecure(length = 6) {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += crypto.randomInt(0, 10).toString();
  }
  return s;
}

module.exports = { generateOtpDigits, generateOtpSecure };
