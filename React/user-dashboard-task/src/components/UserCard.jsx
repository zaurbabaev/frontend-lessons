function UserCard({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl">

      <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-indigo-500">
        <img
          src={user.image}
          alt={`${user.firstName} ${user.lastName}`}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">
        {user.firstName} {user.lastName}
      </h2>

      <span className="text-indigo-500 font-semibold mb-3 text-center">{user.role}</span>

      <div className="text-gray-600 text-sm space-y-1 text-center">
        <p><strong>Age:</strong> {user.age}</p>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Bank Card:</strong> {user.bank.cardNumber}</p>
        <p><strong>Address:</strong> {user.address.address}, {user.address.city}</p>
        <p><strong>University:</strong> {user.university}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Title:</strong> {user.company.title}</p>
      </div>
    </div>
  );
}

export default UserCard;
