export default function UserCard({ user }) {
  const { firstName, lastName, image, role } = user;

  const infoList = buildInfoList(user);

  return (
    <div className="hovew-shadow-2xl flex transform flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105">
      <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-500">
        <img
          src={image}
          alt={`${firstName} ${lastName}`}
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="text-center text-xl font-bold text-gray-800">
        {firstName} {lastName}
      </h2>
      <span className="mb-4 font-semibold text-indigo-500">{role}</span>
      <div className="space-y-1 text-center text-sm text-gray-600">
        {infoList.map(
          (item) =>
            item.value && (
              <p key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </p>
            ),
        )}
      </div>
    </div>
  );
}

function buildInfoList(user) {
  return [
    { label: "Age", value: user.age },
    { label: "Gender", value: user.gender },
    { label: "Email", value: user.email },
    { label: "Phone", value: user.phone },
    { label: "Username", value: user.username },
    { label: "Bank Card", value: user.bank?.cardNumber },
    {
      label: "Address",
      value: `${user.address?.address ?? ""} ${user.address?.city ?? ""}`,
    },
    { label: "University", value: user.university },
    { label: "Company", value: user.company?.name },
    { label: "Title", value: user.company?.title },
  ];
}
