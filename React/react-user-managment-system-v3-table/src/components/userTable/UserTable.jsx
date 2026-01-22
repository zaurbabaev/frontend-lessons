export default function UserTable({ users, onEdit, onDelete }) {
  console.log(users);
  if (users.length === 0) {
    return (
      <div className="mt-20 flex flex-col items-center justify-center">
        <div className="mb-4 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 p-8">
          <svg
            className="h-24 w-24 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <p className="text-xl font-semibold text-slate-700">No users yet</p>
        <p className="mt-2 text-slate-500">
          Click "Add User" to create your first user
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase">
                #
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase">
                Profile
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase">
                Username
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase">
                First Name
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold tracking-wider uppercase">
                Last Name
              </th>
              <th className="px-6 py-4 text-center text-sm font-semibold tracking-wider uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className="transition-all duration-200 hover:bg-blue-50"
              >
                <td className="px-6 py-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-sm font-bold text-blue-600">
                    {index + 1}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="relative">
                    {user.image ? (
                      <img
                        src={user.image}
                        alt={user.username}
                        className="h-12 w-12 rounded-full object-cover ring-2 ring-blue-200"
                      />
                    ) : (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-lg font-bold text-blue-600 ring-2 ring-blue-200">
                        {user.username?.charAt(0)?.toUpperCase() || "?"}
                      </div>
                    )}
                    <div className="absolute -right-1 -bottom-1 h-4 w-4 rounded-full border-2 border-white bg-green-500"></div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-slate-800">
                    {user.username}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-slate-600">{user.firstName}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-slate-600">{user.lastName}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(user)}
                      className="group rounded-lg bg-blue-50 p-2 transition-all duration-200 hover:bg-blue-600 hover:shadow-md"
                      title="Edit"
                    >
                      <svg
                        className="h-5 w-5 text-blue-600 transition-colors group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => onDelete(user.id)}
                      className="group rounded-lg bg-red-50 p-2 transition-all duration-200 hover:bg-red-600 hover:shadow-md"
                      title="Delete"
                    >
                      <svg
                        className="h-5 w-5 text-red-600 transition-colors group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
