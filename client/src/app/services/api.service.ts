import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from '../environment/environment';
import { catchError } from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  responseSuccessMessage = new Array();
  responseErrorMessage = new Array();

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  	'X-Timezone-Offset': this.getTimezoneOffset()
  });
  options = { headers: this.headers };

  private getTimezoneOffset() : string {
		return Intl.DateTimeFormat().resolvedOptions().timeZone;
	}

  /** Service method for POST requests */
  postRequest(apiSuffix: String, requestBody: any) {

    return this.httpClient.post<any>(environment.API_SERVER + apiSuffix, requestBody, this.options).pipe(
      catchError(this.handleError)
    ).subscribe(
      (data) => {
        for (let entry of data.messages) {
          this.responseSuccessMessage.push(entry);
        }
        this.alertResponse(this.responseSuccessMessage.join("\n").trim());
      },
      (errorResponse) => {
        for (let entry of errorResponse.error.errors) {
          this.responseErrorMessage.push(entry);
        }
        this.alertResponse(this.responseErrorMessage.join("\n").trim());
      });
  }

  /** Service method for POST requests with response data */
  postRequestResponseData(apiSuffix: String, requestBody: any) {

    return this.httpClient.post<any>(environment.API_SERVER + apiSuffix, requestBody, this.options);
  }

  /** Method to display alert box */
  alertResponse(message: string) {
    alert(message);
  }

  /** Method to display HttpStatus code in browser console */
  handleError(error: HttpErrorResponse) {
    console.log("Http Status: " + error.status);
    return throwError(error);
  }

  /** Service method for GET requests */
  getRequest(apiSuffix: String) {
    return this.httpClient.get<any>(environment.API_SERVER + apiSuffix, this.options);
  }

  /** Service method for PUT requests */
  putRequest(apiSuffix: String, requestBody: any) {
    return this.httpClient.put<any>(environment.API_SERVER + apiSuffix, requestBody, this.options);
  }

  /** Service method for DELETE requests */
  deleteRequest(apiSuffix: String) {
    return this.httpClient.delete<any>(environment.API_SERVER + apiSuffix, this.options);
  }

  /** Service method for POST requests with headers with response data */
  postRequestResponseDataWithHeaders(apiSuffix: String, requestBody: any, header: HttpHeaders) {
    const opt = { header, responseType: 'blob' as 'json' };
    return this.httpClient.post<any>(environment.API_SERVER + apiSuffix, requestBody, opt);
  }

  /** Service method for PUT requests */
  putAddRequest(apiSuffix: String) {
    return this.httpClient.put<any>(environment.API_SERVER + apiSuffix, this.options);
  }
};
