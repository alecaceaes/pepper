
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Patient } from './patient';

@Injectable()
export class PatientService {
  constructor(private http: HttpClient) {
  }

  save(patient: Patient) {
    return this.http.post('/api/patients', patient);
  }
}