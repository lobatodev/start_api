module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert("users", [
      {
        username: "dev",
        name: "Desenvolvedor",
        email: "dev@mail.com",
        password_hash:
          "$2a$08$e4MnGdGpFYbFdUqLZsJEsOaSRCJlmzc1R1P20oD8MW9UFcxHIaKkK",
        id_user_type: 1,
        uuid: "bc43d264-25fb-4076-9450-a318055ee200",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "admin",
        name: "Administrador",
        email: "admin@mail.com",
        password_hash:
          "$2a$08$dt6.sX9ahPTf2kjYSEHN8.pHjwRzI1TR6lOLMoGyXWpvqVhE2gwjy",
        id_user_type: 2,
        uuid: "bc43d264-25fb-4076-9450-a318055ee201",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "psicologo",
        name: "Psicólogo",
        email: "psicologo@mail.com",
        password_hash:
          "$2a$08$0Zx2UTdcd7pvHKBspWB5KecXRgFSVP1Xak1t.JLF.Ac679L/BGRrG",
        id_user_type: 3,
        uuid: "bc43d264-25fb-4076-9450-a318055ee202",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "paciente",
        name: "Paciente",
        email: "paciente@mail.com",
        password_hash:
          "$2a$08$0Zx2UTdcd7pvHKBspWB5KecXRgFSVP1Xak1t.JLF.Ac679L/BGRrG",
        id_user_type: 4,
        uuid: "bc43d264-25fb-4076-9450-a318055ee203",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        username: "secretaria",
        name: "Secretária",
        email: "secretaria@mail.com",
        password_hash:
          "$2a$08$0Zx2UTdcd7pvHKBspWB5KecXRgFSVP1Xak1t.JLF.Ac679L/BGRrG",
        id_user_type: 5,
        uuid: "bc43d264-25fb-4076-9450-a318055ee204",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
