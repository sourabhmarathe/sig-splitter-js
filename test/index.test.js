
const { split, combine } = require("..");
const assert = require( "assert" );

describe( "Signature Splitter", function () {
    describe( "split", function () {
        it( "splits a signature", function () {
            var signature = '0x8958c88ce490c87f5d61f72cceb0171101c875a83e7083ce5d29f9420b0c8ea97ff08b25ca127e0ef59241dea0545782c8edb2d35ddd0182410025344915fdad1c';
            var components = split(signature);
            assert.equal(components.v, '0x8958c88ce490c87f5d61f72cceb0171101c875a83e7083ce5d29f9420b0c8ea9');
            assert.equal(components.r, '0x7ff08b25ca127e0ef59241dea0545782c8edb2d35ddd0182410025344915fdad');
            assert.equal(components.s, '1c');
        });
    });

    describe("combine", function() {
        it("combines components", function() {
            var signature = '0x8958c88ce490c87f5d61f72cceb0171101c875a83e7083ce5d29f9420b0c8ea97ff08b25ca127e0ef59241dea0545782c8edb2d35ddd0182410025344915fdad1c';
            var v = '0x8958c88ce490c87f5d61f72cceb0171101c875a83e7083ce5d29f9420b0c8ea9'
            var r = '0x7ff08b25ca127e0ef59241dea0545782c8edb2d35ddd0182410025344915fdad'
            var s = '1c'
            assert.equal(signature, combine(v, r, s))
        })
    })

    describe("validate", function() {
        it("wrong length", function() {
                assert.throws(split('lakjsdf'), Error, 'invalid length')
        })
    })
});