import StatCard from "@/components/StatCard";
import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/DataTable";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Admin = () => {
  // Dummy data for the dashboard
  const appointments = {
    scheduledCount: 12,
    pendingCount: 5,
    cancelledCount: 3,
    documents: [], // Placeholder for the table data
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col space-y-14">
      <header className="admin-header">
        <div className="flex items-center space-x-2">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/icons/logo-icon.svg"
              height={32}
              width={162}
              alt="logo"
              className="h-8 w-fit"
            />
          </Link>
          <span className="text-xl font-bold"> Mathmate</span>
        </div>
        <p className="text-16-semibold">Your Profile</p>
      </header>
      <main className="admin-main">
        <section className="w-full space-y-4">
          <h1 className="header">Welcome, Username</h1>
          <p className="text-dark-700">Have a look at your profile</p>
        </section>

        <section className="admin-stat">
          <StatCard
            type="total"
            count={appointments.scheduledCount}
            label="Attempted Quizzes"
            icon="/assets/icons/appointments.svg"
          />
          <StatCard
            type="pass"
            count={appointments.pendingCount}
            label="Quizzes Passed"
            icon="/assets/icons/pending.svg"
          />
          <StatCard
            type="fail"
            count={appointments.cancelledCount}
            label="Quizzes Failed"
            icon="/assets/icons/cancelled.svg"
          />
        </section>

        {/* DataTable with placeholder columns and empty data */}
        <DataTable columns={columns} data={appointments.documents} />
      </main>
    </div>
  );
};

export default Admin;
