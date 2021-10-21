import React from 'react'
import RecipeData from '../components/RecipeData';
import Recipe from '../components/Recipe';
import '../components/Recipes.css';
import { Grid, Row, Col } from 'react-flexbox-grid';


function Recipes() {
    return (
        <div className="recipes">
            <h1>Recipes</h1>
            <div className="recipes-container">
                <Grid fluid>
                    <Row>
                        {RecipeData.map((data, index) => (
                            <Recipe data={data} key={index} />
                        ))}
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default Recipes;

