import { RecipeService } from './../recipe.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeForm: FormGroup;
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute, private recipeServ: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let imagePath = '';
    let description = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeServ.getRecipes(this.id);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      description = recipe.desc;
      if (recipe['ingredients']) {
        for (const ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'ingName': new FormControl(ingredient.name),
              'ingAmount': new FormControl(ingredient.amount)
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        'ingredient': recipeIngredients,
        'name': new FormControl(recipeName),
        'image': new FormControl(imagePath),
        'desc': new FormControl(description),
      });
    }
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup(
        {
          'ingName': new FormControl(),
          'ingAmount': new FormControl()
        }
      )
    );
  }


}
