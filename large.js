var express = require("express");
var bodyparser= require("body-parser");
 
var large= express();
large.use(bodyparser.urlencoded({extended: false}))
 
large.post('/largest', (req, res) => {
    var a =parseInt(req.body.geta);
    var b=parseInt(req.body.getb);
    var c= parseInt(req.body.getc);
    if(a>b && a>c)
    {
        var big= a;
        res.json( 
            {"largest":a}
            );
    }
    
else if (b>a && b>c)
{
    var big= b;
    res.json( 
        {"largest":b}
        );
}
else
{
    var big= c;
    res.json( 
        {"largest":c}
        );
}
    

});
large.listen(process.env.PORT|| 3000, () => {
    console.log("server started");
   });

