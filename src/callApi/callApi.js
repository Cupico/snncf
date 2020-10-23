import superagent from "superagent";

export const getGare = (gare) => {
  return new Promise((resolve, reject) => {
    superagent
      .get(
        `https://data.sncf.com/api/records/1.0/search/?dataset=frequentation-gares&q=&sort=nom_gare&facet=nom_gare&refine.nom_gare=${gare}`
      )
      //.set({ Authorization: `f600e6b7-f14a-45b7-be48-09c127444d37` })
      .set("Accept", "application/json")
      .then((res) => {
        if (res.body) {
          resolve(res.body);
        } else {
          reject(res.body || "An unexpected error has happened.");
        }
      })
      .catch((e) =>
        reject(
          e.response && e.response.body
            ? e.response.body
            : "An unexpected error has happened."
        )
      );
  });
};

export const getAffluence = (time, code_gare) => {
    return new Promise((resolve, reject) => {
      superagent
        .get(
          `https://data.sncf.com/api/records/1.0/search/?dataset=comptage-voyageurs-trains-transilien&q=&rows=20&start=0&facet=tranche_horaire&facet=code_gare&facet=year&refine.tranche_horaire=${time}&refine.code_gare=${code_gare}&refine.year=2019`
        )
        //.set({ Authorization: `f600e6b7-f14a-45b7-be48-09c127444d37` })
        .set("Accept", "application/json")
        .then((res) => {
          if (res.body) {
            resolve(res.body);
          } else {
            reject(res.body || "An unexpected error has happened.");
          }
        })
        .catch((e) =>
          reject(
            e.response && e.response.body
              ? e.response.body
              : "An unexpected error has happened."
          )
        );
    });
  };

