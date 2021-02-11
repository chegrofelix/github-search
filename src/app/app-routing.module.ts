import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitDisplayComponent } from './git-display/git-display.component';
import { LandingpageComponent } from './landingpage/landingpage.component';



const routes: Routes = [
  { path: 'git-display', component: GitDisplayComponent},
  { path: 'landingpage', component: LandingpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
