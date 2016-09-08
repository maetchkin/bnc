/*
    Block's naming conventions for React Elements
    https://en.bem.info/methodology/naming-convention/
*/

const
    delims = {
        el:  '__', mod: '-'
    },

    lvls = [
        'block', 'el', 'mod'
    ];

export default class bnc {

    constructor ( name, lvl = 'block' ) {
        if (lvls.indexOf(lvl)==-1) {
            throw 'BNC: Wrong level';
        }
        if (typeof(name) !== 'string' ) {
            throw new TypeError('BNC: Wrong name type');
        }
        if (name.replace(/[^0-9a-z\-\_]/gi,'') !== name ) {
            throw new RangeError('BNC: Wrong name');
        }
        this.name = name;
        this.lvl  = lvl;
    }

    el ( elem ) {
        if (this.lvl != 'block') {
            throw 'BNC: Wrong chaining: el ' + this.lvl ;
        } else {
            return new bnc(
               this.name
             + delims.el
             + elem
             , 'el'
            );
        }
    }

    boolmod ( mod, modVal = false ) {
        return modVal ? this.mod( mod ) : this;
    }

    mod ( mod, modVal = void(0) ) {

        if (this.lvl != 'block' && this.lvl != 'el') {
            throw 'BNC: Wrong chaining: mod ' + this.lvl;
        } else {
            return new bnc(
                this.name
              + delims.mod
              + mod
              + ( modVal
                    ? delims.mod + modVal
                    : ''
                )
              , 'mod'
            );
        }
    }

    toString () {
        return this.name + ' ';
    }
}