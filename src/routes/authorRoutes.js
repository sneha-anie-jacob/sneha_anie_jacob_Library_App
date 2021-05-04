const express = require ("express");
const authorsRouter = express.Router();
function router(nav){

    var authors = [
        {
            author: 'Jane Austen',
            genre: 'Fiction',
            img: "jane.jpg",
            para:"Jane Austen was an English novelist known primarily for her six major novels, which interpret, critique and comment upon the British landed gentry at the end of the 18th century. Austen's plots often explore the dependence of women on marriage in the pursuit of favourable social standing and economic security. Her works critique the novels of sensibility of the second half of the 18th century and are part of the transition to 19th-century literary realism. Her use of biting irony, along with her realism, humour, and social commentary, have long earned her acclaim among critics, scholars, and popular audiences alike."
        },
    
        {
            author: 'Stephenie Meyer',
            genre: 'Drama',
            img: "sm.jpg",
            para:"Stephenie Meyer is an American novelist. She is best known for writing the vampire romance series Twilight, which has sold over 100 million copies, with translations into 37 different languages. Meyer was the bestselling author of 2008 and 2009 in the U.S., having sold over 29 million books in 2008, and 26.5 million in 2009. Meyer received the 2009 Children's Book of the Year award from the British Book Awards for Breaking Dawn, the Twilight series finale."
        },
    
        {
            author: 'J. K. Rowling',
            genre: 'Fiction',
            img: "jk.jpg",
            para:"Joanne Rowling better known by her pen name J. K. Rowling, is a British author, philanthropist, film producer, television producer, and screenwriter. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history. The books are the basis of a popular film series, over which Rowling had overall approval on the scripts and was a producer on the final films. She also writes crime fiction under the pen name Robert Galbraith."
        },
    
        {
            author: 'Paulo Coelho',
            genre: 'Adventure Fiction',
            img: "pc.jpg",
            para:"Paulo Coelho de Souza is a Brazilian lyricist and novelist, best known for his novel The Alchemist. In 2014, he uploaded his personal papers online to create a virtual Paulo Coelho Foundation."
        }
    ]
    
    authorsRouter.get('/',function(req,res){
        res.render("authors",
        {
            nav,
            title:'Library',
            authors
        });
    });
    
    
    authorsRouter.get('/:i',function(req,res){
        const i = req.params.i
        res.render('author',{
            nav,
            title:'Library',
            author: authors[i]
        });
    });

    return authorsRouter;
}


module.exports = router;