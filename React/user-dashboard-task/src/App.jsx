import UserList from "./components/userList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
