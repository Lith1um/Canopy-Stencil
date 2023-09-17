(function () {
  document.getElementById('basic-usage-code').code = `<cpy-input label="Basic usage"></cpy-input>
  
<script>
  let value = '';

  document.querySelector('cpy-input').valueChange = (val) => {
    value = val;
  };
</script>`;
  document.getElementById('basic-usage-example').addEventListener('valueChange', (val) => {
    document.getElementById('basic-usage-value').innerText = val.detail;
  });

  document.getElementById('template-form-module').code = `import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

@NgModule({
  imports: [
    FormsModule,
    ...
  ],
  declarations: [
    FormComponent,
    ...
  ],
  ...
})
export class MyModule {}`;

  document.getElementById('template-form-code').code = `import { Component } from '@angular/core';

@Component({
  selector: 'form-comp',
  template: \`
    <cpy-input ngDefaultControl [(ngModel)]="formVal" label="Template Form">
    </cpy-input>
  \`,
})
export class FormComponent {
  formVal = 'I am a text input!';
}`;

  document.getElementById('reactive-form-module').code = `import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ...
  ],
  declarations: [
    FormComponent,
    ...
  ],
  ...
})
export class MyModule {}`;

  document.getElementById('reactive-form-code').code = `import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'form-comp',
  template: \`
    <cpy-input ngDefaultControl [formControl]="formControl" label="Reactive Form">
    </cpy-input>
  \`,
})
export class FormComponent {
  formControl = new FormControl('I am a text input!');
}`;
})();