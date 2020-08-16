/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { IRequestFilterDialogResult } from '../../../../models/certification.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../../../node_modules/@angular/material';

@Component({
  selector: 'ws-request-filter-dialog',
  templateUrl: './request-filter-dialog.component.html',
  styleUrls: ['./request-filter-dialog.component.scss']
})
export class RequestFilterDialogComponent implements OnInit {
  filterForm: FormGroup;
  readonly defaultStartDate: Date;
  readonly defaultEndDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public pageType: 'approver' | 'user',
    private dialogRef: MatDialogRef<RequestFilterDialogComponent, IRequestFilterDialogResult>
  ) {
    this.defaultStartDate = new Date(new Date().getFullYear(), 0, 1);
    this.defaultEndDate = new Date();

    this.filterForm = new FormGroup({
      type: new FormControl('all'),
      startDate: new FormControl(this.defaultStartDate),
      endDate: new FormControl(this.defaultEndDate)
    });

    this._setConditionalValidators();
  }

  ngOnInit() {}

  applyFilters() {
    if (this.filterForm.invalid) {
      return;
    }

    const dialogResult: IRequestFilterDialogResult = {
      type: this.filterForm.value.type,
      startDate: this.filterForm.value.startDate,
      endDate: this.filterForm.value.endDate
    };

    this.dialogRef.close(dialogResult);
  }

  private _setConditionalValidators() {
    if (this.pageType === 'user') {
      const startDateCtrl = this.filterForm.get('startDate');
      const endDateCtrl = this.filterForm.get('endDate');

      startDateCtrl.setValidators([Validators.required, this._datePickerValidator.bind(this)]);
      endDateCtrl.setValidators([Validators.required, this._datePickerValidator.bind(this)]);
    }
  }

  private _datePickerValidator(): ValidationErrors | null {
    try {
      const startDate: Date = new Date(this.filterForm.controls.startDate.value);
      const endDate: Date = new Date(this.filterForm.controls.endDate.value);

      if (!(startDate && endDate)) {
        return null;
      }

      if (startDate.getTime() > endDate.getTime()) {
        return {
          invalidDate: true
        };
      }

      return null;
    } catch (error) {
      return {
        invalidDate: true
      };
    }
  }
}
