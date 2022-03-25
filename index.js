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
    DELETE /company/:id -> adott id-jű céget törli, majd átirányít az
        összes cég képernyőjére (/companies)


    Munkák esetén:
    GET /jobs -> összes munka lekérése
    GET /jobs/new -> új munka felvételére form
    POST /jobs/new -> új munka felvételére végpont, 
        ide kell küldeni a felvevendő munka adatait
    GET /job/:id -> egy adott munka adatait bemutató form
    POST /job/:id -> egy adott munka adatait módosító végpont, ide kell küldeni
        a módosítandó munka adatait
    DELETE /job/:id -> adott id-jű munkát törli, majd átirányít az
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

    redirect: átirányít a megadott végpontra
    render: a megadott oldalt kirendereli, ez felel a megjelenítésért

Routing és middleware-ek kapcsolata:
    GET /companies -> getCompanies,render("companies")
    GET /companies/new -> render("companydetails")
    POST /companies/new -> addCompany,redirect(companies)
    GET /company/:id -> getCompany,render("companydetails")
    POST /company/:id -> getCompany,modifyCompany,render("companydetails")
    DELETE /company/:id -> deleteCompany,render("companies")


    GET /jobs -> getJobs,render("jobs")
    GET /jobs/new -> render("jobdetails")
    POST /jobs/new -> addJobs,redirect(jobs)
    GET /jobs/:id -> getJob,render("jobdetails")
    POST /jobs/:id -> getJob,modifyJob,render("jobdetails")
    DELETE /jobs/:id -> deleteJob,render("jobs")

*/

let express = require('express');
let app = express();

app.use(express.static('static'));
let port=3000;


require('./routes/companies')(app);


let server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

