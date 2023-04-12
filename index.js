
// Given three components of a an ERC1271 signature, combine them into a single
// signature.
exports.combine = (v, r, s) => {
    return v + r + s
}


// Given a hex string that represents an ERC1271 siganture, split it into its
// three component parts, v, r and s.
exports.split = (signature) => {
    // validate that the signature is the sufficient length
    require(signature.length == 66)
    // validate that the signature is in hex
    var regex = /[0-9A-Fa-f]{6}/g;
    require(signature.match(regex))
    // split the signature
    v = '0x' + signature.slice(0, 31);
    r = '0x' + signature.slice(32, 64);
    s = signature.slice(65, 66); // todo: convert to decimal?
    return v, r, s
}