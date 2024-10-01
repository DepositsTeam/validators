# Deposits Validators
## Overview
This repository contains a list of validators to be used with the Vuelidate library for Vue.js. It redefines several 
validators to be consistent with the Deposits internal standards and adds a number of validators that are used across
different projects.

The validators are designed to be used with Vuelidate in Vue.js but can also be used with other libraries that support
custom validators as all the validators consist of pure functions that return a boolean value.

## Installation
To install the validators, simply run the following command in your project directory:
```bash  
npm install @deposits/validators
```

## Available Validation Rules
The following validators are available in this package:

### `accountNumber`
This checks if the value being validated is a valid US account number. It should be a numeric string consisting of between 4-17 digits.

### `ein`
This checks if the value being validated is a valid EIN. It expects a numeric string in the format `XX-XXXXXXX`.

### `email`
This checks if the value being validated is a valid email address.

### `name`
This validates if the value being validated is a valid name. It expects a string with a length between 2 and 40 characters.

### `routing_number`
This checks if the value being validated is a valid US routing number. It should be a numeric string consisting of 9 digits and passes the ABA checksum algorithm.

### `suffix`
This checks if the value being validated is a valid suffix. It expects a string with a length between 2 and 10 characters.