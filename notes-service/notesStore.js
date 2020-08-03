let notes = [
  { id: 1, name: "Todos", note: "Grocieries, Fix port light, Wash car" },
  { id: 2, name: "Insurance Meeting", note: "Buy good insurance from a good insurance company." },
  { id: 1, name: "Team Meeting", note: "Make my team do more but with a smile." },
]

function get() {
  return notes
}

function insert( note ) {
  notes.push( note )
  return notes
}

module.exports = {
  get,
  insert
}