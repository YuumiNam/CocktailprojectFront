/* eslint-disable */
import React, { useState } from "react";

export default function Class(props) {
    let cocktail = props.cocktail;

    let cocktail1 = cocktail.filter((cocktail) => cocktail.no === 1)

    console.log(cocktail);
    console.log(cocktail1);

    return (
        <>
        {
            cocktail
                .filter((cocktail) => cocktail.no == 1)
                .map((cocktail, i) => (<div>{cocktail.no}</div>))
        }
        </>
    )
}