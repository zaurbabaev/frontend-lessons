function UserCard({ user }) {
  return (
    <div className="flex transform flex-col items-center rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-500">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="h-full w-full object-cover"
        />
      </div>

      <h2 className="mb-2 text-center text-xl font-bold text-gray-800">
        {user.firstName} {user.lastName}
      </h2>

      <span className="mb-3 text-center font-semibold text-indigo-500">
        {user.role}
      </span>

      <div className="space-y-1 text-center text-sm text-gray-600">
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Bank Card:</strong> {user.bank.cardNumber}
        </p>
        <p>
          <strong>Address:</strong> {user.address.address}, {user.address.city}
        </p>
        <p>
          <strong>University:</strong> {user.university}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>Title:</strong> {user.company.title}
        </p>
      </div>
    </div>
  );
}

export default UserCard;
