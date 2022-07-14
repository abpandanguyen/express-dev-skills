const skills = [
    {id: 610292, skill: 'resourcefulness', proven: true},
    {id: 420213, skill: 'tenacity', proven: true},
    {id: 136023, skill: 'super-powered mentality', proven: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
  };

  function create(skill) {
    //Add the id
    skill.id = Date.now() % 1000000;
    skill.proven = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  };

  function getAll() {
    return skills;
  };
 