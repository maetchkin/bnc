import {expect} from 'chai';

import bnc from '../index.js';

describe('block naming convention helper', () => {

    it('function', () => {
        expect(bnc).to.be.a.function;
    });

    it('constructor', () => {
        const block = new bnc('block-name');
        expect( block ).to.be.instanceof(bnc);
        expect( block ).to.be.instanceof(String);
        expect( `${block}` ).to.be.equal( 'block-name ' );
    });

    it('el: block element', () => {
        const   elem = new bnc( 'block-name' ).el( 'list' );
        expect( elem ).to.be.instanceof( bnc );
        expect( elem ).to.be.instanceof( String );
        expect( `${elem}` ).to.be.equal( 'block-name__list ' );
    });

    it('mod: block modifier', () => {
        const   modified = new bnc( 'block-name' ).mod( 'mode' );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name-mode ' );
    });

    it('bod: block maybe modifier true', () => {
        const   modified = new bnc( 'block-name' ).bod( 'mode', true );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name-mode ' );
    });

    it('bod: block maybe modifier false', () => {
        const   modified = new bnc( 'block-name' ).bod( 'mode', false );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( ' ' );
    });

    it('mod: block elem modifier', () => {
        const   modified = new bnc( 'block-name' ).el( 'list' ).mod( 'mode' );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name__list-mode ' );
    });

    it('mod with value: block elem modifier value', () => {
        const   modified = new bnc( 'block-name' ).el( 'list' ).mod( 'mode', 'value' );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name__list-mode-value ' );
    });

    it('boolmod: block elem boolean modifier true', () => {
        const   modified = new bnc( 'block-name' ).el( 'list' ).boolmod( 'mode', true );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name__list-mode ' );
    });

    it('boolmod: block elem boolean modifier false', () => {
        const   modified = new bnc( 'block-name' ).el( 'list' ).boolmod( 'mode', false );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name__list ' );
    });

    it('bod: maybe block elem boolean modifier true', () => {
        const   modified = new bnc( 'block-name' ).el( 'list' ).bod( 'mode', true );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( 'block-name__list-mode ' );
    });

    it('bod: empty block elem boolean modifier false', () => {
        const   modified = new bnc( 'block-name' ).el( 'list' ).bod( 'mode', false );
        expect( modified ).to.be.instanceof( bnc );
        expect( modified ).to.be.instanceof( String );
        expect( `${modified}` ).to.be.equal( ' ' );
    });

    it('no subelem', () => {
        const elem = new bnc( 'block-name' ).el( 'list' ),
            errFn = elem.el.bind( elem, 'item' );

        expect( errFn ).to.throw(/Wrong chaining/);
    });

    it('no submode', () => {
        const modified = new bnc( 'block-name' ).mod( 'list' ),
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