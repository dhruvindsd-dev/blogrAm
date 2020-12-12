import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule],
})
export class UserModule {}
