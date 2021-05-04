const express = require ("express");
const port = process.env.PORT || 5004;
const app = new express();
const nav = [
    {
        link:'/books',name:'Books'
    },
    {
        link:'/authors',name:'Authors'
    },
    {
        link:'/login',name:'Login'
    },
    {
        link:'/signup',name:'SignUp'
    },
    {
        link:'/newbook',name:'New book'
    }
];
const booksRouter = require('./src/routes/bookRoutes') (nav)
const authorsRouter = require('./src/routes/authorRoutes') (nav)
const loginRouter = require('./src/routes/loginRoutes') (nav)
const signupRouter = require('./src/routes/signupRoutes') (nav)
const newRouter = require('./src/routes/newRoutes') (nav)

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/newbook',newRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});



app.listen(port,()=>{console.log("Server Ready at " + port)});