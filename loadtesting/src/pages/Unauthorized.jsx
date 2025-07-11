import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Unauthorized Access</h1>
      <p className="mb-6">You don't have permission to access this page.</p>
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-[#27A8C0] text-white rounded hover:bg-[#1f8696]"
      >
        Go Back
      </button>
    </div>
  );
};

export default Unauthorized;