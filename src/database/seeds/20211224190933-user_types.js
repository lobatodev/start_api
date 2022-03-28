module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("user_types", [
      {
        description: "Desenvolvedor",
      },
      {
        description: "Administrador",
      },
      {
        description: "Psicólogo",
      },
      {
        description: "Paciente",
      },
      {
        description: "Secretária",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("user_types", null, {});
  },
};
