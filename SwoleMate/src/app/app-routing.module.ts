import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { 
    path: 'progress', 
    loadChildren: './progress/progress.module#ProgressPageModule' 
  },
  { 
    path: 'profile', 
    loadChildren: './profile/profile.module#ProfilePageModule'
   },
  { path: 'popover', loadChildren: './popover/popover.module#PopoverPageModule' },
  { path: 'add-workout', loadChildren: './add-workout/add-workout.module#AddWorkoutPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
