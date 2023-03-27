(function () {
  document.getElementById('getting-started-types').code = `// Validators input type
validators: Array<string | ValidatorEntry | Validator<any>>;

export interface ValidatorEntry {
  name: string;
  options?: { [key: string]: any; };
}

interface Validator<T> {
  validate: (val: T) => boolean;
  errorMessage?: string;
}`;

  document.getElementById('built-in-validation').code = `<cpy-input label="Form Input"></cpy-input>

<script>
  document.querySelector('cpy-input').validators = [
    'required',
    'email',
    'number',
    {name: 'length', options: {min: 4, max: 10}},
    {name: 'numberLength', options: {min: 0, max: 100}},
  ];
</script>`;

  document.getElementById('custom-validators-typescript').code = `// Custom validator to check if a number is even
const IsEvenValidator: Validator<string> = {
  validate: (val: string) => {
    // ignore empty values
    val = val ?? '';
    if (val === '') {
      return true;
    }

    // get the value as a number
    const numVal = parseFloat(val);

    // ignore validation if the number is not valid
    if (isNaN(numVal)) {
      return true;
    }
    return numVal % 2 === 0;
  },
  errorMessage: 'You must enter an even number'
}

document.querySelector('cpy-input').validators = [IsEvenValidator];`;

  document.getElementById('input-state-valid').code = `<cpy-input label="Form Input"></cpy-input>

<script>
  (async () => {
    await customElements.whenDefined('cpy-input');
    const isValid = await document.querySelector('cpy-input').isValid();
  })();
</script>`;

  document.getElementById('input-state-mark-touched').code = `<cpy-input label="Form Input"></cpy-input>

<script>
  document.querySelector('cpy-input').markAsTouched();
</script>`;
})();