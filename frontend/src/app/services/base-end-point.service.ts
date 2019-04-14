import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseEndPointService {

  constructor() { }

  static getBaseEndPoint()
  {
    return 'http://localhost/shadabtest/backend/public';
  }

  static getClientInfo()
  {
    return {
      id: '2',
      secret: 'H1CZv1kMT147X8IPtXnArBdfgfbCovFwNzvQcmu1'
    };
  }
}
