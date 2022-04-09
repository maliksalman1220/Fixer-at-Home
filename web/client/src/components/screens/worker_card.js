import React from 'react'
import '../screens/styles/worker.css'

function WorkerCard() {
  return (
    <div class="container workercard_container mt-5 d-flex justify-content-left">
    <div class="card worker_card p-3">
        <div class="d-flex align-items-center">
            <div class="image"> <img src="https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png" class="rounded" width="155"/> </div>
            <div class="ml-3 w-100">
                <h4 class="mb-0 mt-0">Sarat Ahmad</h4>
                <p class="mb-0 card__sender__rating card__sender__rating-4">
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                    <span class="card__sender__rating__star">&#9733;</span>
                  </p>
                <div class="p-2 mt-auto mb-auto bg-primary d-flex justify-content-between rounded text-white stats">
                    <div class="d-flex flex-column"> <span class="articles">Price Range: </span> <span class="number1">Rs 145-200</span> </div>
                </div>
                <div class="button mt-0 d-flex flex-row align-items-center"> 
                <button class="btn  workercard_button btn-sm btn-outline-primary mr-3 w-100">Request</button> 
                <button class="btn workercard_button2 btn-sm btn-primary  ml-3 w-100">View Profile</button> </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default WorkerCard