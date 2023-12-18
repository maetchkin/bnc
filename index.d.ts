export type Ibnc = {
    el(elName: string): Bnc;
    boolmod(mod: string, modValue?: boolean): Bnc;
    bod(mod: string, modValue?: boolean): Bnc;
    mod(mod: string, modValue?: string): Bnc;
}

export type Bnc = Ibnc & string;

interface BncCtor {
    new(name: string): Bnc;
}

declare const bnc: BncCtor;
export default bnc;
