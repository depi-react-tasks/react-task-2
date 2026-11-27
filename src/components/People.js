import Person from './Person';

// array of objects, every object is one person
const people = [
  { id: 1, name: 'Ahmed Mahdy', color: 'black' },
  { id: 2, name: 'Youssef Osama', color: 'white' },
  { id: 3, name: 'Mariam Ali', color: 'green' },
  { id: 4, name: 'Jana Omar', color: 'blue' },
  { id: 5, name: 'Hana Mohamed', color: 'yellow' },
];

function People() {
  return (
    <div className="people">
      <div className="container">
        {/* map takes every object from the array and makes a Person component with it */}
        {people.map((person) => (
          <Person key={person.id} id={person.id} name={person.name} color={person.color} />
        ))}
      </div>
    </div>
  );
}

export default People;
