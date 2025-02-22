import AttendanceChart from "@/components/dashbaord/AttendanceChart";
import CountChart from "@/components/dashbaord/CountChart";
import UserCard from "@/components/dashbaord/UserCard";

export default function page() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* LEFT */}
      <div className="lg:w-2/3 w-full flex flex-col gap-8">
        <div className="  flex justify-between gap-4 flex-wrap">
          {/* USERCARD */}
          <UserCard type="Students" />
          <UserCard type="Teachers" />
          <UserCard type="Parents" />
          <UserCard type="Staff" />
        </div>
        {/* MIDDLE CHART */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* STUDENT CHART */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div></div>
      </div>
      {/* RIGHT */}
      <div className="lg:w-1/3 grow">dm</div>
    </div>
  );
}
