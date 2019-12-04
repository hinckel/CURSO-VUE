new Vue({
    el: '#desafio',
    data: {
        nome: 'Hinckel',
        idade: 26,
        imagem: 'https://i.udemycdn.com/user/200_H/34967356_a2e8.jpg'
    },
    methods: {
        idadeVz3() {
            return this.idade * 3
        }
    }
})