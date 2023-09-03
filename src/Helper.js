import React from 'react'
import { useParams } from 'react-router-dom'
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import seedColors from './seedColors';

export default function Helper() {
    const { id } = useParams();
    function findPalette(id) {
        for (let p of seedColors) {
            if (p.id === id)
                return p;
        }
    }
  return (
    <Palette palette={generatePalette(findPalette(id))} />
  )
}
