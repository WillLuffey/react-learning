const getItems = () => {
    fetch('https://www.osrsbox.com/osrsbox-db/items-json-slot/items-2h.json')
      .then(response => {
          return response.json();
      })
      .then(json => {
          return json;
      })
};
  
  export default getItems;