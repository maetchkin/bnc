import {expect} from 'chai';

import bnc from '../index.js';

describe('block-naming-helper', () => {

    it('function', () => {
        expect(bnc).to.be.a.function;
    });

    it('constructor', () => {
        expect(new bnc('block-name') ).to.be.instanceof(bnc);
    });

    it('block declaration', () => {
        var block = new bnc( 'block-name' );
        expect( block ).to.be.instanceof( bnc );
        expect( block ).to.have.property( 'name', 'block-name' );
        expect( block ).to.have.property( 'lvl', 'block' );
    });

    it('block element', () => {
        var elem = new bnc( 'block-name' ).el( 'list' );
        expect( elem ).to.be.instanceof( bnc );
        expect( elem ).to.have.property( 'name', 'block-name__list' );
        expect( elem ).to.have.property( 'lvl', 'el' );
    });

    it('block modifier', () => {
        var modified = new bnc( 'block-name' ).mod( 'mode' );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.have.property( 'name', 'block-name-mode' );
        expect( modified ).to.have.property( 'lvl', 'mod' );
    });

    it('block elem modifier', () => {
        var modified = new bnc( 'block-name' ).el( 'list' ).mod( 'mode' );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.have.property( 'name', 'block-name__list-mode' );
    });

    it('block elem modifier value', () => {
        var modified = new bnc( 'block-name' ).el( 'list' ).mod( 'mode', 'value' );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.have.property( 'name', 'block-name__list-mode-value' );
    });

    it('block elem boolean modifier true', () => {
        var modified = new bnc( 'block-name' ).el( 'list' ).boolmod( 'mode', true );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.have.property( 'name', 'block-name__list-mode' );
    });

    it('block elem boolean modifier false', () => {
        var modified = new bnc( 'block-name' ).el( 'list' ).boolmod( 'mode', false );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.have.property( 'name', 'block-name__list' );
    });

    it('no subelem', () => {
        var elem = new bnc( 'block-name' ).el( 'list' ),
            errFn = elem.el.bind( elem, 'item' );

        expect( errFn ).to.throw(/Wrong chaining/);
    });

    it('no submode', () => {
        var modified = new bnc( 'block-name' ).mod( 'list' ),
            errFn = modified.mod.bind( modified, 'mode' );

        expect( errFn ).to.throw(/Wrong chaining/);
    });

    it('wrong name type', () => {
        expect(
            () => (new bnc( ['block-name'] ))
        ).to.throw( TypeError );
    });

    it('wrong level', () => {
        expect(
            () => (new bnc( 'block-name', 'wrong' ))
        ).to.throw(/Wrong level/);
    });

    it('wrong range', () => {
        expect(
            () => (new bnc( 'block%name' ))
        ).to.throw(RangeError);
    });

});