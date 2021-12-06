const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const studentsSkills = (student) => {
  const skills = Object.keys(student);
  const values = Object.values(student);
  for (let i in skills) {
    console.log(`${skills[i]}, Nível: ${values[i]} `);
  }
}
studentsSkills(student1);
studentsSkills(student2);
