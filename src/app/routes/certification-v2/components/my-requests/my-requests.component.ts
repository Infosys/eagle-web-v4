/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { takeWhile, tap, switchMap } from 'rxjs/operators';
import { CertificationService } from '../../../../services/certification.service';

@Component({
  selector: 'ws-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {
  itemSubject: BehaviorSubject<boolean>;

  constructor(private certificationSvc: CertificationService) {}

  ngOnInit() {}

  private _subscribeToSubject() {}
}
