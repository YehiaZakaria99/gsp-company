import React from "react";
import mainImg from "/AboutPages/owned-machines/img.webp";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import machinesData from "../../Data/machinesData.json";

const { ownedMachinesData } = machinesData;

const COLORS = [
  "#292C62",
  "#075863",
  "#F9A825",
  "#D32F2F",
  "#388E3C",
  "#1976D2",
  "#7B1FA2",
  "#F57C00",
  "#455A64",
  "#0097A7",
];

export default function OwnedMachines() {
  const topMachines = ownedMachinesData
    .sort((a, b) => b.quantity - a.quantity)
    .slice(0, 6);

  return (
    <>
      <section className="our-man-power bg-primary/20 py-24 pt-20">
        <div
          className="relative px-6 md:px-16 mb-20 flex flex-col-reverse md:flex-row items-center gap-10 bg-cover h-[300px] md:h-[450px] lg:h-[500px] bg-fixed bg-center shadow-xl overflow-hidden"
          style={{ backgroundImage: `url(${mainImg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-hover/50 to-primary/80 z-10" />
          <div className="md:w-1/2 space-y-4 z-20 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
              Owned Machines
            </h1>

            <p className="text-white/90 text-lg md:text-xl max-w-md font-semibold">
              Showcasing the scale and expertise of our owned machines.
            </p>
          </div>
        </div>

        <div className="px-4 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Table Section */}
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-4 py-3">#</th>
                    {Object.entries(ownedMachinesData[0]).map(([label]) => (
                      <>
                        <th className="px-4 py-3 capitalize">{label}</th>
                      </>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/20 text-primary">
                  {ownedMachinesData.reverse().map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-hover hover:text-white transition-all duration-300"
                    >
                      <td className="px-4 py-3 font-medium">{index + 1}</td>
                      {Object.entries(item).map(([label, value]) => (
                        <td className="px-4 py-3">{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pie Chart Section */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center overflow-auto">
              <h2 className="text-xl font-bold mb-4 text-primary">
                Top 6 Quantities by Machines
              </h2>
              <div className="w-full h-80 ">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topMachines}
                      dataKey="quantity"
                      nameKey="description"
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      label
                    >
                      {topMachines.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
