const skills = [
    {id: 610292, skill: 'resourcefulness', proven: true},
    {id: 420213, skill: 'tenacity', proven: true},
    {id: 136023, skill: 'super-powered mentality', proven: false}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    delete: deleteOne,
    update
  };

  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find((skill) => skill.id === id);
    // Merging updatedSkill into existing skill object's properties
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    const skillIdx = skills.findIndex((t) => t.id === id);
    skills.splice(skillIdx, 1);
  }

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
 