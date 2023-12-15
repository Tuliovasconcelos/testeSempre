import Swal from 'sweetalert2';

interface SweetAlertProps {
  title: string;
  text: string | unknown;
  icon: 'success' | 'error' | 'warning' | 'info' | 'question';
}

const SweetAlert: React.FC<SweetAlertProps> = ({ title, text, icon }) => {
  Swal.fire({
    title,
    text: text as string,
    icon,
  });

  return null;
};

export default SweetAlert;
