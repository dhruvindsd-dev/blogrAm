import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterationComponent } from './registeration.component';

const routes: Route[] = [{ path: '', component: RegisterationComponent }];

@NgModule({
  declarations: [RegisterationComponent],
  imports: [SharedModule, FormsModule, RouterModule.forChild(routes)],
})
export class RegisterationModule {}
