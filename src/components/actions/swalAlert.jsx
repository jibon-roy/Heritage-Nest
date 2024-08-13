import Swal from "sweetalert2";

function swalAlert(icon, text, title, confirm) {
  return Swal.fire({
    icon: icon ? icon : null,
    text: text ? text : null,
    title: title ? title : "",
    confirmButtonColor: "#2563eb",
    confirmButtonText: confirm ? confirm : "Ok",
  });
}

export { swalAlert };
