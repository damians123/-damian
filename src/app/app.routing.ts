import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
]
{ path:"redirecTo: '/front-page',pathMatch: 'full' },
{ path:'front-page',components:FrontPageComponnts },
{ path:'contact',components:ContactComponents },
{path: 'project',components:ProjectComponents }

@NgModule({
	imports: [RouteMobile,forRoot],
	exports: []

})


export class AppRoutingModule{
	

}