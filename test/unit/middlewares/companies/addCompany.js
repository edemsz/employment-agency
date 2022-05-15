const expect = require("chai").expect;
const addCompanyMW = require("../../../../middlewares/company/addCompany");

describe("addCompany middleware test", function () {
  it("should create and call to next", function (done) {
    class CompanyMockModel {
      save(cb) {
        expect(this.name).to.be.equal("asd");
        expect(this.commission).to.be.equal("1.04");
        expect(this.seat).to.be.equal("Budapest");
        expect(this.comp_num).to.be.equal("123456");
        expect(this.vat_number).to.be.equal("12345-1234");
        cb(null, {});
      }
    }
    const mw = addCompanyMW({
      companyModel: CompanyMockModel,
    });

    mw(
      {
        body: {
          name: "asd",
          seat: "Budapest",
          comp_num: "123456",
          vat_number: "12345-1234",
          commission: "1.04",
        }
      },
      {

      },
      (err) => {
        expect(err).to.be.equal(undefined);
        done();
      }
    );
  });

  it("should not create and should call to next if seat is undefined", function (done) {
    class CompanyMockModel {
      save(cb) {
        throw 'Ide nem kellene eljutnia';
      }
    }
    const mw = addCompanyMW({
      companyModel: CompanyMockModel,
    });

    mw(
      {
        body: {
          name: "asd",
          comp_num: "123456",
          vat_number: "12345-1234",
          commission: "1.04",
          //seat missing
        }
      },
      {

      },
      (err) => {
        expect(err).to.be.equal(undefined);
        done();
      }
    );
  });
  it("should not create and should call to next if name is undefined", function (done) {
    class CompanyMockModel {
      save(cb) {
        throw 'Ide nem kellene eljutnia';
      }
    }
    const mw = addCompanyMW({
      companyModel: CompanyMockModel,
    });

    mw(
      {
        body: {
          seat: "Budapest",
          comp_num: "123456",
          vat_number: "12345-1234",
          commission: "1.04",
          //name missing
        }
      },
      {

      },
      (err) => {
        expect(err).to.be.equal(undefined);
        done();
      }
    );
  });
  it("should not create and should call to next if comp_num is undefined", function (done) {
    class CompanyMockModel {
      save(cb) {
        throw 'Ide nem kellene eljutnia';
      }
    }
    const mw = addCompanyMW({
      companyModel: CompanyMockModel,
    });

    mw(
      {
        body: {
          name: "asd",
          seat: "Budapest",
          vat_number: "12345-1234",
          commission: "1.04",
          //comp_num missing
        }
      },
      {

      },
      (err) => {
        expect(err).to.be.equal(undefined);
        done();
      }
    );
  });
  it("should not create and should call to next if vat_number is undefined", function (done) {
    class CompanyMockModel {
      save(cb) {
        throw 'Ide nem kellene eljutnia';
      }
    }
    const mw = addCompanyMW({
      companyModel: CompanyMockModel,
    });

    mw(
      {
        body: {
          name: "asd",
          comp_num: "123456",
          seat: "Budapest",
          commission: "1.04",
          //vat_number missing
        }
      },
      {

      },
      (err) => {
        expect(err).to.be.equal(undefined);
        done();
      }
    );
  });
  it("should not create and should call to next if commission is undefined", function (done) {
    class CompanyMockModel {
      save(cb) {
        throw 'Ide nem kellene eljutnia';
      }
    }
    const mw = addCompanyMW({
      companyModel: CompanyMockModel,
    });

    mw(
      {
        body: {
          name: "asd",
          comp_num: "123456",
          vat_number: "12345-1234",
          seat: "Budapest",
          //commission missing
        }
      },
      {

      },
      (err) => {
        expect(err).to.be.equal(undefined);
        done();
      }
    );
  });



});