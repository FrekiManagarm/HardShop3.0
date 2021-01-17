import React from 'react';
import { useRecoilState } from 'recoil';
import { compteurState } from './atoms/compteur';

export default function Compteur() {

    const [n, setN] = useRecoilState(compteurState)

    return (
        <div>
            
        </div>
    )
}
