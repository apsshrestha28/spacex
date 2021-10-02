const BASE_URL = "https://api.spacexdata.com/v4";

export const Company = {
  getCompanyDetails() {
    return fetch(`${BASE_URL}/company`)
    .then(
      res => {
        return res.json()
      }
    )
  }
}

export const Rocket = {
  getRocketDetails() {
    return fetch(`${BASE_URL}/rockets`)
    .then(
      res => {
        return res.json()
      }
    )
  }
}
  