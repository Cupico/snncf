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


  export const getCoordinates = (nameGare) => {
    return new Promise((resolve, reject) => {
      superagent
        .get(
          `https://dataratp2.opendatasoft.com/api/records/1.0/search/?dataset=positions-geographiques-des-stations-du-reseau-ratp&q=&facet=stop_name&refine.stop_name=${nameGare}`
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



  // NEW VERSION FOR RER


  export const getRer = () => {
    return new Promise((resolve, reject) => {
      superagent
        .get(
          `https://data.iledefrance.fr/api/records/1.0/search/?dataset=lignes-par-gare-sur-le-reseau-transilien&q=&rows=70&facet=rer&facet=a&refine.rer=1&refine.a=1`
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

  export const getCoordinatesRer = (code) => {
    return new Promise((resolve, reject) => {
      superagent
        .get(
          `https://data.iledefrance.fr/api/records/1.0/search/?dataset=gares-et-points-darrets-du-reseau-transilien&q=&facet=code_uic&facet=libelle_point_d_arret&facet=nom_gare&facet=commune&facet=zone_navigo&facet=gare_non_sncf&refine.code_uic=${code}`
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



  export const getAffluenceRER = (code, time) => {
    return new Promise((resolve, reject) => {
      superagent
        .get(
          `https://data.iledefrance.fr/api/records/1.0/search/?dataset=voyageurs-montant-en-gare-sur-le-reseau-transilien&q=&facet=nom_gare&facet=type_jour&facet=date_comptage&facet=ligne&facet=tranche_horaire&facet=code_gare&refine.code_gare=${code}&refine.type_jour=JOB&refine.tranche_horaire=${time}`
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
