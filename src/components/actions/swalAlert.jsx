import Swal from "sweetalert2";

function swalAlert(icon, text, title) {
  return Swal.fire({
    icon: icon ? icon : null,
    text: text ? text : null,
    title: title ? title : "",
    confirmButtonColor: "#2563eb",
  });
}

export { swalAlert };
