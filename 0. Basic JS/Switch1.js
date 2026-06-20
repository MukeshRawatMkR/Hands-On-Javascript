// It follow Strict equality (===), no coercion
// Note: in switch -> NaN never matches anything (even itself)

let namee="Mukesh Rawat";
switch (namee) {//can write value of expression in here. 
    case 'Mukesh':
        console.log("Mukesh");
        break;

    case 'Mukesh Rfawat':
        console.log("Mukesh Rawatt");
        break;

    default:
        console.log("Error Occurered!");
        break;
}


/*
Strict equality — switch uses ===, no type coercion (5 !== "5").
Fall-through — missing break runs into the next case.
default placement — can be anywhere, still falls through if no break.
Block scope clash — let/const across cases without {} throws SyntaxError.
Duplicate cases — no error, but only the first match ever executes.
NaN never matches — not even case NaN, due to strict equality.
switch(true) trick — used for range/condition checks instead of if-else.
Grouped cases — stacking cases with no code = shared logic (intentional fall-through).
*/