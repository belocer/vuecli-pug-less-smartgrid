const todos = {
  state: {
    todos: [],
  },
  actions: {},
  getters: {},
  mutations: {
    csl(state, str) {
      console.log("I'am mutations! from -> " + str.technology);
    }
  }
}

export default todos