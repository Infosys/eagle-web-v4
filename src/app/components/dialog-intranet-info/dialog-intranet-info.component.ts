/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-intranet-info',
  templateUrl: './dialog-intranet-info.component.html',
  styleUrls: ['./dialog-intranet-info.component.scss']
})
export class DialogIntranetInfoComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { url: string }) {}

  ngOnInit() {}
}
