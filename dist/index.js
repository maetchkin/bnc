'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Block's naming convention helper for React Elements
    https://en.bem.info/methodology/naming-convention/
*/

var delims = {
    el: '__', mod: '-'
},
    lvls = ['block', 'el', 'mod'];

var bnc = function () {
    function bnc(name) {
        var lvl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';

        _classCallCheck(this, bnc);

        if (lvls.indexOf(lvl) == -1) {
            throw 'BNC: Wrong level';
        }
        if (typeof name !== 'string') {
            throw new TypeError('BNC: Wrong name type');
        }
        if (name.replace(/[^0-9a-z\-_]/gi, '') !== name) {
            throw new RangeError('BNC: Wrong name');
        }
        this.name = name;
        this.lvl = lvl;
    }

    _createClass(bnc, [{
        key: 'el',
        value: function el(elem) {
            if (this.lvl != 'block') {
                throw 'BNC: Wrong chaining: el ' + this.lvl;
            } else {
                return new bnc(this.name + delims.el + elem, 'el');
            }
        }
    }, {
        key: 'boolmod',
        value: function boolmod(mod) {
            var modVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            return modVal ? this.mod(mod) : this;
        }
    }, {
        key: 'mod',
        value: function mod(_mod) {
            var modVal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;


            if (this.lvl != 'block' && this.lvl != 'el') {
                throw 'BNC: Wrong chaining: mod ' + this.lvl;
            } else {
                return new bnc(this.name + delims.mod + _mod + (modVal ? delims.mod + modVal : ''), 'mod');
            }
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.name + ' ';
        }
    }]);

    return bnc;
}();

exports.default = bnc;