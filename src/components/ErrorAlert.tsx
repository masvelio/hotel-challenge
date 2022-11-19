interface ErrorAlertProps {
  message: string;
}

const ErrorAlert = ({ message }: ErrorAlertProps) => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 m-4 rounded relative">
      <strong className="font-bold mr-2">Ups!</strong>
      <span>{message}</span>
    </div>
  );
};

export default ErrorAlert;
