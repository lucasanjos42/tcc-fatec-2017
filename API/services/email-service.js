var config = require('../config');
var helper = require('sendgrid').mail;
var sg = require('sendgrid')(config.SENDGRID_APIKEY);

function send(from_email, to_email, type, var1, var2, var3) {
    from_email = new helper.Email(from_email);
    to_email = new helper.Email(to_email);

    if (type == 1) { // mandar email de nova compra para o cliente

        subject = 'Pedido Teia Store!';

        text = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head> <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1" /> <title>Sunday Confirm Email</title> <style type="text/css"> img { max-width: 600px; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } a img { border: none; } table { border-collapse: collapse !important; } #outlook a { padding: 0; } .ReadMsgBody { width: 100%; } .ExternalClass { width: 100%; } .backgroundTable { margin: 0 auto; padding: 0; width: 100%; } table td { border-collapse: collapse; } .ExternalClass * { line-height: 115%; } td { font-family: Arial, sans-serif; color: #6f6f6f; } body { -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100%; height: 100%; color: #6f6f6f; font-weight: 400; font-size: 18px; } h1 { margin: 10px 0; } a { color: #27aa90; text-decoration: none; } .force-full-width { width: 100% !important; } .force-width-80 { width: 80% !important; } .body-padding { padding: 0 75px; } .mobile-align { text-align: right; } </style> <style type="text/css" media="screen"> @media screen { @import url(http://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,900); /* Thanks Outlook 2013! */ * { font-family: "Source Sans Pro", "Helvetica Neue", "Arial", "sans-serif" !important; } .w280 { width: 280px !important; } } </style> <style type="text/css" media="only screen and (max-width: 480px)"> /* Mobile styles */ @media only screen and (max-width: 480px) { table[class*="w320"] { width: 320px !important; } td[class*="w320"] { width: 280px !important; padding-left: 20px !important; padding-right: 20px !important; } img[class*="w320"] { width: 250px !important; height: 67px !important; } td[class*="mobile-spacing"] { padding-top: 10px !important; padding-bottom: 10px !important; } *[class*="mobile-hide"] { display: none !important; } *[class*="mobile-br"] { font-size: 12px !important; } td[class*="mobile-w20"] { width: 20px !important; } img[class*="mobile-w20"] { width: 20px !important; } td[class*="mobile-center"] { text-align: center !important; } table[class*="w100p"] { width: 100% !important; } td[class*="activate-now"] { padding-right: 0 !important; padding-top: 20px !important; } td[class*="mobile-block"] { display: block !important; } td[class*="mobile-align"] { text-align: left !important; } } </style></head><body class="body" style="padding:0; margin:0; display:block; background:#eeebeb; -webkit-text-size-adjust:none;" bgcolor="#eeebeb"> <table align="center" cellpadding="0" cellspacing="0" width="100%"> <tr> <td align="center" valign="top" style="background-color:#eeebeb" width="100%"> <center> <table cellspacing="0" cellpadding="0" width="600" class="w320"> <tr> <td align="center" valign="top"> <table style="margin:0 auto;" cellspacing="0" cellpadding="0" width="100%"> <tr> <td style="text-align: center;"> <!-- <a href="#"><img class="w320" width="311" height="83" src="https://www.filepicker.io/api/file/HotdLrI8SCq4ZW3NRAUh" alt="company logo" /></a> --> <br /> <br /> </td> </tr> </table> <table cellspacing="0" cellpadding="0" class="force-full-width" style="background-color:#3bcdb0;"> <tr> <td style="background-color:#3bcdb0;"> <table cellspacing="0" cellpadding="0" class="force-full-width"> <tr> <td style="font-size:40px; font-weight: 600; color: #ffffff; text-align:center;" class="mobile-spacing"> <div class="mobile-br">&nbsp;</div> Pedido Realizado! <br/> </td> </tr> <tr> <td style="font-size:24px; text-align:center; padding: 0 75px; color: #6f6f6f;" class="w320 mobile-spacing"> Nós aqui da Teia Store gostaríamos de te avisar que seu pedido foi realizado com sucesso! </td> </tr> </table> <table cellspacing="0" cellpadding="0" width="100%"> <tr> <td> <img src="https://www.filepicker.io/api/file/4BgENLefRVCrgMGTAENj" style="max-width:100%; display:block;"> </td> </tr> </table> </td> </tr> </table> <table cellspacing="0" cellpadding="0" class="force-full-width" bgcolor="#ffffff"> <tr> <td style="background-color:#ffffff; padding-top: 15px;"> <center> <table style="margin:0 auto;" cellspacing="0" cellpadding="0" class="force-width-80"> <tr> <td style="text-align:left;"> <br> <strong>Informações:</strong> <br /> <br> Nome: ' + var1 + '<br> Valor: R$ ' + var2 + ',00 <br> Data: ' + var3 + '</td> </tr> </table> <table style="margin: 0 auto;" cellspacing="0" cellpadding="0" class="force-width-80"> <tr> <td style="text-align: left;"> <br> Agradecemos a preferência de comprar conosco! <br> <br> Teia Store (: </td> </tr> </table> </center> <table style="margin:0 auto;" cellspacing="0" cellpadding="10" width="100%"> <tr> <td style="text-align:center; margin:0 auto;"> <br> <div> </div> <br> </td> </tr> </table> <table cellspacing="0" cellpadding="0" bgcolor="#363636" class="force-full-width"> <tr> <td style="background-color:#363636; text-align:center;"> <br> <br> <img width="62" height="56" img src="https://www.filepicker.io/api/file/FjkhDKXsTFyaHnXhhBCw"> <img width="68" height="56" src="https://www.filepicker.io/api/file/W6gXqm5BRL6qSvQRcI7u"> <img width="61" height="56" src="https://www.filepicker.io/api/file/eV9YfQkBTiaOu9PA9gxv"> <br> <br> </td> </tr> <tr> <td style="color:#f0f0f0; font-size: 14px; text-align:center; padding-bottom:4px;"> Copyright © Teia Store 2016 </td> </tr> <!-- <tr> <td style="color:#27aa90; font-size: 14px; text-align:center;"> <a href="#">View in browser</a> | <a href="#">Contact</a> | <a href="#">Unsubscribe</a> </td> </tr> --> <tr> <td style="font-size:12px;"> &nbsp; </td> </tr> </table> </td> </tr> </table> </td> </tr> </table> </center> </td> </tr> </table></body></html>';

        content = new helper.Content('text/html', text);

    }

    var mail = new helper.Mail(from_email, subject, to_email, content);

    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(err, res) {
        if (err)
            console.log('Erro: ' + err);
        if (res)
            console.log('Email enviado!');
    });
}

module.exports = {
    send: send
};
