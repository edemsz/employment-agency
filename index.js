/*
Routing
    Cégek esetén:
    GET /companies -> összes cég lekérése
    GET /companies/new -> új cég felvételére form
    POST /companies/new -> új cég felvételére végpont, 
        ide kell küldeni a felvevendő cég adatait
    GET /company/:id -> egy adott cég adatait bemutató form
    POST /company/:id -> egy adott cég adatait módosító végpont, ide kell küldeni
        a módosítandó cég adatait
    POST /company/:id/delete -> adott id-jű céget törli, majd átirányít az
        összes cég képernyőjére (/companies)


    Munkák esetén:
    GET /jobs -> összes munka lekérése
    GET /jobs/new -> új munka felvételére form
    POST /jobs/new -> új munka felvételére végpont, 
        ide kell küldeni a felvevendő munka adatait
    GET /job/:id -> egy adott munka adatait bemutató form
    POST /job/:id -> egy adott munka adatait módosító végpont, ide kell küldeni
        a módosítandó munka adatait
    POST /job/:id/delete -> adott id-jű munkát törli, majd átirányít az
        összes munka képernyőjére (/jobs)

Middleware-ek
    getCompanies: az összes cég összes adatát visszaadja
    getCompany: egy adott cég adatait adja vissza
    addCompany: paraméterben kapott céget hozzáad az adatbázishoz
    modifyCompany: a paraméterben kapott id-jú cég adatait a megadottakra módosítja
    deleteCompany: törli a céget
    
    getJobs: az összes munka összes adatát visszaadja
    getJob: egy adott munka adatait adja vissza
    addJob: paraméterben kapott munkát hozzáad az adatbázishoz
    modifyJob: a paraméterben kapott id-jú munka adatait a megadottakra módosítja
    deleteJob: törli a munkát

    render: a megadott oldalt kirendereli, ez felel a megjelenítésért

Routing és middleware-ek kapcsolata:
    GET /companies -> getCompanies,render("companies")
    GET /companies/new -> render("companydetails")
    POST /companies/new -> addCompany,render(companies)
    GET /company/:id -> getCompany,render("companydetails")
    POST /company/:id -> getCompany,modifyCompany,render("companydetails")
    POST /company/:id/delete -> deleteCompany,render("companies")


    GET /jobs -> getJobs,render("jobs")
    GET /jobs/new -> render("jobdetails")
    POST /jobs/new -> addJobs,render(jobs)
    GET /jobs/:id -> getJob,render("jobdetails")
    POST /jobs/:id -> getJob,modifyJob,render("jobdetails")
    POST /jobs/:id/delete -> deleteJob,render("jobs")

*/

let express = require('express');
let app = express();

let session = require('express-session');
let bodyParser = require('body-parser');

app.set('view engine', 'ejs');


app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


let port=3000;


require('./routes/index')(app);


let server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

