import { Routes, Route, NavLink, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home.jsx";

const nav = [["Medicines", "/medicines"], ["Personal Care", "/personal-care"], ["Baby Care", "/baby-care"], ["Offers", "/offers"]];

function Layout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <header className="flex items-center justify-between px-4 py-3 sm:px-8">
        <Link to="/" className="text-xl font-extrabold sm:text-2xl"><span className="text-orange-500">CD</span> DavaDay</Link>
        <div className="flex items-center gap-4 text-xs text-slate-600">
          <span className="hidden sm:block">📍 Deliver to <b className="block text-slate-900">Mumbai - 400001</b></span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-sky-500 text-white">R</span>
          <Link to="/cart">🛒</Link>
        </div>
      </header>
      <div className="bg-sky-600 px-3 py-2 text-center text-xs sm:text-sm text-white">
        Welcome to DavaDay! Get 20% off your first order with code <b className="rounded bg-white/25 px-2">FIRST20</b>
      </div>
      <nav className="flex gap-6 overflow-x-auto whitespace-nowrap bg-sky-50 px-4 py-3 text-sm font-medium sm:justify-center sm:gap-8">
        {nav.map(([t, to]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "text-sky-600" : "")}>{t}</NavLink>
        ))}
        <NavLink to="/super-saver" className="text-orange-500">✦ Super Saver</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

const Page = ({ title }) => <div className="p-20 text-center text-2xl font-bold">{title}</div>;

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="medicines" element={<Page title="Medicines" />} />
        <Route path="personal-care" element={<Page title="Personal Care" />} />
        <Route path="baby-care" element={<Page title="Baby Care" />} />
        <Route path="offers" element={<Page title="Offers" />} />
        <Route path="super-saver" element={<Page title="Super Saver" />} />
        <Route path="cart" element={<Page title="Cart" />} />
        <Route path="*" element={<Page title="Page not found" />} />
      </Route>
    </Routes>
  );
}
