import Header from "./components/Header";
import Footer from "./components/Footer";
import UserList from "./components/UserList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <UserList />
      <Footer />
    </div>
  );
}
