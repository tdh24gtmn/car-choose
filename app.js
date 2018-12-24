const car = (name, model, owner, year, phone, image) => ({
  name,
  model,
  owner,
  year,
  phone,
  image
})
const log = (text, type, date = new Date()) => ({
  text,
  type,
  date
})

const cars = [
  car('Ford', 'Focus', 'Max', '2016', '+7 234 234 56 78', 'img/ford-focus.jpeg'),
  car('Ford', 'Mondeo', 'Vladimie', '2018', '+7 999 444 23 45', 'img/ford-mondeo.jpg'),
  car('Porsce', 'Panamera', 'Irina', '2015', '+7 111 222 33 44', 'img/panamera.jpg')

]


new Vue({
  el: '#app',
  data: {
    cars: cars,
    car: cars[0],
    selectedCarIndex: 0,
    phoneVisibility: false,
    search: '',
    modalVisibility: false,
    logs: []

  },
  methods: {
    selectCar(index) {
      this.car = cars[index]
      this.selectedCarIndex = index
    },
    newOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
      )
    },
    cancelOrder() {
      this.modalVisibility = false
      this.logs.push(
        log(`Cancelled order: ${this.car.name} - ${this.car.model}`, 'cnl')
      )
    }
  },
  computed: {
    phoneBtnText() {
      return this.phoneVisibility ? 'Hide phone' : 'Show phone'
    },
    filteredCars() {
      return this.cars.filter(car => {
        return car.name.indexOf(this.search) > -1 || car.model.indexOf(this.search) > -1
      })
    }
  },
  filters: {
    date(value) {
      return value.toLocaleString()
    }
  }
})