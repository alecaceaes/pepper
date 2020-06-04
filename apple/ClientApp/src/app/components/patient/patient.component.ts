
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

// import { Medication, Patient } from './patient';
import { PatientService } from './patient.service';
import { normalizeCamelCase } from '../../utilities/camelCaseNormalizer';

@Component({
  templateUrl: './patient.component.html'
})
export class PatientComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService) {
      this.form = fb.group({
        name: [''],
        address: fb.group({
          street: [''],
          city: ['']
        }),
        medications: fb.array([])
      });
  }

  save() {
    this.patientService.save(this.form.value).subscribe(
      res => {
        console.log('SUCCESS', res);
      },
      err => {
        console.log('Errors', err);
        const error = err.error;

        for (const key in error) {
          if (key) {
            const control = this.form.get(normalizeCamelCase(key));
            control.setErrors({
              remote: error[key].join()
            });
          }
        }
      });
  }

  addMedication(input) {
    if (!input.value) {
      return;
    }

    const medications = this.form.get('medications') as FormArray;
    const newMedication = this.fb.group({
      name: [input.value]
    });
    medications.push(newMedication);

    input.value = '';
  }
}
