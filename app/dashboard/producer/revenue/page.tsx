"use client";

import React from "react";
import { DashboardHeader } from "@/components/dashboard-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function RevenueManagementPage() {
  return (
    <div className="space-y-8">
      <DashboardHeader />
      
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Revenue Management</h1>
        <p className="text-gray-600">Track your earnings, payments, and financial performance</p>
      </div>

      <Card className="shadow-sm border-0 bg-white">
        <CardHeader>
          <CardTitle>Test Revenue Page</CardTitle>
          <CardDescription>This is a simplified test version</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Revenue page is working!</p>
        </CardContent>
      </Card>
    </div>
  );
}
