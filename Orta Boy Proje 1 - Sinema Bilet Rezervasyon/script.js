const container = document.querySelector('.container')
const count = document.getElementById('count')
const amount = document.getElementById('amount')
const select = document.getElementById('movie')
const seats = document.querySelectorAll('.seat:not(.reserved)')

getFromLocalStorage()
calculateTotal()

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toggle('selected')
        calculateTotal()
    }
})

select.addEventListener('change', function(e) {
    alert('Seçili film değişti!')
    calculateTotal()
})

function calculateTotal() {
    const selectedSeats = container.querySelectorAll('.seat.selected')

    const selectedSeatsArr = [...selectedSeats];
    const seatsArr = [...seats];

    // selectedSeats.forEach(function(seat) {
    //     selectedSeatsArr.push(seat)
    // })

    // seats.forEach(function(seat){
    //     seatsArr.push(seat)
    // })

    let selectedSeatIndexs = selectedSeatsArr.map((e) => {
        return seatsArr.indexOf(e)
    })

    let selectedSeatCount = selectedSeats.length
    count.innerText = selectedSeatCount
    amount.innerText = selectedSeatCount * select.value

    saveToLocalStorage(selectedSeatIndexs)

}

function getFromLocalStorage () {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'))

    if(selectedSeats != null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
    }) 
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')
    
    if(selectedMovieIndex != null) {
      select.selectedIndex = selectedMovieIndex
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs))
    localStorage.setItem('selectedMovieIndex', select.selectedIndex)
}
