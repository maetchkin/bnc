export type Ibnc = {
    el(elName: string): Ibnc & string;
    boolmod(mod: string, modValue): Ibnc & string;
    bod(mod: string, modValue): Ibnc & string;
    mod(mod: string, modValue?: string): Ibnc & string;
}

export type Bnc = Ibnc & string;

declare module 'bnc' {
    interface BncCtor {
        new (name: string) : Bnc;
    }
    const bnc: BncCtor;
    export = bnc;
}
