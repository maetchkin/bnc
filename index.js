/*
    Block's naming convention helper for React Elements
    https://en.bem.info/methodology/naming-convention/
*/

const
    delims = {
        el:  '__', mod: '-'
    },

    lvls = [
        'block', 'el', 'mod'
    ];

class bnc extends String {

    constructor ( name, lvl = 'block' ) {
        super();
        if (lvls.indexOf(lvl)==-1) {
            throw 'BNC: Wrong level';
        }
        if (typeof(name) !== 'string' ) {
            throw new TypeError('BNC: Wrong name type');
        }
        if (name.replace(/[^0-9a-z\-_]/gi,'') !== name ) {
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

    bod ( mod, modVal = false ) {
        return modVal ? this.mod( mod ) : EmptyClass;
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

    valueOf () {
        return this.toString();
    }
}

const EmptyClass = new bnc('');

export default bnc