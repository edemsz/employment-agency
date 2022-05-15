const expect = require("chai").expect;
const getJobMW = require("../../../../middlewares/jobs/getJob.js");

describe("getJobMW middleware test", function () {
    it("should set res.locals job", function (done) {
        const mw = getJobMW({
            jobModel: {
                findOne: (p1) => {
                    expect(p1).to.be.deep.equal({ _id: 13 });

                    return {
                        exec: (cb) => {
                            cb(null, "job1");
                        },
                    };

                },
            },
        });

        let mockRes = {
            locals: {},
        };

        mw(
            {
                params: {
                    id: 13,
                },
            },
            mockRes,
            () => {
                expect(mockRes.locals).to.be.deep.eq({ job: "job1" });
                done();
            }
        );
    });

    it("should test to be an error ", function (done) {
        const mw = getJobMW({
            jobModel: {
                findOne: (p1) => {
                    expect(p1).to.be.deep.equal({ _id: 13 });
                    return {
                        exec: (cb) => {
                            cb("someerror", "job");
                        },
                    };


                },
            },
        });

        let mockRes = {
            locals: {},
        };

        mw(
            {
                params: {
                    id: 13,
                },
            },
            mockRes,
            (err) => {
                expect(err).to.be.deep.eq("someerror");
                done();
            }
        );
    });

    it('should call next when no job found in db', function (done) {
        const mw = getJobMW({
            jobModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '08' });
                    return {
                        exec: (cb) => {
                            cb(undefined,null);
                        },
                    };
                }
            }
        });

        const resMock = { locals: {} };

        mw({
            params: {
                id: '08'
            }
        },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({job:null});
                done();
            });
    });
});