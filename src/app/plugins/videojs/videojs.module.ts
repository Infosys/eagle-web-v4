/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideojsRoutingModule } from './videojs-routing.module';
import { VideojsComponent } from './components/videojs/videojs.component';

@NgModule({
  declarations: [VideojsComponent],
  imports: [
    CommonModule,
    VideojsRoutingModule
  ]
})
export class VideojsModule { }
