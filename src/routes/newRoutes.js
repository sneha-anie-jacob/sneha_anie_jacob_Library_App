const express = require('express');
const newRouter = express.Router();
function router(nav){
newRouter.get('/',function(req,res){
    res.render("newbook",{
        nav,
        title:'Library'
    });
});

 return newRouter;
}
module.exports=router;