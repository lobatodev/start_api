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
        description: "Usuário",
      },
      {
        description: "Cliente",
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("user_types", null, {});
  },
};
