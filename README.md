# JavaScript Null and Undefined Handling in Calculations

This repository demonstrates a common error in JavaScript where null values aren't explicitly handled in calculations, potentially leading to unexpected results or crashes. The original code only considers null values, while the improved version addresses both null and undefined inputs.

## Bug

The `foo` function adds two numbers. The original code fails to handle cases where one or both inputs are `undefined`, leading to `NaN` outputs.

## Solution

The solution enhances the function to explicitly check for both `null` and `undefined` values and handles them gracefully.