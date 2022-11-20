interface ErrorAlertProps {
  type: 'info' | 'danger';
  message: string;
}

const Alert = ({ type, message }: ErrorAlertProps) => {
  const classes =
    type === 'info'
      ? 'bg-blue-100 border-blue-400 text-blue-700'
      : 'bg-red-100 border-red-400 text-red-700';

  return (
    <div className={`border px-4 py-3 m-4 rounded relative ${classes}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;
