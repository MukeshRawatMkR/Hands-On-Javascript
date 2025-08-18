//1. Visualization of DOM and it's working

/*
HTML -> DOM(tree hierarchy Data structure)
i.e, HTML loaded -> Bytes -> characters -> tokenized representation -> nodes creation -> DOM tree

while creating DOM we also create CSSOM:

CSSOM -> CSS Object Model(Tree based structure)
CSS loaded -> Bytes -> characters -> tokenized representation -> nodes creation -> CSSOM tree

DOM plus CSSOM = Render Tree(in this Render tree, only those elements will render which are visible)

now next steps after Render Tree are:
Layouting (reflow), it means calculating the position and size of each visible element to be displayed on the screen.

final step is:
Painting, it means filling in the pixels for each element on the screen, on the basis of the Render Tree & layouting.
*/