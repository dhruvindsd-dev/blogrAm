import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';

const routes: Route[] = [{ path: '', component: UserComponent }];

@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class UserModule {}
