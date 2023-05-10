var axios = require("axios")
var qs = require("qs")
export const urlSortner =async(url)=>{
    
        var data = qs.stringify({
            'secretKey': 'noMoreBitLy',
            'link': `https://portal.dev.bemc.teceads.co.in/${url}`
          });
          var config = {
            method: 'post',
            url: 'https://t12.in/api/getShortLink',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          let responded= await axios(config)
           console.log(responded.data)
          return responded.data.link

    
}

