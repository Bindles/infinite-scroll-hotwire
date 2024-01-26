import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="formelement"
export default class extends Controller {
  static targets = ["submitbtn"]
  connect() {
    console.log('asses')
    this.submitbtnTarget.hidden = false
  }

  remotesubmit() {
    console.log('asa')
    this.submitbtnTarget.click()
  }
}





// import { Controller } from "@hotwired/stimulus"

// // Connects to data-controller="formelement"
// export default class extends Controller {
//   static targets = ["submitbtn"]

//   connect() {
//     console.log('connected')
//     this.submitbtnTarget.hidden = false
//   }

//   remotesubmit() {
//     console.log('remotesubmit')
//     this.submitbtnTarget.click()
//     this.displayFlashMessage()
//   }

//   displayFlashMessage() {
//     const flashNotice = document.querySelector('.flash-notice')
//     if (flashNotice) {
//       flashNotice.textContent = "cool"
//     }
//   }
// }