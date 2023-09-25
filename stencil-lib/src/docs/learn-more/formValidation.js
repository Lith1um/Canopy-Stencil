(function () {
  document.getElementById('getting-started-types').code = `// Validators input type
type validators = Array<string | ValidatorEntry | Validator<any>>;

interface ValidatorEntry {
  name: string;
  options?: { [key: string]: any; };
  errorMessage?: ValidatorError;
}

interface Validator<T> {
  validate: (val: T) => boolean;
  errorMessage: ValidatorError;
}

type ValidatorError = (value: unknown) => string`;

  document.getElementById('built-in-validation').code = `<cpy-input label="Form Input"></cpy-input>
<cpy-input-file label="File Input"></cpy-input-file>

<script>
  document.querySelector('cpy-input').validators = [
    'required',
    'email',
    'number',
    'password'
    {name: 'length', options: {min: 4, max: 10}},
    {name: 'numberLength', options: {min: 0, max: 100}},
    {
      name: 'password',
      options: {
        min: 8,
        max: 50,
        upperCaseMin: 1,
        lowerCaseMin: 1,
        digitsMin: 1,
        specialCharsMin: 1,
        repeatCharsMax: 2,
      }
    },
    {name: 'email', errorMessage: (val) => \`\${val} is not a valid email!\`}
  ];

  document.querySelector('cpy-input-file').validators = [
    {name: 'fileSize', options: {min: 1000, max: 1000000}}
  }
</script>`;

  document.getElementById('custom-errors-code').code = `<cpy-input label="Text Input with custom error message">
</cpy-input>

<script>
  document.querySelector('cpy-input').validators = [
    { name: 'required', errorMessage: (val) => \`Don't leave me hanging!\` }
  ];
</script>`;
  document.getElementById('example-error').validators = [{ name: 'required', errorMessage: (val) => `Don't leave me hanging!` }];
  document.getElementById('example-error').markAsTouched();

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
  errorMessage: (val) => \`You must enter an even number, \${val} is not even!\`
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
  (async () => {
    await customElements.whenDefined('cpy-input');
    document.querySelector('cpy-input').markAsTouched();
  })();
</script>`;
})();