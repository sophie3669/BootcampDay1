const assert = require('chai').assert;
const myapp = require('../src/aritgeo.js');

describe("aritgeo",function(){

	describe("handleInvalidInput",function(){
		it("should return 0 as result for {}",function(){

			assert.equal(myapp.aritgeo([]),"0");
		});

	})
	describe("handleValidArithemeticInput",function(){

		it("should return Arithmetric for (9,11,13,15)", function(){
			assert.equal(myapp.aritgeo([1,2,3]),"arithmetric");

		});

		it("should return Arithmetric for (10,12,14,16)", function(){
			assert.equal(myapp.aritgeo([10,12,14,16]),"arithmetric");

		});

		it("should return Arithmetric for (19,21,23,25)", function(){
			assert.equal(myapp.aritgeo([19,21,23,25]),"arithmetric");

		});


	})
	describe("handleValidGeometricInput",function(){

		it("should return Geometric for (3,9,27,81)", function(){
			assert.equal(myapp.aritgeo([3,9,27,81]),"geometric");

		});

		it("should return Geometric for (2,6,18,54)", function(){
			assert.equal(myapp.aritgeo([2,6,18,54]),"geometric");

		});
})

	describe("handleNeitherGeonorArit",function(){

		it("should return -1 for (3,9,20,81)", function(){
			assert.equal(myapp.aritgeo([3,9,20,81]),"-1");

		});

		it("should return -1 for (2,1,18,54)", function(){
			assert.equal(myapp.aritgeo([2,1,18,54]),"-1");

		})
})
