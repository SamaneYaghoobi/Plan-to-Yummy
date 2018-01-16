import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const appRouters: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'recipes', component: RecipesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRouters)],
    exports: [RouterModule]
})

export class AppRoutersModule {

}
