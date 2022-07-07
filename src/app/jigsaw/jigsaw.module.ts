import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JigsawComponent } from './jigsaw/jigsaw.component';
import { JigsawService } from './services/jigsaw.service';



@NgModule({
  declarations: [
    JigsawComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    JigsawComponent
  ],
  providers:[
    JigsawService
  ]
})
export class JigsawModule { }
