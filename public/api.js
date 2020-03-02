const API = {
  async getLastWorkout() {
    console.log("inside getLastWorkout function")
    let res;
    try {
      res = await fetch("/api/workouts");
      console.log(res)
    } catch (err) {
      console.log('Error getLastWorkOut')
      console.log(err)
    }
    const json = await res.json();
    console.log(json)
    return json[json.length - 1];
  },
  async addExercise(data) {
    console.log("inside addExercise function")
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();
    console.log(json)
    return json;
  },
  async createWorkout(data = {}) {
    console.log("inside createWorkout function")
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();
    console.log(json)
    return json;
  },

  async getWorkoutsInRange() {
    console.log("inside getWorkoutsInRange function")
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();
    console.log(json)
    return json;
  },
};
