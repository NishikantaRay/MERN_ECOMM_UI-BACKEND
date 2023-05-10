
const crypto = require("crypto")
const QRCode = require("qrcode")

var qrKey = 'oeqfe'
var qrSalt = 'salt'

export const qrHashFunction= async(ticketData) =>{
    var cryp = crypto.createHash("sha512");
    var text =
      qrKey +
      "|" +
      JSON.stringify(ticketData)
      "|" +
      qrSalt;
    console.log(text);
    cryp.update(text);
    var hash = cryp.digest("hex");
var QRCode = require('qrcode')
 let url = await QRCode.toDataURL(hash)
 return {url:url,hash:hash}
}

