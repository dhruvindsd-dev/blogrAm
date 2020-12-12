import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegisterationComponent } from './registeration.component';

@NgModule({
  declarations: [RegisterationComponent],
  imports: [SharedModule, FormsModule],
})
export class RegisterationModule {}
