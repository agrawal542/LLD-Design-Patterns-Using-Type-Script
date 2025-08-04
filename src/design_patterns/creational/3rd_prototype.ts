// // The Prototype Pattern lets you create new objects by cloning existing ones rather than instantiating new ones from scratch. 
// // It’s especially useful when object creation is costly or complex.


// interface Cloneable<T> {
//     clone(): T;
// }


// class DocumentTemplate implements Cloneable<DocumentTemplate> {
//     constructor(
//         public title: string,
//         public content: string,
//         public author: string
//     ) { }

//     clone(): DocumentTemplate {
//         // Creates a deep copy of the object
//         return new DocumentTemplate(this.title, this.content, this.author);
//     }
// }


// const original = new DocumentTemplate(
//   "Standard NDA",
//   "This is a legal agreement...",
//   "Legal Team"
// );

// const copy = original.clone();
// copy.title = "Modified NDA";
// copy.author = "John Doe";

// console.log(original);
// console.log(copy);
