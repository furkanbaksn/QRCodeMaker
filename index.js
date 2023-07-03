const qr = require("qrcode");
let data = {
    "name" : "Cio Büfe",
    "email" : "abc@gmail.com",
    "gender" : "male",
    "id" : 123
};
let stJson = JSON.stringify(data);
// qr.toString(stJson,{type:"terminal"},function(err,code)
// {
//     if(err) console.log("error");
//     console.log(code);
// });
qr.toDataURL(stJson,cfunction(err,code)
{
    if(err) console.log("error");
    console.log(code);
});