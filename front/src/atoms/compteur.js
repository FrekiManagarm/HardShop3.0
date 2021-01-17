import { atom, selector } from 'recoil';

export const compteurState = atom({
    key: 'compteur-state',
    default: 0
})

export const compteurDouble = selector({
    key: 'compteur-double',
    get: ({ get }) => {
        const n = get(compteurState)
        console.log(n);
    }
})