import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { ArrowDownRight, ArrowRight, ArrowUpRight, GraduationCap, MoreHorizontal, NotepadText } from "lucide-react";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, Sector, XAxis, YAxis } from "recharts";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const data = [
  { name: "Web Development", value: 400 },
  { name: "Data Science", value: 300 },
  { name: "UI/UX Design", value: 300 },
  { name: "Cybersecurity", value: 200 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
      <Sector cx={cx} cy={cy} startAngle={startAngle} endAngle={endAngle} innerRadius={outerRadius + 6} outerRadius={outerRadius + 10} fill={fill} />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const AdminStatistics = () => {
  const { user } = useAuth();
  const email = user?.email;
  const axiosPublic = useAxiosPublic();

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  const { data: purchasedItems = [] } = useQuery({
    queryKey: ["purchasedHistory", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get("/paidCart", { email }); // Send email in the body
      return res.data;
    },
  });

  const { data: blogs = [] } = useQuery({
    queryKey: ["blogs", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get("/blogs");
      return res.data;
    },
  });

  console.log(blogs);

  const queryData = [
    { month: "Jan", posted: 400, answers: 240 },
    { month: "Feb", posted: 300, answers: 456 },
    { month: "Mar", posted: 200, answers: 123 },
    { month: "Apr", posted: 278, answers: 321 },
    { month: "May", posted: 189, answers: 234 },
    { month: "Jun", posted: 239, answers: 123 },
  ];

  console.log(queryData);

  const transactions = purchasedItems.slice(0, 5).map((item, idx) => ({
    id: idx + 1,
    image: item.pic,
    name: item.name,
    date: format(new Date(item.timestamp), "MMM do yyyy"),
    status: "Completed",
    ref: item._id.split("").reverse().join("").slice(0, 8).toUpperCase(),
  }));

  return (
    <div className="p-6 bg-gray-50 min-h-screen my-8 rounded-lg max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Statistics</h1>
        <p className="text-gray-600">An any way to manage sales with care and precision.</p>
      </div>

      {/* Date Filter */}
      <div className="flex justify-between items-center mb-6">
        <button className="px-4 py-2 bg-white rounded-full border flex items-center gap-2">
          January 2025 - {format(new Date(), "MMMM yyyy")}
          <ArrowDownRight className="w-4 h-4" />
        </button>
      </div>

      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
        {/* Update Card */}
        <div className="bg-emerald-900 text-white p-6 rounded-xl">
          <div className="mb-4">
            <span className="inline-flex items-center px-2 py-1 rounded-full bg-red-500/20 text-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" style={{ animationIterationCount: "infinite" }}></span>
              Update
            </span>
          </div>
          <p className="text-sm mb-1">{format(new Date(), "MMM do yyyy")}</p>
          <h3 className="text-xl font-semibold mb-2">Website traffic increased</h3>
          <p className="text-lg">
            <span className="text-green-400">40%</span> in 1 week
          </p>
          <button className="mt-4 text-sm flex items-center text-gray-300 hover:text-white">
            See Statistics <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>

        {/* Net Revenue Card */}
        <div className="flex flex-col justify-evenly bg-white p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600">Net Revenue</h3>
            <button>
              <MoreHorizontal />
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-500">Total revenue by selling books</p>
            <h2 className="text-3xl font-bold">$193,000</h2>
            <p className="flex items-center text-green-600 text-sm">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +35% from last month
            </p>
          </div>
        </div>

        {/* Total Books Sold Card */}
        <div className="flex flex-col justify-evenly bg-white p-6 rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-600">Total Books Sold</h3>
            <button>
              <MoreHorizontal />
            </button>
          </div>

          <div>
            <p className="text-sm text-gray-500">Total quantity of sold books</p>
            <h2 className="text-3xl font-bold">32</h2>
            <p className="flex items-center text-green-600 text-sm">
              <ArrowUpRight className="w-4 h-4 mr-1" />
              +24% from last month
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Transactions */}
        <div className="bg-white p-6 rounded-xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold">Transactions</h3>
            <button>
              <MoreHorizontal />
            </button>
          </div>
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg">
                    <img src={transaction.image} alt={transaction.name} className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`text-sm ${transaction.status === "Completed" ? "text-emerald-600" : "text-amber-600"}`}>{transaction.status}</p>
                  <p className="text-sm text-gray-500">{transaction.ref}</p>
                </div>
              </div>
            ))}

            <Link to="/dashboard/purchasedHistory" className="text-sm flex items-center text-gray-600 hover:text-gray-800">
              View all transactions <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>

        {/* Revenue Chart */}
        <div>
          <div className="bg-white p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-semibold">Queries</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-emerald-700 rounded-full"></div>
                  <span className="text-sm text-gray-600">Posted</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Answers</span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={queryData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Bar dataKey="posted" fill="#047857" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="answers" fill="#a3e635" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <div className="flex justify-end">
                <p className="flex items-center text-green-600 text-sm">
                  <ArrowUpRight className="w-4 h-4 mr-1" />
                  +35% from last month
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* Courses Created */}
            <div className="flex-1 bg-white rounded-2xl p-6" style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{0}</h2>
                  <p className="text-gray-500">Live Courses</p>
                </div>
              </div>
            </div>

            {/* Blogs Written */}
            <div className="flex-1 bg-white rounded-2xl p-6" style={{ boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)" }}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <NotepadText className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{0}</h2>
                  <p className="text-gray-500">Blogs Published</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PieChart width={400} height={400}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          onMouseEnter={onPieEnter}
        />
      </PieChart>
    </div>
  );
};

export default AdminStatistics;

// export default AdminStatistics;
