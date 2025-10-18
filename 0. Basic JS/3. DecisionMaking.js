/* 
Here are some lesser-known facts about decision-making in JavaScript:

1. **Falsy Values**: In conditionals, values like `0`, `""`, `null`, `undefined`, `NaN`, and `false` are all treated as `false`.
2. **Switch Statement Fallthrough**: If you omit `break`, execution continues to the next case, which can cause bugs.
3. **Ternary Operator**: You can use `condition ? expr1 : expr2` for concise decisions.
4. **Short-circuit Evaluation**: Logical operators (`&&`, `||`) can be used for conditional execution without `if`.
5. **Optional Chaining**: `obj?.prop` prevents errors when accessing nested properties in decisions.
6. **Type Coercion**: `==` does type conversion, which can lead to unexpected results; prefer `===` for strict comparison.
7. **Switch with Expressions**: The `switch` expression can be any value, not just numbers or strings.
*/

//if, else, else-if

if (1) {
    // code if condition1 is true
}
else if (0) {
    // code if condition2 is true   
}
else{
// if above conditions are false
};

