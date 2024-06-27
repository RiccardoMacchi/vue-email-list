const { createApp } = Vue

createApp({
  data() {
    return {
      emails : []
    }
  },
  methods: {
    getEmailApi(){
        for (let i = 0; i < 10; i++){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((risposta) => {
                console.log(risposta.data.response);
                this.emails.push(risposta.data.response);
                console.log(this.emails)
            });
        }
    }

  },
  mounted(){
    console.log("montata")
    this.getEmailApi()
  }
}).mount('#app')