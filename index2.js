import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.esm-browser.min.js';

createApp({
    data() {
        return {
            message: '',
            list: [],
            tempData: {}
        }
    },
    methods: {
        addData() {
            const newData = {
                message: this.message,
                id: new Date().getTime()
            };
            this.list.push(newData);
            this.message = '';
        },
        editData(item) {
            this.tempData = { ...item };
        },
        confirm() {
            this.list.forEach((value, index) => {
                if (value.id === this.tempData.id) {
                    this.list[index] = this.tempData;
                    this.tempData = '';
                }
            });
        },
        removeData(item) {
            this.list.forEach((value, index) => {
                if (value.id === item.id) {
                    this.list.splice(index, 1);
                }
            });
        }
    },
    mounted() {

    },
}).mount('#app');