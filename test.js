let a = [{id: 0, name: 'a'}, {id: 1, name: "b"}]
let b = a.map(i => {
  let obj = {id: i.id, name: 'x'+i.name}
  return obj
})
console.log(b)