const createEmploye = (nomeCompleto, ) => {
    return {nome: nomeCompleto, email: nomeCompleto.replace(' ','_') + '@trybe.com'}
};

const newEmployees = (action) => {
    const employees = {
      id1: action('Pedro Guerra'),
      id2: action('Luiza Drumond'),
      id3: action('Carla Paiva'),
    };
    return employees;
  };
console.log(newEmployees(createEmploye));