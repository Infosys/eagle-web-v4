/*               "Copyright 2020 Infosys Ltd.
               Use of this source code is governed by GPL v3 license that can be found in the LICENSE file or at https://opensource.org/licenses/GPL-3.0
               This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License version 3"*/
import { IContent } from './content.model';

export interface ICertificationResponse {
  resultList: ICertification;
}
export interface ICertification {
  passedList: IContent[];
  canAttemptList: IContent[];
  cannotAttemptList: IContent[];
  ongoingList: IContent[];
  sortedList: IContent[];
}
export interface ICertificationRequest {
  userEmail: string;
  tracks: string[];
  sortOrder?: 'asc' | 'desc';
}

export interface ICertificationMeta {
  isCompleted: boolean;
  warningMessage: string;
  eligibility: {
    eligible: boolean;
    reason: string;
  };
  lastTakenDate: number;
  slotFreezeDate: number;
  booking?: ICertificationBooking;
  verification_request?: ICertificationVerificationRequest;
  budget_request?: ICertificationBudgetRequest;
}

export interface ICertificationBooking {
  booking_type: string;
  dc?: string;
  testcenter?: string;
  country?: string;
  location?: string;
  date: number;
  slot: string;
  slotno: number;
  status: string;
  key?: string;
  icfdId?: number;
}

export interface ICertificationVerificationRequest {
  exam_date: number;
  result_type: string;
  result: string;
  verifierEmail: string;
  document: {
    document_url: string;
    document_name: string;
  }[];
  status: string;
  reject_reason: string;
}

export interface ICertificationBudgetRequest {
  manager_id?: string;
  amount: number;
  currency: string;
  status: string;
  reject_reason: string;
}

export interface ISubmitOrWithdrawRequest {
  exam_date: number;
  result_type: string;
  result: string;
  fileName: string;
  verifierEmail: string;
}

export interface IAccLocation {
  dc: string;
  testcenters: string[];
}

export interface ITestCenterSlotList {
  dc: string;
  testcenter: string;
  slotdata: {
    date: number; // timestamp
    slots: ITestCenterSlot[];
  }[];
}

export interface ITestCenterSlot {
  slot_no: number;
  slot_time: string;
  seats_available: boolean;
}

export interface IAtDeskBooking {
  country_code: string;
  location_code: string;
  location_name?: string;
  date: number;
  slot: string;
  proctor: string;
  proctor_contact: string;
  user_contact: string;
}

export interface ILHApiResponse {
  res_code: number;
  res_message: string;
}

export interface ICertificationCountry {
  country_code: string;
  country_name: string;
}

export interface IAtDeskLocation {
  location_code: string;
  location_name: string;
}

export interface IAtDeskSlotItem {
  date: Date;
  slots: {
    slot_time: string;
  }[];
}

export interface IAtDeskSlotBooking {
  country_code: string;
  location_code: string;
  location_name?: string;
  date: string;
  slot: string;
  proctor: string;
  proctor_contact: string;
  user_contact: string;
}

export interface ICertificationCurrency {
  currency: string;
}

export interface IBudgetApprovalRequest {
  manager_id: string;
  amount: number;
  currency: string;
}

export interface ICertificationRequestItem {
  record_type: TCertificationRequestType;
  user?: {
    name: string;
    email: string;
  };
  currently_with: {
    name: string;
    email: string;
  };
  raised_on?: Date;
  status?: string;
  certification: string;
  certification_name: string;
  booking_type?: string;
  country?: string;
  location?: string;
  date?: Date;
  slot?: string;
  slotno?: number;
  user_contact?: string;
  icfdid?: number;
  sino?: number;
  ecdp_id?: number;
  amount?: number;
  currency?: string;
  exam_date?: Date;
  document?: {
    document_url: string;
  }[];
  document_url?: string;
  resultType?: string;
  result?: string;
  upload_id?: number;
}

export interface ICertificationApproverAction {
  status: string;
  reason?: string;
  upload_id?: number;
  user?: string;
}

export interface ICertificationSubmission {
  certification?: string;
  certification_name: string;
  certification_type: string;
  examDate: Date;
  result_type: string;
  result: string;
  status?: string;
}

export interface ICertificationApproverData {
  certificationId?: string;
  icfdId?: number;
  ecdpId?: number;
  sino?: number;
  status?: 'Approved' | 'Rejected';
  reason?: string;
  uploadId?: number;
  user?: {
    name: string;
    email: string;
  };
}

export interface ICertificationSendResponse {
  res_code: number;
  res_message: string;
}

export interface IResultUploadForm {
  result_type: string;
  result: string;
  exam_date: number | Date;
  fileName: string;
  file: File;
}

export interface ICertificationDialogData {
  approvalItem: ICertificationRequestItem;
  action: TCertificationRequestType;
  actionType: TCertificationActionType;
}

export interface IUserActionDialogData {
  approvalItem: ICertificationRequestItem;
  actionType: TCertificationUserActionType;
}

export interface ICertificationDialogResult {
  action: TCertificationRequestType;
  result: boolean;
  data: ICertificationApproverData;
}

export interface IUserActionDialogResult {
  action: TCertificationRequestType;
  result: boolean;
  data: ICertificationApproverData;
}

export interface IRequestFilterDialogResult {
  type?: TCertificationRequestType;
  startDate?: Date;
  endDate?: Date;
  status?: string;
}

export interface ICertificationResultSubmit {
  exam_date: string;
  result_type: string;
  result: string;
  verifierEmail: string;
  fileName: string;
}

export type TCertificationView = 'default' | 'acc' | 'atDesk' | 'budget' | 'upload';
export type TCertificationRequestType = 'result_verification' | 'budget_approval' | 'proctor_approval' | 'acc' | 'all';
export type TCertificationActionType = 'accept' | 'decline' | 'submit';
export type TCertificationUserActionType = 'cancel' | 'withdrawProof' | 'submitProof';
export type TCertificationResultAction = 'submit' | 'withdraw';
export type TCertificationCompletionStatus = 'completed' | 'notcompleted';
