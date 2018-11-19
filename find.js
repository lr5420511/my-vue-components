'use strict';

const promiseify = require('new-promiseify');
const fs = require('fs');
const assert = require('assert');
const { dirname, resolve } = require('path');

const [stat, rddir] = promiseify(
    fs.stat, fs.readdir
);

module.exports = async function(pat, fname) {
    const state = await stat(pat);
    assert(state.isDirectory(), 'pat is invaild directory.');
    pat = resolve(pat);
    while(pat) {
        const ctns = await rddir(pat),
            vaild = ctns.some(cur => cur === fname);
        if(vaild) break;
        const temp = dirname(pat);
        pat = pat === temp ? null : temp;
    }
    return pat;
};
