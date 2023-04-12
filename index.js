const assert = require( "assert" );

/// @notice combines components of an ERC1271 signature into a single hex string
/// @return hex string signature
exports.combine = (v, r, s) => {
    return v + r.slice(2,66) + s
}


/// @notice splits a ERC1271 signature into its components
/// @return v 32 byte hex string
/// @return r 32 byte hex string
/// @return s 1 byte hex string
exports.split = (signature) => {
    // validate that the input is the correct length
    if (signature.length != 132) {
        throw new Error('invalid length')
    }
    console.log('good length');
    // validate that the input is a hex string
    var regex = /^[0-9A-Fa-f]+$/;
    if (!signature.test(regex)) {
        throw new Error('not a hex string')
    }
    console.log('it is hex');
    // split the signature
    const components = {
        v: "0x" + signature.slice(2, 66),
        r: "0x" + signature.slice(66, 130),
        s: signature.slice(130, 133)
    }

    console.log('components: ' + components)

    return components;
}