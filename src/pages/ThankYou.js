import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-green-600">Thank You!</h1>
      <p className="mt-4 text-lg">Your purchase was successful.</p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Return to Home
      </button>
    </div>
  );
}
