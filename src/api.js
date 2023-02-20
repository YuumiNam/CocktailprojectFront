/* eslint-disable */
import axios from "axios";

// 칵테일 JSON파일
async function getCocktail(setCocktail) {
    const cocktailData = await axios.get(
        'cocktail/list'
    );
    setCocktail(cocktailData.data);
}

// 재료 JSON파일
async function getIngredient(setIngredient) {
    const ingredientData = await axios.get(
        'http://localhost:3002/ingredient'
    );
    setIngredient(ingredientData.data);
}

export {getCocktail, getIngredient};