const express = require ("express");
const booksRouter = express.Router();
function router(nav){

    var books = [
        {
            title: 'Pride and Prejudice',
            author: 'Jane Austen',
            genre: 'Fiction',
            img: "pap.jpg",
            para:"Pride and Prejudice, romantic novel by Jane Austen, published anonymously in three volumes in 1813. A classic of English literature, written with incisive wit and superb character delineation, it centres on the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner."
            
        },
    
        {
            title: 'Twilight',
            author: 'Stephenie Meyer',
            genre: 'Drama',
            img: "twilight.jpg",
            para:"Twilight Saga, series of vampire-themed novels for teenagers written by American author Stephenie Meyer. The Twilight Saga includes four titles: Twilight (2005; film 2008), New Moon (2006; film 2009), Eclipse (2007; film 2010), and Breaking Dawn (2008; film part 1, 2011, part 2, 2012). The series tells the story—fraught with danger, suspense, and searing passion—of teenager Bella Swan and her vampire boyfriend, Edward Cullen."
        },
    
        {
            title: 'Harry Potter',
            author: 'J. K. Rowling',
            genre: 'Fiction',
            img: "harry potter.jpg",
            para:"Harry Potter, fictional character, a boy wizard created by British author J.K. Rowling. His coming-of-age exploits were the subject of seven enormously popular novels (1997–2007), which were adapted into eight films (2001–11); a play and a book of its script appeared in 2016."
        },
    
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Adventure Fiction',
            img: "alchemist.png",
            para:"The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning."
        }
    ]
    
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,
            title:'Library',
            books
        });
    });
    
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
            nav,
            title:'Library',
            book: books[id]
        });
    });

    return booksRouter;
}


module.exports = router;