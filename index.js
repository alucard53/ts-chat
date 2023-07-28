async function dofetch() {
  const data = await fetch("http://localhost:6969/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
	console.log(data);
  const res = await data.json();
  console.log(res.name);
}

dofetch();

/*//   const data = await fetch("http://localhost:4000/graphql", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       query,
//       variables: {name},
//     }),
//   });

//   books_by_auth = (await data.json())
// 		.data
// 		.author_by_name
// 		.books;

// 	console.log(books_by_auth);
// 
*/
