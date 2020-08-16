/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Component, OnInit, Input } from '@angular/core';
import { IRdbmsApiResponse } from '../../model/rdbms-handson.model';

@Component({
  selector: 'app-execution-result',
  templateUrl: './execution-result.component.html',
  styleUrls: ['./execution-result.component.scss']
})
export class ExecutionResultComponent implements OnInit {

  @Input() executedResult: IRdbmsApiResponse;
  executedTable: any[] = [];
  displayColumns: string[] = [];
  telltext = '';
  constructor() { }

  ngOnInit() {
    this.executedTable = this.executedResult.data ? JSON.parse(this.executedResult.data) : [];
    this.displayColumns = this.executedTable.length ? Object.keys(this.executedTable[0]) : [];
    this.telltext = this.executedResult.tellTextMsg;
  }

}
