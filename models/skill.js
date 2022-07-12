const skills = [
    {id: 610292, skill: 'resourcefulness', proven: true},
    {id: 420213, skill: 'tenacity', proven: true},
    {id: 136023, skill: 'super-powered mentality', proven: false}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  };

  function getAll() {
    return skills;
  };
 