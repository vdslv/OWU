let calc = Vue.extend({
    template: `<div>
                    <button type="button" @click="incByOne">+1</button>
                    <button type="button" @click="decrByOne">-1</button>
                    <button type="button" @click="incByHundred">+100</button>
                    <button type="button" @click="decrByHundred">-100</button>
                    <button type="button" @click="clear">clear</button>
                    <div>Counter: {{counter}}</div>
                    <div>
                        <input id="pole" type="number">
                        <button id="add" @click="add">Add</button>
                    </div>
                </div>`,
    methods: {
        checker: function () {
           if(this.counter<0) {
               this.counter = 0
           }
        },
        incByOne: function () {
            this.counter+=1
            this.checker();
        },
        incByHundred: function () {
            this.counter+=100
        },
        decrByOne: function () {
            this.counter-=1
            this.checker();
        },
        decrByHundred: function () {
            this.counter-=100
            this.checker();
        },
        clear: function () {
            this.counter = 0;
        },
        add: function () {
            let inp = document.getElementById('pole').value;
            this.counter+= Number(inp);
        }

    },
    data: function () {
       return {
            counter: 0
        }
    }
    });

let calcComponent = Vue.component('calc', calc);

let calcFunc = new Vue({
    el: '#app',
});
