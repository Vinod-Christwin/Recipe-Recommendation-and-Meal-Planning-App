import { LightningElement } from 'lwc';

export default class RecipesSearch extends LightningElement {
    recipes = ''
    diet = ''
    isButtonDisabled = true

    // Gluten Free
    // Ketogenic
    // Vegetarian
    // Lacto-Vegetarian
    // Ovo-Vegetarian
    // Vegan
    // Pescetarian
    // Paleo
    // Primal
    // Low FODMAP
    // Whole30
    get options() {
        return [
            { label: 'Gluten Free', value: 'Gluten Free' },
            { label: 'Ketogenic', value: 'Ketogenic' },
            { label: 'Vegetarian', value: 'Vegetarian' },
            { label: 'Lacto-Vegetarian', value: 'Lacto-Vegetarian' },
            { label: 'Ovo-Vegetarian', value: 'Ovo-Vegetarian' },
            { label: 'Vegan', value: 'Vegan' },
            { label: 'Pescetarian', value: 'Pescetarian' },
            { label: 'Paleo', value: 'Paleo' },
            { label: 'Primal', value: 'Primal' },
            { label: 'Low FODMAP', value: 'Low FODMAP' },
            { label: 'Whole30', value: 'Whole30' }
        ];
    }

    get disabled(){
        if(this.recipes === '' || this.diet === ''){
            this.isButtonDisabled = true;
        }else{
            this.isButtonDisabled = false
        }
        return this.isButtonDisabled
    }

    handleTextChange(event) {
        this.recipes = event.target.value;
        console.log('Recipes ' +this.recipes);
    }

    handleChange(event) {
        this.recipes = event.target.value;
        console.log('Recipes ' +this.recipes);
    }


    handleChange(event) {
        this.diet = event.detail.value;
        console.log('Diet ' +this.diet);
        
    }
    handleTextChange(event){

        this.recipes = event.target.value;
        console.log(this.recipes);
    }
    handleClick(){
        console.log('THis is the vlaue ' +this.recipes+ ' and the selected diet is ' +this.diet);
        
    }
}