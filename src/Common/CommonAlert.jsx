import { confirmAlert } from "react-confirm-alert";



export function isNullEmpty(e) {

    if (e === null || e === ''|| e===undefined) {
        return true;
    }
    return false;
   }

   export function showAlert(msg){

    confirmAlert({
        title: "Alert!",
        closeOnEscape: false,
        closeOnClickOutside: false,
        message: msg,
        buttons: [
          {
            label: 'Ok',
            onClick: () => { return false }
          },

        ]
      })
}



export function showSuccess(msg){

  confirmAlert({
      message: msg,
      closeOnEscape: false,
      closeOnClickOutside: false,
      buttons: [
        {
          label: 'Ok',
          onClick: () => { return false }
        },

      ]
    })
}


export function validUsername(name){
var  regex = /^[a-zA-Z0-9]*$/
var response=regex.test(name)
return response
}


export function validPassword(password){
  var re =/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-z]).{0,}$/;
  var response = re.test(password)
  return response
} 



export function cookies(name,value,days){
  let date = new Date();
  date.setTime(date.getTime()+(days*24*60*60*1000));
const expires ="expires=" + date.toUTCString();
document.cookie = name +  "=" + value + ";" + expires + ";path=/"
}





