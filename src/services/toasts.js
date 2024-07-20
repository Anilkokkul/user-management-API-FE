const { toast } = require("react-toastify");

export function toastWarn(text) {
  console.log(text);
  toast.warn(text, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
}
