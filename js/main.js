const { createApp } = Vue

createApp({
  data() {
    return {
      emails : []
    }
  },
  methods: {
    getEmailApi(){

    }

  },
  mounted(){
    console.log("montata")
    for (let i = 0; i < 10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((risposta) => {
            console.log(risposta.data.response);
            this.emails.push(risposta.data.response);
            console.log(this.emails)
        });
    }
  }
}).mount('#app')