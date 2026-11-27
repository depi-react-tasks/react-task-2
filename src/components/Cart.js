// this component takes the data from App.js using props
// we write {allData} to take the allData prop directly
function Cart({ allData }) {
  return (
    <div className="cart">
      <div className="container">
        {/* map makes one div for every object in the array */}
        {allData.map((item) => {
          // if the id is 3 or more show the full data
          if (item.id >= 3) {
            return (
              <div key={item.id}>
                <h2>My Name is {item.firstName} {item.lastName}</h2>
                <h2>My color is {item.color}</h2>
                <h5>My id is {item.id}</h5>
                <hr></hr>
              </div>
            );
          } else if (item.id == 1) {
            // only the first one comes here
            return (
              <div key={item.id}>
                <h2>Not In Range</h2>
              </div>
            );
          } else {
            // the rest (id 2) comes here
            return (
              <div key={item.id}>
                <h1>Miss</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
