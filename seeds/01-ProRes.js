
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('project_resources').insert([
        { project_id: 1, resource_id: 1 },
        { project_id: 1, resource_id: 2 },
        { project_id: 1, resource_id: 3 },
        { project_id: 1, resource_id: 4 },
        { project_id: 1, resource_id: 5 },
        { project_id: 1, resource_id: 6 },
        { project_id: 1, resource_id: 7 },
        { project_id: 1, resource_id: 10 },
        { project_id: 1, resource_id: 11 },
        { project_id: 1, resource_id: 16 },
        { project_id: 1, resource_id: 17 },
        { project_id: 1, resource_id: 19 },
        { project_id: 1, resource_id: 20 },
        { project_id: 1, resource_id: 24 },
        { project_id: 1, resource_id: 25 },
        { project_id: 1, resource_id: 26 },
        { project_id: 1, resource_id: 27 },
        { project_id: 1, resource_id: 30 },
        { project_id: 1, resource_id: 31 },
        { project_id: 1, resource_id: 32 },
        { project_id: 1, resource_id: 33 },
        { project_id: 1, resource_id: 34 },
        { project_id: 1, resource_id: 35 },
        { project_id: 1, resource_id: 36 },
        { project_id: 1, resource_id: 38 },
        { project_id: 1, resource_id: 39 },
        { project_id: 1, resource_id: 4 },

        { project_id: 2, resource_id: 1 },
        { project_id: 2, resource_id: 2 },
        { project_id: 2, resource_id: 4 },
        { project_id: 2, resource_id: 7 },
        { project_id: 2, resource_id: 8 },
        { project_id: 2, resource_id: 9 },
        { project_id: 2, resource_id: 10 },
        { project_id: 2, resource_id: 11 },
        { project_id: 2, resource_id: 12 },
        { project_id: 2, resource_id: 13 },
        { project_id: 2, resource_id: 14 },
        { project_id: 2, resource_id: 15 },
        { project_id: 2, resource_id: 16 },
        { project_id: 2, resource_id: 17 },
        { project_id: 2, resource_id: 18 },
        { project_id: 2, resource_id: 20 },
        { project_id: 2, resource_id: 21 },
        { project_id: 2, resource_id: 23 },
        { project_id: 2, resource_id: 24 },
        { project_id: 2, resource_id: 25 },
        { project_id: 2, resource_id: 26 },
        { project_id: 2, resource_id: 27 },
        { project_id: 2, resource_id: 28 },
        { project_id: 2, resource_id: 29 },
        { project_id: 2, resource_id: 30 },
        { project_id: 2, resource_id: 31 },
        { project_id: 2, resource_id: 32 },
        { project_id: 2, resource_id: 33 },
        { project_id: 2, resource_id: 34 },
        { project_id: 2, resource_id: 35 },
        { project_id: 2, resource_id: 36 },
        { project_id: 2, resource_id: 37 },
        { project_id: 2, resource_id: 38 },
        { project_id: 2, resource_id: 39 },
        { project_id: 2, resource_id: 40 },
        { project_id: 2, resource_id: 41 },

        { project_id: 3, resource_id: 4 },
        { project_id: 3, resource_id: 10 },
        { project_id: 3, resource_id: 19 },
        { project_id: 3, resource_id: 20 },
        { project_id: 3, resource_id: 23 },
        { project_id: 3, resource_id: 24 },
        { project_id: 3, resource_id: 25 },
        { project_id: 3, resource_id: 26 },
        { project_id: 3, resource_id: 34 },
        { project_id: 3, resource_id: 39 },

        { project_id: 4, resource_id: 1 },
        { project_id: 4, resource_id: 2 },
        { project_id: 4, resource_id: 4 },
        { project_id: 4, resource_id: 7 },
        { project_id: 4, resource_id: 8 },
        { project_id: 4, resource_id: 9 },
        { project_id: 4, resource_id: 10 },
        { project_id: 4, resource_id: 11 },
        { project_id: 4, resource_id: 12 },
        { project_id: 4, resource_id: 13 },
        { project_id: 4, resource_id: 14 },
        { project_id: 4, resource_id: 15 },
        { project_id: 4, resource_id: 16 },
        { project_id: 4, resource_id: 17 },
        { project_id: 4, resource_id: 18 },
        { project_id: 4, resource_id: 20 },
        { project_id: 4, resource_id: 21 },
        { project_id: 4, resource_id: 23 },
        { project_id: 4, resource_id: 24 },
        { project_id: 4, resource_id: 25 },
        { project_id: 4, resource_id: 26 },
        { project_id: 4, resource_id: 27 },
        { project_id: 4, resource_id: 28 },
        { project_id: 4, resource_id: 29 },
        { project_id: 4, resource_id: 30 },
        { project_id: 4, resource_id: 31 },
        { project_id: 4, resource_id: 32 },
        { project_id: 4, resource_id: 33 },
        { project_id: 4, resource_id: 34 },
        { project_id: 4, resource_id: 35 },
        { project_id: 4, resource_id: 36 },
        { project_id: 4, resource_id: 37 },
        { project_id: 4, resource_id: 38 },
        { project_id: 4, resource_id: 39 },
        { project_id: 4, resource_id: 40 },
        { project_id: 4, resource_id: 41 },

        { project_id: 5, resource_id: 4 },
        { project_id: 5, resource_id: 43 },
        { project_id: 5, resource_id: 44 },
        { project_id: 5, resource_id: 45 },
        { project_id: 5, resource_id: 46 },
        { project_id: 5, resource_id: 47 },
        { project_id: 5, resource_id: 48 },
        { project_id: 5, resource_id: 49 },
        { project_id: 5, resource_id: 50 },
        { project_id: 5, resource_id: 54 },
        { project_id: 5, resource_id: 24 },
        { project_id: 5, resource_id: 26 },
        { project_id: 5, resource_id: 12 },
        { project_id: 5, resource_id: 13 },
        { project_id: 5, resource_id: 14 },
        { project_id: 5, resource_id: 7 },
        { project_id: 5, resource_id: 8 },
        { project_id: 5, resource_id: 28 },

        { project_id: 6, resource_id: 4 },
        { project_id: 6, resource_id: 7 },
        { project_id: 6, resource_id: 9 },
        { project_id: 6, resource_id: 10 },
        { project_id: 6, resource_id: 14 },
        { project_id: 6, resource_id: 26 },
        { project_id: 6, resource_id: 39 },
        { project_id: 6, resource_id: 54 },

        { project_id: 7, resource_id: 4 },
        { project_id: 7, resource_id: 43 },
        { project_id: 7, resource_id: 44 },
        { project_id: 7, resource_id: 45 },
        { project_id: 7, resource_id: 46 },
        { project_id: 7, resource_id: 47 },
        { project_id: 7, resource_id: 48 },
        { project_id: 7, resource_id: 49 },
        { project_id: 7, resource_id: 50 },

        { project_id: 8, resource_id: 4 },
        { project_id: 8, resource_id: 51 },
        { project_id: 8, resource_id: 52 },
        { project_id: 8, resource_id: 53 },
      ]);
    });
};
