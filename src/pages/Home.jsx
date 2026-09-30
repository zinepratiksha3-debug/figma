import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { frequent, categories, trending, deals, reviews } from "../data.js";
import {
  CircleCheck, Award, CreditCard, RotateCcw, RefreshCw, Bell, Truck, Tag, Mail, Lock,
  Crown, Headphones, BarChart3, ClipboardList, ShieldCheck, Users, Star,
  PiggyBank, Pill, ArrowRight, TrendingUp, Info, User, ChevronLeft, ChevronRight, Heart, Download, Play, ShieldPlus, IndianRupee, HeartPulse,
} from "lucide-react";

const Wrap = ({ children, className = "" }) => <section className={`mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8 ${className}`}>{children}</section>;
const Head = ({ tag, title, sub, to, link = "See all", tagClass = "text-sky-600" }) => (
  <div className="mb-5 flex items-end justify-between gap-3">
    <div>
      {tag && <p className={`mb-1 text-[11px] font-bold ${tagClass}`}>{tag}</p>}
      <h2 className="text-2xl font-extrabold">{title}</h2>
      {sub && <p className="text-sm text-slate-400">{sub}</p>}
    </div>
    {to && <Link to={to} className="text-sm font-semibold text-sky-500">{link} ›</Link>}
  </div>
);
const Box = ({ className = "", ...p }) => <div className={`rounded-2xl border border-slate-100 bg-white shadow-sm ${className}`} {...p} />;
const Old = ({ v }) => <s className="ml-1 text-xs text-slate-400">₹{v}</s>;

function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-sky-50 to-white">
      <div className="px-6 pb-24 pt-8 lg:px-[4%]">

        {/* Search */}
        <div className="mx-auto max-w-2xl">
          <div className="mb-2 flex justify-between text-sm font-bold">
            <span>What are you looking for?</span>

            <Link to="/upload" className="uppercase">
              Upload now ›
            </Link>
          </div>

          <div className="flex items-center rounded-full bg-white py-2 pl-5 pr-2 shadow-lg">
            <span className="mr-3 text-xs text-slate-400">
              🔍
            </span>

            <input
              className="flex-1 text-sm outline-none placeholder:text-slate-400"
              placeholder="Search medicines, vitamins..."
            />

            <button className="rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-white">
              <span className="hidden sm:inline">
                Search Medicines
              </span>

              <span className="sm:hidden">
                Search
              </span>
            </button>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative mx-auto mt-10 min-h-[430px] max-w-7xl md:mt-14">

          {/* LEFT CONTENT */}
          <div className="relative z-20 max-w-xl pt-8 md:pt-14 lg:ml-[5%]">

            <span className="inline-block rounded-full bg-sky-100 px-3 py-1.5 text-xs font-medium text-sky-600">
              🔗 Licensed Online Pharmacy
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Say Hi 👋 to Big Savings on Every Medicine
            </h1>

            <button className="mt-6 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white">
              Get App
            </button>

            <p className="mt-6 flex flex-wrap gap-5 text-xs font-medium text-green-600">
              <span>🛡 Licensed Pharmacy</span>

              <span>✔ 100% Genuine Products</span>

              <span>◷ 2–4 Hour Delivery</span>
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="/banners/docter.png"
            alt="Doctor"
            className="
              pointer-events-none
              absolute
              bottom-0
              right-0
              z-10
              hidden
              h-64
              object-contain
              object-bottom
              sm:block
              md:h-[380px]
              lg:h-[470px]
            "
          />

        </div>

        {/* Explore */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[10px] tracking-widest text-sky-500">
          ⌄
          <br />
          EXPLORE
        </div>

      </div>
    </div>
  );
}

const Login = () => (
  <Wrap className="!pb-0 !pt-4">
    <div className="flex flex-col items-start justify-between gap-3 rounded-2xl border border-sky-100 bg-sky-50 px-5 py-4 sm:flex-row sm:items-center">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-500"><User size={16} /></span>
        <div>
          <p className="text-sm font-bold text-slate-900">Welcome to DavaDay</p>
          <p className="text-[11px] text-slate-500">Log in for faster checkout, order history and exclusive deals</p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <Link to="/login" className="rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold text-white">Log In</Link>
        <Link to="/signup" className="rounded-full bg-white px-5 py-2 text-xs font-semibold text-slate-800 shadow-sm">Sign Up</Link>
      </div>
    </div>
    <div className="mt-6 border-b border-slate-100" />
  </Wrap>
);

const banners = [
  { src: "/banners/1.png", title: "Super Saver", sub: "Biggest discounts on everyday medicines", bg: "from-sky-100 to-orange-100", color: "text-orange-500" },
  { src: "/banners/2.png", title: "Stronger Together, Against Cancer", sub: "Compassionate care. Advanced treatment.", bg: "from-blue-50 to-indigo-100", color: "text-blue-700" },
  { src: "/banners/3.png", title: "Better Health, Every Day", sub: "Your trusted partner for medicines & expert care", bg: "from-sky-50 to-blue-100", color: "text-blue-700" },
];

const Banners = () => (
  <Wrap className="!py-6">
    <div className="flex gap-5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {banners.map((b) => (
        <Link to="/offers" key={b.src} className={`relative h-[180px] w-[88%] shrink-0 overflow-hidden rounded-xl bg-gradient-to-br p-5 sm:w-[380px] ${b.bg}`}>
          <p className="text-xs font-bold text-orange-500">DavaDay</p>
          <h3 className={`mt-2 max-w-[60%] text-2xl font-extrabold leading-tight ${b.color}`}>{b.title}</h3>
          <p className="mt-1 max-w-[55%] text-[11px] text-slate-600">{b.sub}</p>
          <img src={b.src} alt="" onError={(e) => (e.currentTarget.style.display = "none")} className="absolute inset-0 h-full w-full object-cover" />
        </Link>
      ))}
    </div>
  </Wrap>
);

const Logo = ({ className = "" }) => (
  <span className={`inline-flex items-center gap-2 font-extrabold tracking-tight text-slate-900 ${className}`}>
    <svg width="42" height="24" viewBox="0 0 44 24" fill="none" strokeWidth="4.5">
      <rect x="2.5" y="3" width="24" height="18" rx="9" stroke="#F97316" />
      <rect x="17.5" y="3" width="24" height="18" rx="9" stroke="#0EA5E9" />
    </svg>
    DavaDay
  </span>
);

const TrustIcon = () => (
  <svg width="46" height="46" viewBox="0 0 40 40" className="mx-auto">
    <path d="M20 3 34 8v11c0 9-6 15-14 18C12 34 6 28 6 19V8Z" fill="#FFF7ED" stroke="#F97316" strokeWidth="3" strokeLinejoin="round" />
    <path d="M20 12v14M13 19h14" stroke="#2563EB" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);
const RupeeIcon = () => (
  <svg width="46" height="46" viewBox="0 0 40 40" className="mx-auto">
    <circle cx="20" cy="20" r="17.5" fill="#FFF7ED" stroke="#F97316" strokeWidth="3" />
    <circle cx="20" cy="20" r="12.5" fill="none" stroke="#FDBA74" strokeWidth="1.5" />
    <text x="20" y="27" textAnchor="middle" fontSize="19" fontWeight="800" fill="#EA580C">₹</text>
  </svg>
);

const PiggyIcon = () => (
  <svg width="54" height="46" viewBox="0 0 64 54" fill="none" className="mx-auto">
    <polygon points="29,0 39,0 34,8" fill="#F97316" />
    <g stroke="#0EA5E9" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="32" cy="29" rx="20" ry="14.5" />
      <path d="M22 42V50H28V43.4M36 43.4V50H42V42" />
      <rect x="50" y="24" width="9" height="10" rx="3.5" />
      <path d="M41 15.5 45 8 49 17" />
      <path d="M12.5 26C6 25 5 18 10 17.5" />
      <circle cx="45" cy="26" r="1.2" fill="#0EA5E9" />
    </g>
    <path d="M24 16h9" stroke="#F97316" strokeWidth="2.6" strokeLinecap="round" />
  </svg>
);

const promoFeatures = [
  { icon: <TrustIcon />, title: "Trust", text: "Verified medicines" },
  { icon: <RupeeIcon />, title: "Affordability", text: "Fair, honest pricing" },
  { icon: <PiggyIcon />, title: "Savings", text: "Big on health, light on cost" },
  { icon: <Truck size={46} strokeWidth={1.4} className="mx-auto text-blue-600" />, title: "Convenience", text: "Fast & easy delivery" },
];

const phoneRows = [
  [ShieldPlus, "Trust", "Verified medicines", "text-orange-500"],
  [IndianRupee, "Affordability", "Fair, honest pricing", "text-orange-500"],
  [PiggyBank, "Savings", "Big on health, light on cost", "text-sky-500"],
  [Truck, "Convenience", "Fast & easy delivery", "text-blue-600"],
];


const Promo = () => (
  <Wrap>
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="/banners/promo.png"
        alt="Healthcare Banner"
        className="h-auto w-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  </Wrap>
);


const Categories = () => (
  <Wrap className="bg-sky-50/60 !max-w-none">
    <div className="mx-auto max-w-6xl">
      <Head tag="BROWSE" title="Popular Categories" sub="Everything you need, neatly organised" to="/medicines" />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {categories.map(([n, c, s, i, bg]) => (
          <div key={n} className="text-center">
            <Box className="p-4"><div className={`mx-auto mb-2 grid h-11 w-11 place-items-center rounded-xl ${bg}`}>{i}</div><b className="text-sm">{n}</b><p className="text-[11px] text-slate-400">{c} products</p></Box>
            <p className="mt-3 text-[11px] text-slate-400">{s}</p>
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

const Frequent = () => {
  const ref = useRef(null);

  const scroll = (dir) => {
    ref.current?.scrollBy({
      left: dir * ref.current.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <Wrap>
      {/* Header */}
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
            Frequently Ordered
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Popular medicines at the best prices
          </p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-700"
          >
            <ChevronRight size={16} />
          </button>

          <Link
            to="/medicines"
            className="ml-2 flex items-center text-xs font-semibold text-sky-500"
          >
            View All
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>

      {/* Products */}
      <div
        ref={ref}
        className="flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {frequent.map(([cat, n, b, p, o, off], i) => (
          <div
            key={n}
            className="shrink-0 basis-[calc(50%_-_8px)] snap-start overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_2px_12px_rgba(15,23,42,0.06)] sm:basis-[calc(33.333%_-_11px)] lg:basis-[calc(16.666%_-_13.4px)]"
          >
            {/* Product Image */}
            <div className="relative h-[104px] bg-gradient-to-b from-slate-200 to-slate-100">
              <img
                src={`/products/${i + 1}.png`}
                alt={n}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* Discount */}
              <span className="absolute left-2.5 top-2.5 rounded-full bg-orange-500 px-2 py-0.5 text-[9px] font-bold text-white">
                {off} OFF
              </span>

              {/* Wishlist */}
              <button
                aria-label="Wishlist"
                className="absolute right-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-white text-slate-500"
              >
                <Heart size={12} />
              </button>
            </div>

            {/* Product Details */}
            <div className="p-3.5">
              <p className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                {cat}
              </p>

              <b className="mt-0.5 block text-[13px] text-slate-900">
                {n}
              </b>

              <p className="text-[11px] text-slate-400">
                {b}
              </p>

              {/* Price */}
              <p className="mt-3 text-base font-extrabold text-slate-900">
                ₹{p}

                <s className="ml-1 text-[10px] font-normal text-slate-400">
                  ₹{o}
                </s>
              </p>

              {/* Saving */}
              <p className="mt-0.5 text-[11px] font-medium text-green-600">
                You save ₹{o - p}
              </p>

              {/* Add to Cart */}
              <button className="mt-3 w-full rounded-xl border border-sky-400 py-2 text-xs font-semibold text-sky-500">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </Wrap>
  );
};

function Trending() {
  const tabs = ["All", "Supplements", "Devices", "Skincare", "Diabetes"];
  const [tab, setTab] = useState("All");

  const list = trending.filter(
    (t) => tab === "All" || t[7] === tab
  );

  return (
    <Wrap>
      <Head
        tag="📈 HOT RIGHT NOW"
        tagClass="text-orange-500"
        title="Trending Now"
        sub="Most purchased by customers like you this week"
      />

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`shrink-0 rounded-full border px-4 py-1 text-xs ${
              tab === t
                ? "bg-slate-900 text-white"
                : "text-slate-500"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
        {list.map(([n, b, p, o, badge, off, r], i) => (
          <Box key={n} className="overflow-hidden">

            {/* Product Image */}
            <div className="relative h-24 overflow-hidden bg-slate-100">
              <img
                src={`/trending/${i + 1}.png`}
                alt={n}
                className="h-full w-full object-contain"
              />

              <span className="absolute left-2 top-2 rounded bg-white px-1.5 text-[9px] font-bold text-orange-500">
                {badge}
              </span>

              <span className="absolute right-2 top-2 rounded bg-white px-1.5 text-[9px]">
                {off}
              </span>
            </div>

            {/* Product Details */}
            <div className="p-3">
              <b className="text-xs">{n}</b>

              <p className="text-[10px] text-slate-400">
                {b}
              </p>

              <p className="text-[10px] text-amber-400">
                ★★★★☆
                <span className="text-slate-400"> {r}</span>
              </p>

              <p className="mt-1 font-extrabold">
                ₹{p}
                <Old v={o} />
              </p>

              <button className="mt-2 w-full rounded-md bg-sky-500 py-1.5 text-xs font-semibold text-white">
                Add to Cart
              </button>
            </div>

          </Box>
        ))}
      </div>
    </Wrap>
  );
}

const tone = {
  blue: ["bg-blue-600", "bg-blue-100 text-blue-700"],
  green: ["bg-green-600", "bg-green-100 text-green-700"],
  pink: ["bg-pink-600", "bg-pink-100 text-pink-700"],
  orange: ["bg-orange-600", "bg-orange-100 text-orange-700"],
};

const Deals = () => (
  <Wrap>
    <Head
      tag="EXCLUSIVE"
      tagClass="text-purple-600"
      title="Top Deals"
      sub="Unlock your best healthcare savings today"
      to="/offers"
      link="All deals"
    />

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {deals.map(([n, off, d, tags, c], i) => (
        <Box key={n} className="overflow-hidden">

          {/* Deal Image */}
          <div className="relative h-32 overflow-hidden">
            <img
              src={`/deals/${i + 1}.png`}
              alt={n}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            <span className="absolute right-3 top-3 rounded-full bg-white px-2 py-0.5 text-[10px] text-sky-700">
              {off}
            </span>

            <span className="absolute bottom-3 left-3 font-bold text-white">
              {n}
            </span>
          </div>

          <div className="p-4">
            <p className="text-xs text-slate-500">{d}</p>

            <div className="my-3 flex flex-wrap gap-1.5">
              {tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full px-2 py-0.5 text-[10px] ${tone[c][1]}`}
                >
                  {t}
                </span>
              ))}
            </div>

            <Link
              to="/offers"
              className={`block rounded-lg py-2 text-center text-xs font-semibold text-white ${tone[c][0]}`}
            >
              Shop Now ›
            </Link>
          </div>

        </Box>
      ))}
    </div>
  </Wrap>
);

const generics = [
  { salt: "Azithromycin 500mg", brand: "Azithral 500", maker: "Alembic", gen: "Azithromycin 500", mrp: 132, price: 38 },
  { salt: "Atorvastatin 10mg", brand: "Atorva 10", maker: "Zydus", gen: "Atorvastatin 10", mrp: 145, price: 42 },
  { salt: "Pantoprazole 40mg", brand: "Pantocid 40", maker: "Sun Pharma", gen: "Pantoprazole 40", mrp: 158, price: 52 },
  { salt: "Metformin 500mg", brand: "Glycomet 500", maker: "USV", gen: "Metformin 500", mrp: 48, price: 16 },
];

function Generic() {
  const [sel, setSel] = useState(0);
  const [switched, setSwitched] = useState(false);
  const g = generics[sel];
  const save = g.mrp - g.price;
  const pct = Math.round((save / g.mrp) * 100);
  const label = "text-[10px] font-semibold uppercase tracking-wider text-slate-400";

  return (
    <Wrap className="!max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_16px_rgba(15,23,42,0.05)]">
        {/* Header */}
        <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-green-50 text-green-700"><PiggyBank size={18} /></span>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Save with a Generic Alternative</h3>
              <p className="text-[11px] text-slate-400">Same salt composition · verified lower price</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {generics.map((o, i) => (
              <button key={o.salt} onClick={() => { setSel(i); setSwitched(false); }}
                className={`rounded-full border px-3.5 py-1.5 text-[11px] font-medium ${sel === i ? "border-green-800 bg-green-800 text-white" : "border-slate-200 bg-white text-slate-500"}`}>
                {o.salt}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="relative grid md:grid-cols-2">
          <div className="border-b border-slate-100 p-5 md:border-b-0 md:border-r">
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className={label}>You selected</span>
                <span className="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-500">Brand</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-600 text-white"><Pill size={20} /></span>
                <div><b className="text-sm text-slate-900">{g.brand}</b><p className="text-[11px] text-slate-400">{g.salt}</p><p className="text-[11px] text-slate-400">{g.maker}</p></div>
              </div>
              <p className={`${label} mt-5`}>Price per strip</p>
              <p className="mt-1 text-[32px] font-extrabold leading-none text-slate-200">₹{g.mrp}</p>
              <div className="mt-5 flex justify-between text-[10px] text-slate-400"><span>Cost</span><span>100%</span></div>
              <div className="mt-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          </div>

          <span className="absolute left-1/2 top-1/2 z-10 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-green-300 bg-white text-green-600 md:grid"><ArrowRight size={14} /></span>

          <div className="p-5">
            <div className="rounded-xl border-2 border-green-200 bg-green-50/70 p-4">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-800">Generic option</span>
                <span className="rounded-full bg-green-800 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white">Recommended</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-green-100 text-green-700"><Pill size={20} /></span>
                <div><b className="text-sm text-slate-900">{g.gen}</b><p className="text-[11px] text-slate-400">{g.salt}</p><p className="text-[11px] font-medium text-green-700">DavaGen</p></div>
              </div>
              <p className={`${label} mt-5`}>Price per strip</p>
              <div className="mt-1 flex items-end justify-between">
                <p className="text-[32px] font-extrabold leading-none text-green-800">₹{g.price} <s className="text-sm font-normal text-slate-300">₹{g.mrp}</s></p>
                <span className="rounded-full bg-green-100 px-2.5 py-1 text-[10px] font-bold text-green-700">-{pct}%</span>
              </div>
              <div className="mt-5 flex justify-between text-[10px] text-slate-400"><span>Cost</span><span className="font-medium text-green-700">Only {100 - pct}% of brand</span></div>
              <div className="mt-1.5 h-1.5 rounded-full bg-green-100"><div className="h-full rounded-full bg-green-600" style={{ width: `${100 - pct}%` }} /></div>
            </div>
          </div>
        </div>

        {/* Savings + actions */}
        <div className="px-5 pb-5">
          <div className="flex items-center justify-between rounded-xl border border-green-100 bg-green-50 px-4 py-3">
            <div className="flex items-center gap-3">
              <TrendingUp size={15} className="text-green-700" />
              <div><b className="text-sm text-green-900">You save on this item</b><p className="text-[11px] text-slate-500">Same salt · CDSCO approved substitute</p></div>
            </div>
            <div className="text-right"><p className="text-2xl font-extrabold leading-none text-green-800">₹{save}</p><p className="text-[10px] font-medium text-green-700">{pct}% off</p></div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => setSwitched(true)} className="flex min-w-[240px] flex-1 items-center justify-center gap-2 rounded-xl bg-green-800 py-3.5 text-xs font-semibold text-white md:max-w-[420px]">
              <RefreshCw size={13} /> {switched ? "Switched to generic ✓" : `Switch to generic & save ₹${save}`}
            </button>
            <button onClick={() => setSwitched(false)} className="rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-800">Keep original</button>
            <button className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-400"><Info size={14} /></button>
          </div>
          <p className="mt-4 flex items-center gap-1.5 text-[10px] text-slate-400"><Info size={11} /> Same salt composition and strength per catalogue mapping. Our pharmacy team may review the substitution before dispatch.</p>
        </div>
      </div>
    </Wrap>
  );
}

const plans = [
  {
    name: "BASIC", desc: "Essential healthcare savings", price: "₹299", unit: "/month",
    cta: "Get Started", tone: "bg-green-50 text-green-500",
    features: [[RefreshCw, "Auto Refill"], [Bell, "Priority Reminders"], [Truck, "Free Delivery above ₹500"], [Tag, "5% Extra Savings on Generics"], [Mail, "Email Support"]],
  },
  {
    name: "PREMIUM", desc: "Everything you need, unlocked", price: "₹599", unit: "/month",
    cta: "Subscribe Now", popular: true, tone: "bg-blue-50 text-blue-500",
    features: [[CircleCheck, "Everything in Basic"], [Lock, "Locked Medicine Prices"], [Truck, "Free Delivery on Every Order"], [Tag, "15% Extra Savings"], [Crown, "2x Loyalty Rewards"], [Headphones, "Priority Customer Support"]],
  },
  {
    name: "ANNUAL", desc: "Best value for families", price: "₹4,999", unit: "/year",
    badge: "Save ₹2,189", note: "Billed as ₹4,999 annually · ≈₹417/mo",
    cta: "Choose Annual Plan", tone: "bg-green-50 text-green-500",
    features: [[CircleCheck, "Everything in Premium"], [BarChart3, "Annual Health Report"], [ClipboardList, "Priority Lab Test Booking"], [ShieldCheck, "Dedicated Health Manager"], [Users, "Family Sharing (3 Members)"], [Star, "Exclusive Health Events"]],
  },
];

const Plans = () => (
  <section className="bg-gradient-to-b from-slate-50 to-white px-4 py-12 sm:px-6">
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 text-center">
        <p className="mb-2 flex items-center justify-center gap-1.5 text-[10px] font-bold tracking-wider text-blue-600"><Crown size={11} /> MEMBERSHIP</p>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Unlock Better Healthcare Savings</h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400">Join Dava Day Care Plan and enjoy exclusive pricing, priority healthcare services, faster delivery, and loyalty rewards - all in one membership.</p>
      </div>
      <div className="grid items-start gap-6 md:grid-cols-3">
        {plans.map((p) => {
          const popular = !!p.popular;
          const isAnnual = p.name === "ANNUAL";
          return (
            <div key={p.name} className={`relative rounded-2xl bg-white p-6 ${popular ? "border-t-2 border-blue-600 pb-7 shadow-[0_12px_32px_rgba(37,99,235,0.14)]" : "shadow-[0_4px_20px_rgba(15,23,42,0.07)] " + (isAnnual ? "md:mt-1" : "md:mt-6")}`}>
              {popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold text-white">★ Most Popular</span>}
              {p.badge && <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-green-500 px-3 py-1 text-[10px] font-bold text-white">{p.badge}</span>}
              <p className={`text-[11px] font-bold tracking-widest ${popular ? "text-blue-600" : "text-slate-500"}`}>{p.name}</p>
              <p className="mt-1 text-xs text-slate-400">{p.desc}</p>
              <p className={`mt-5 text-[40px] font-extrabold leading-none tracking-tight ${popular ? "text-blue-600" : "text-slate-900"}`}>{p.price}<span className="ml-1 text-xs font-medium tracking-normal text-slate-400">{p.unit}</span></p>
              {p.note && <p className="mt-2 text-[10px] text-slate-400">{p.note}</p>}
              <ul className="mt-5 space-y-3.5 border-t border-slate-100 pt-5">
                {p.features.map(([Icon, label]) => (
                  <li key={label} className="flex items-center gap-3 text-xs text-slate-700">
                    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${p.tone}`}><Icon size={11} /></span>{label}
                  </li>
                ))}
              </ul>
              <button className={`mt-7 w-full rounded-xl py-3 text-sm font-semibold ${popular ? "bg-blue-600 text-white" : isAnnual ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-800"}`}>{p.cta}</button>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-[11px] text-slate-400">All plans include a 7-day free trial · Cancel anytime · GST applicable</p>
    </div>
  </section>
);

const trustItems = [
  { title: "100% Genuine Medicines", text: "Every product is sourced from licensed manufacturers. FSSAI verified batch by batch.", Icon: CircleCheck, box: "bg-green-50 text-green-500" },
  { title: "Licensed Pharmacy", text: "Government registered, FSSAI certified. Our pharmacists verify every prescription.", Icon: Award, box: "bg-sky-50 text-sky-500" },
  { title: "Secure Payments", text: "256-bit SSL encryption. All payment methods secured. PCI DSS compliant gateway.", Icon: CreditCard, box: "bg-purple-50 text-purple-500" },
  { title: "Easy Returns", text: "Hassle-free return policy. Full refund for any unsealed product within 7 days.", Icon: RotateCcw, box: "bg-orange-50 text-orange-500" },
  { title: "Verified Suppliers", text: "We work only with authorised distributors. Every supply chain link is authenticated.", Icon: CircleCheck, box: "bg-teal-50 text-teal-500" },
];

const Trust = () => (
  <Wrap>
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-5 lg:gap-6">
      {trustItems.map(({ title, text, Icon, box }) => (
        <div key={title} className="min-h-[190px] rounded-2xl border border-slate-100 bg-white p-[18px] shadow-[0_2px_12px_rgba(15,23,42,0.06)]">
          <div className={`grid h-9 w-9 place-items-center rounded-xl ${box}`}><Icon size={16} strokeWidth={2} /></div>
          <h3 className="mt-4 text-[13px] font-bold leading-snug text-slate-900">{title}</h3>
          <p className="mt-2 text-[11px] leading-[1.6] text-slate-400">{text}</p>
        </div>
      ))}
    </div>
  </Wrap>
);

const AppSection = () => (
  <Wrap>
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1a3a] to-[#15274f] text-white">
      <div className="absolute -left-10 -top-20 h-64 w-64 rounded-full bg-white/[0.03]" />
      <div className="relative grid items-center gap-10 px-6 py-10 sm:px-12 md:grid-cols-2 md:py-14">
        {/* Left */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-400/15 px-3 py-1.5 text-xs font-medium text-sky-400"><Download size={12} /> Mobile App</span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">Healthcare at <span className="block text-sky-400">Your Fingertips</span></h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">Order medicines, upload prescriptions, consult doctors, and track your health — all from your phone.</p>
          <button className="mt-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-left">
            <Play size={16} fill="currentColor" />
            <span><span className="block text-[9px] font-normal text-slate-300">Get it on</span><span className="text-sm font-bold">Google Play</span></span>
          </button>
          <div className="mt-8 flex gap-10 border-t border-white/10 pt-5">
            {[["4.8★", "App Rating"], ["2M+", "Downloads"], ["#1", "Pharmacy App"]].map(([a, b]) => (
              <div key={b}><p className="text-sm font-bold">{a}</p><p className="mt-0.5 text-[11px] text-slate-500">{b}</p></div>
            ))}
          </div>
        </div>

        {/* Right: phone */}
        <div className="relative flex min-h-[380px] items-center justify-center">
          <div className="absolute h-[300px] w-[300px] rounded-full bg-sky-400/10 sm:h-[340px] sm:w-[340px] md:-translate-x-16" />
          <div className="relative h-[340px] w-[220px] overflow-hidden rounded-[32px] border border-white/30 bg-white/10 shadow-2xl">
            <img src="/banners/d2.jpg" alt="docter"  className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1a3a]/10 via-[#0f1a3a]/40 to-[#0f1a3a]/80" />
            <div className="absolute inset-x-5 top-[48%] text-center">
              <p className="text-sm font-semibold">Your Health Hub</p>
              <div className="mx-auto mt-2 h-px w-full bg-sky-400/70" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["Medicines", "Lab Tests", "Consult", "Refill"].map((t) => (
                  <span key={t} className="rounded-full border border-white/20 bg-white/15 py-1.5 text-[10px] font-medium">{t}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute right-2 top-10 rounded-xl bg-white px-3.5 py-2.5 text-slate-900 shadow-xl sm:right-10 md:right-2 lg:right-10">
            <p className="text-[11px] font-bold">Order Delivered 🎉</p>
            <p className="text-[10px] text-slate-500">Dolo 650 · Just now</p>
          </div>
        </div>
      </div>
    </div>
  </Wrap>
);

const Reviews = () => (
  <Wrap className="bg-slate-50 !max-w-none">
    <div className="mx-auto max-w-6xl">
      <div className="mb-6 text-center"><p className="text-[11px] font-bold text-sky-500">REVIEWS</p><h2 className="text-3xl font-extrabold">What Customers Say</h2><p className="text-sm"><span className="text-amber-400">★★★★★</span> <b>4.9</b> <span className="text-xs text-slate-400">· 50,000+ verified reviews</span></p></div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map(([n, c, t, bg]) => (
          <Box key={n} className="p-5"><p className="text-xs text-amber-400">★★★★★</p><p className="my-3 text-xs leading-relaxed">"{t}"</p>
            <div className="flex items-center gap-2"><span className={`grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white ${bg}`}>{n.split(" ").map((w) => w[0]).join("")}</span><div><b className="text-xs">{n}</b><p className="text-[10px] text-slate-400">{c} <span className="rounded bg-green-50 px-1 text-green-600">✓ Verified</span></p></div></div>
          </Box>
        ))}
      </div>
    </div>
  </Wrap>
);

export default function Home() {
  return <><Hero /><Login /><Banners /><Frequent /><Promo /><Categories /><Trending /><Deals /><Generic /><Plans /><Trust /><AppSection /><Reviews /></>;
}