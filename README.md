# Deposits Validators

## Overview

This repository contains a list of validators to be used with the Vuelidate library for Vue.js. It redefines several
validators to be consistent with the Deposits internal standards and adds a number of validators that are used across
different projects.

The validators are designed to be used with Vuelidate in Vue.js but can also be used with other libraries or frameworks that support
custom validators as all the validators consist of pure functions that return a boolean value.

## Installation

To install the validators, simply run the following command in your project directory:

```bash
npm install @deposits/validators
```

## Basic Usage

Since the package exports pure functions that return Booelan values, you just need to import the validator you need and use it as is or plug it into a validation library.

```javascript
import { email } from "@deposits/validators";
```

### Usage with Vuelidate

```vue
<template>
  <script setup>
    import { email } from "@deposits/validators";
    import { helpers, required } from "@vuelidate/validators";
    import { useVuelidate } from "@vuelidate/core";
    import { reactive } from "vue";

    const payload = reactive({
      email: "",
      password: "",
    });

    const rules = {
      email: {
        required: helpers.withMessage("Email is required", required),
        email: helpers.withMessage("Please enter a valid email", email),
      },
      password: {
        required: helpers.withMessage("Password is required", required),
      },
    };

    const v$ = useVuelidate(rules, payload, { $stopPropagation: true });

    const submit = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        // Submit
      }
    };
  </script>
</template>
```

## Available Validation Rules

The following validators are available in this package:

### `accountNumber`

This checks if the value being validated is a valid US account number. It should be a numeric string consisting of between 4-17 digits.

### `creditCard`

This checks if the value being validated is a valid credit card number. It should be a numeric string consisting of between 13-19 digits and should pass the Luhn's checksum algorithm as well as prefix and suffix checks for different card providers.

### `ein`

This checks if the value being validated is a valid EIN. It expects a numeric string in the format `XX-XXXXXXX`.

### `email`

This checks if the value being validated is a valid email address.

### `itin`

This checks if the value being validated is a valid Individual Taxpayer Identification Number (ITIN). It expects a numeric string in the format 9XX-XX-XXXX

### `naics`

This checks if the value being validated is a valid North American Industry Classification System (NAICS) code.

### `name`

This validates if the value being validated is a valid name. It expects a string with a length between 2 and 40 characters.

### `passportNumber`

This validates if the value being validate is a valid passport number. It expects a string with a length between 6 and 9 characters.

### `routingNumber`

This checks if the value being validated is a valid US routing number. It should be a numeric string consisting of 9 digits and passes the ABA checksum algorithm.

### `ssn`

This checks if the value being validated is a valid Social Security Number (SSN). It expects a numeric string in the format XXX-XX-XXXX

### `swiftCode`

This checks if the value being validated is a valid SWIFT code. It should be an alphanumeric string consisting of 8 or 11 characters.

### `suffix`

This checks if the value being validated is a valid suffix. It expects a string with a length between 2 and 10 characters.

### `zip`

This checks if the value being validated is a zip code. It should be a numeric string with a length of 5 characters.
