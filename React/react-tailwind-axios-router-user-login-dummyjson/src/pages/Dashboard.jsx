import { useLocation, Navigate } from "react-router-dom";

export default function Dashboard() {
  const { state } = useLocation();
  const user = state?.user;

  console.log("data", user);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
          {/* Header Section */}
          <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}'s profile`}
                className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-lg"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/120";
                }}
              />
              <div>
                <h1 className="mb-2 text-4xl font-bold">
                  {user.firstName} {user.lastName}
                </h1>
                <p className="text-lg text-blue-100">@{user.username}</p>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="p-8">
            <h2 className="mb-6 border-b pb-2 text-2xl font-semibold text-gray-800">
              Şəxsi Məlumatlar
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {user.email && (
                <InfoCard label="Email" value={user.email} icon="📧" />
              )}
              {user.phone && (
                <InfoCard label="Telefon" value={user.phone} icon="📱" />
              )}
              {user.gender && (
                <InfoCard label="Cins" value={user.gender} icon="👤" />
              )}
              {user.age && (
                <InfoCard label="Yaş" value={`${user.age} yaş`} icon="🎂" />
              )}
              {user.birthDate && (
                <InfoCard
                  label="Doğum Tarixi"
                  value={user.birthDate}
                  icon="📅"
                />
              )}
              {user.bloodGroup && (
                <InfoCard label="Qan Qrupu" value={user.bloodGroup} icon="🩸" />
              )}
              {user.height && (
                <InfoCard label="Boy" value={`${user.height} sm`} icon="📏" />
              )}
              {user.weight && (
                <InfoCard label="Çəki" value={`${user.weight} kq`} icon="⚖️" />
              )}
              {user.eyeColor && (
                <InfoCard label="Göz Rəngi" value={user.eyeColor} icon="👁️" />
              )}
              {user.hair?.color && user.hair?.type && (
                <InfoCard
                  label="Saç"
                  value={`${user.hair.color}, ${user.hair.type}`}
                  icon="💇"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// InfoCard komponenti
function InfoCard({ label, value, icon }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-4 transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-center space-x-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-1 text-lg font-semibold text-gray-800">{value}</p>
        </div>
      </div>
    </div>
  );
}
